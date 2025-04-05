import { Alert } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import EmailVerificationScreen from '@/screens/EmailVerificationScreen'
import { verifyOTP } from '@/service/api/authService'

export default function VerifyOTP() {
  const handleVerifyOTP = async (code: string[]) => {
    try {
      const otp = code.join('');
      // const result = await verifyOTP({
      //    otp: otp,
      //    emailId: formData.forgotPasswordEmail
      //    })
      const result = true;
      if (result) {
        router.push('/(auth)/reset-password')
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

  return (
    <EmailVerificationScreen
      handleVerifyOTP={handleVerifyOTP}
      onBackToForgotPassword={() => router.back()}
    />
  )
} 