import { Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { login } from '@/service/api/authService';
import LoginScreen from '@/screens/LoginScreen';
import SplashScreenPage from '@/screens/SplashScreen';
import { AxiosError } from 'axios';
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen';
import EmailVerificationScreen from '@/screens/EmailVerificationScreen';
import ResetPasswordScreen from '@/screens/ResetPasswordScreen';
import ConfirmationScreen from '@/screens/ConfirmationScreen';

const AuthLayout = () => {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'forgot' | 'verify' | 'reset' | 'splash'| 'confirm'>('splash');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setPasswordVisible(!isPasswordVisible);
    } else if (field === 'confirmPassword') {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    }
  };

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    try {
      const loginObj = { email, password };
      // const data = await login(loginObj);
      // Alert.alert('Login Successful', data.message);
      if (email === 'hello@example.com' && password === 'password123') {
        Alert.alert("Login Successful");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        Alert.alert("Login Failed", error.message);
      } else {
        Alert.alert("Login Failed", 'An unexpected error occurred.');
      }
    }
  };
  const onForgotPassword = ()=>{
    setForgotPasswordEmail('')
    setCurrentScreen('forgot')
  }

  const handleResetPassword = ()=>{
    setCurrentScreen('confirm');
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const onVerify =() => {
    setCurrentScreen('reset');
  }

  return (
    <>
      {currentScreen === 'splash' && <SplashScreenPage />}
      {currentScreen === 'login' && (
        <LoginScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          emailError={emailError}
          setEmailError={setEmailError}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
          handleLogin={handleLogin}
          onForgotPassword={onForgotPassword}
        />
      )}
      {currentScreen === 'forgot' && (
        <ForgotPasswordScreen
          setForgotPasswordEmail={setForgotPasswordEmail}
          forgotPasswordEmail={forgotPasswordEmail}
          onBackToLogin={() => setCurrentScreen('login')}
          onResetPassword={() => setCurrentScreen('verify')}
        />
      )}
      {currentScreen === 'verify' && (
        <EmailVerificationScreen
         onVerify={onVerify}
         onBackToForgotPassword ={()=>setCurrentScreen('forgot')}/>
      )}
      {currentScreen === 'reset' && (
        <ResetPasswordScreen isPasswordVisible={isPasswordVisible} isConfirmPasswordVisible={isConfirmPasswordVisible} togglePasswordVisibility={togglePasswordVisibility} onConfirm={()=>setCurrentScreen('confirm')}/>
      )}
      {currentScreen === 'confirm' && (
        <ConfirmationScreen onBackToLogin={() => setCurrentScreen('login')}/>
      )}
    </>
  )
}

export default AuthLayout