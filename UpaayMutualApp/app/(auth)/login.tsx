import { Alert } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { z } from 'zod'
import LoginScreen from '@/screens/LoginScreen'
import { useAuth } from '@/context/AuthContext'

export default function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [visiblePasswords, setVisiblePasswords] = useState({
    password: false,
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

  const togglePasswordVisibility = (field: 'password') => {
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

      // TODO: Uncomment when API is ready
      // const response = await login({
      //   email: formData.email,
      //   password: formData.password
      // })
      // if (response) {
      //   router.replace('/(protected)/Home')
      //   console.log('Response', response);
      // } else {
      //   console.error('Login Failed')
      // }

      // Temporary solution for testing
      await login('dummy_access_token', 'dummy_refresh_token');
    } catch (error) {
      Alert.alert(
        'Login Failed',
        error instanceof Error ? error.message : 'An unexpected error occurred'
      )
    }
  }

  return (
    <LoginScreen
      formData={formData}
      errors={errors}
      visiblePasswords={visiblePasswords}
      isRememberMe={isRememberMe}
      handleFieldChange={handleFieldChange}
      togglePasswordVisibility={togglePasswordVisibility}
      setIsRememberMe={setIsRememberMe}
      handleLogin={handleLogin}
      onForgotPassword={() => router.push('/(auth)/forgot-password')}
    />
  )
} 