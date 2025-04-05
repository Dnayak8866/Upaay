import React from 'react'
import { router } from 'expo-router'
import ConfirmationScreen from '@/screens/ConfirmationScreen'

export default function Confirmation() {
  return (
    <ConfirmationScreen
      onBackToLogin={() => router.replace('/(auth)/login')}
    />
  )
} 