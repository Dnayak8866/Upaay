import { Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { login, sendOTP, verifyOTP, resetPassword } from '@/service/api/authService'
import { z } from 'zod'
import LoginScreen from '@/screens/LoginScreen'
import SplashScreenPage from '@/screens/SplashScreen'
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen'
import EmailVerificationScreen from '@/screens/EmailVerificationScreen'
import ResetPasswordScreen from '@/screens/ResetPasswordScreen'
import ConfirmationScreen from '@/screens/ConfirmationScreen'

type Screen = 'splash' | 'login' | 'forgot' | 'verify' | 'reset' | 'confirm'
const AuthLayout = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    forgotPasswordEmail: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [visiblePasswords, setVisiblePasswords] = useState({
    password: false,
    confirmPassword: false
  })
  const [isRememberMe, setIsRememberMe] = useState(false)

  const emailSchema = z.string().min(1, 'Email is required').email('Please enter a valid email address')
  const passwordSchema = z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters')

  const validateField = (schema: z.ZodType<any>, value: string): string => {
    const result = schema.safeParse(value)
    return result.success ? '' : result.error.errors[0].message
  }

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setVisiblePasswords(prev => ({ ...prev, [field]: !prev[field] }))
  }


  const validateCredentials = () => {
    const emailError = validateField(emailSchema, formData.email)
    const passwordError = validateField(passwordSchema, formData.password)

    if (emailError) {
      setErrors({ email: emailError })
      return false
    }

    if (passwordError) {
      setErrors({ password: passwordError })
      return false
    }

    return true
  }

  const handleLogin = async () => {
    try {
      const isValid = validateCredentials()
      if (!isValid) return

      const response = await login({
        email: formData.email,
        password: formData.password
      })
      if (response) {
        Alert.alert("Login successful")
        router.replace('/(protected)/Home')
        console.log('Response', response);
      } else {
        Alert.alert('Login Failed')
      }
    } catch (error) {
      Alert.alert(
        'Login Failed',
        error instanceof Error ? error.message : 'An unexpected error occurred'
      )
    }
  }

  const handleSendOTP = async () => {
    try {
      const emailError = validateField(emailSchema, formData.forgotPasswordEmail)
      if (emailError) {
        setErrors({ forgotPasswordEmail: emailError })
        return
      }

      const result = await sendOTP({ email: formData.forgotPasswordEmail })
      if (result) {
        setCurrentScreen('verify')
      } else {
        Alert.alert('Failed to Send OTP', result)
      }
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Failed to send OTP'
      )
    }
  }

  const handleVerifyOTP = async (code: string[]) => {
    try {
      const otp = code.join('');
      const result = await verifyOTP({
         otp: otp,
         emailId: formData.forgotPasswordEmail
         })
      if (result) {
        setCurrentScreen('reset')
      } else {
        Alert.alert('Verification Failed', result)
      }
    } catch (error) {
      Alert.alert(
        'Verification Failed',
        error instanceof Error ? error.message : 'Invalid OTP'
      )
    }
  }

  const handleResetPassword = async () => {
    try {
      const result = await resetPassword({ 
        email: formData.forgotPasswordEmail,
        password: formData.newPassword 
      })
      const newPasswordError = validateField(passwordSchema, formData.newPassword)
      if (newPasswordError) {
        setErrors({ ...errors, newPassword: newPasswordError })
        return
      }

      if (formData.newPassword !== formData.confirmPassword) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match" })
        return
      }

      if (result) {
        setCurrentScreen('confirm')
        setFormData({ ...formData, newPassword: '', confirmPassword: '' })
      } else {
        Alert.alert('Password Reset Failed')
      }
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Failed to reset password'
      )
    }
  }

  // Initial splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => setCurrentScreen('login'), 3000)
    return () => clearTimeout(timer)
  }, [])

  const screenProps = {
    formData,
    errors,
    visiblePasswords,
    isRememberMe,
    handleFieldChange,
    togglePasswordVisibility,
    setIsRememberMe,
    setCurrentScreen
  }

  return (
    <>
      {currentScreen === 'splash' && <SplashScreenPage />}
      {currentScreen === 'login' && (
        <LoginScreen
          {...screenProps}
          handleLogin={handleLogin}
          onForgotPassword={() => { setCurrentScreen('forgot'); setFormData({ ...formData, forgotPasswordEmail: '' }); setErrors({}) }}
        />
      )}
      {currentScreen === 'forgot' && (
        <ForgotPasswordScreen
          {...screenProps}
          onSendOTP={handleSendOTP}
          onBack={() => setCurrentScreen('login')}
        />
      )}
      {currentScreen === 'verify' && (
        <EmailVerificationScreen
          handleVerifyOTP={handleVerifyOTP}
          onBackToForgotPassword={() => setCurrentScreen('forgot')}
        />
      )}
      {currentScreen === 'reset' && (
        <ResetPasswordScreen
          {...screenProps}
          handleResetPassword={handleResetPassword}
        />
      )}
      {currentScreen === 'confirm' && (
        <ConfirmationScreen
          onBackToLogin={() => setCurrentScreen('login')}
        />
      )}
    </>
  )
}

export default AuthLayout