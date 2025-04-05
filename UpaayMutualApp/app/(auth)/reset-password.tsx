import { Alert } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { z } from 'zod'
import ResetPasswordScreen from '@/screens/ResetPasswordScreen'
import { resetPassword } from '@/service/api/authService'

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [visiblePasswords, setVisiblePasswords] = useState({
    password: false,
    confirmPassword: false
  })

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

  const handleResetPassword = async () => {
    try {
      const newPasswordError = validateField(passwordSchema, formData.newPassword)
      if (newPasswordError) {
        setErrors({ ...errors, newPassword: newPasswordError })
        return
      }

      if (formData.newPassword !== formData.confirmPassword) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match" })
        return
      }

      // const result = await resetPassword({ 
      //   email: formData.forgotPasswordEmail,
      //   password: formData.newPassword 
      // })
      const result = true;
      if (result) {
        router.push('/(auth)/confirmation')
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

  return (
    <ResetPasswordScreen
      formData={formData}
      errors={errors}
      visiblePasswords={visiblePasswords}
      handleFieldChange={handleFieldChange}
      togglePasswordVisibility={togglePasswordVisibility}
      handleResetPassword={handleResetPassword}
    />
  )
} 