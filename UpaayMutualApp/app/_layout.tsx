import { useEffect, useState } from 'react';
import '../global.css';
import { Stack, Slot, useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext';
import SplashScreen from '@/screens/SplashScreen';
import { BackHandler } from 'react-native';

function RootLayoutNav() {
  const { checkAuth, isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 5 seconds
    const splashTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    // Handle hardware back button press
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // If we're in the auth group and not on the login screen, allow back navigation
      if (segments[0] === '(auth)' && segments[1] !== 'login') {
        router.back();
        return true;
      }

      // If we're in the protected group, allow back navigation
      if (segments[0] === '(protected)' && segments[1] !== 'Home') {
        router.back();
        return true;
      }

      // If we're on the home screen or login screen, prevent back navigation
      if ((segments[0] === '(protected)' && segments[1] === 'Home') ||
        (segments[0] === '(auth)' && segments[1] === 'login')) {
        return true;
      }

      return false;
    });

    return () => backHandler.remove();
  }, [segments, router]);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inProtectedGroup = segments[0] === '(protected)';

    checkAuth().then(() => {
      if (isAuthenticated && inAuthGroup) {
        // Redirect to the protected area if authenticated and trying to access auth screens
        router.replace('/(protected)/Home');
      } else if (!isAuthenticated && inProtectedGroup) {
        // Redirect to the auth area if not authenticated and trying to access protected screens
        router.replace('/(auth)/login');
      }
    });
  }, [segments, isLoading, isAuthenticated]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ThemeProvider>
  );
}