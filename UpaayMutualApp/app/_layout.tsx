import React from 'react'
import '../global.css'
import { Stack } from 'expo-router'
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout