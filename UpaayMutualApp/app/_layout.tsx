import React, { useEffect, useState } from 'react'
import '../global.css'
import { Stack } from 'expo-router'
const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 3000);
    };
    checkAuth();
  }, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="(protected)" />
      ) : (
        <Stack.Screen name="(auth)" />
      )}
    </Stack>
  )
}

export default AppLayout