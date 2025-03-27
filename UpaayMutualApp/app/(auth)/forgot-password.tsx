import { Alert } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { z } from 'zod'
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen'
import { sendOTP } from '@/service/api/authService'

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    forgotPasswordEmail: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const emailSchema = z.string().min(1, 'Email is required').email('Please enter a valid email address')

  const validateField = (schema: z.ZodType<any>, value: string): string => {
    const result = schema.safeParse(value)
    return result.success ? '' : result.error.errors[0].message
  }

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSendOTP = async () => {
    try {
      const emailError = validateField(emailSchema, formData.forgotPasswordEmail)
      if (emailError) {
        setErrors({ forgotPasswordEmail: emailError })
        return
      }

      // const result = await sendOTP({ email: formData.forgotPasswordEmail })
      const result = true;
      if (result) {
        router.push('/(auth)/verify-otp')
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

  return (
    <ForgotPasswordScreen
      formData={formData}
      errors={errors}
      handleFieldChange={handleFieldChange}
      onSendOTP={handleSendOTP}
      onBack={() => router.back()}
    />
  )
} 