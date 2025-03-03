import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import EmailIcon from '../assets/icons/sms.svg';
import LockIcon from '../assets/icons/lock.svg';
import EyeOpen from '../assets/icons/eye.svg';
import EyeClose from '../assets/icons/eye-slash.svg';
import CustomTextInput from '@/components/common/CustomTextInput';
import CustomButton from '@/components/common/CustomButton';
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window');

interface LoginScreenProps {
  formData: {
    email: string;
    password: string;
  };
  errors: {
    email?: string;
    password?: string;
  };
  visiblePasswords: {
    password: boolean;
  };
  isRememberMe: boolean;
  handleFieldChange: (field: 'email' | 'password', value: string) => void;
  togglePasswordVisibility: (field: 'password') => void;
  setIsRememberMe: (value: boolean) => void;
  handleLogin: () => void;
  onForgotPassword: () => void;
}

const LoginScreen = ({
  formData,
  errors,
  visiblePasswords,
  isRememberMe,
  handleFieldChange,
  togglePasswordVisibility,
  setIsRememberMe,
  handleLogin,
  onForgotPassword,
}: LoginScreenProps) => {
  const textSize = width > 600 ? 'text-4xl' : 'text-3xl';
  const paddingX = width > 600 ? 'px-12' : 'px-6';
  const marginBottom = width > 600 ? 'mb-10' : 'mb-6';

  return (
    <LinearGradient colors={['#EBFBF7', 'transparent', '#EBFBF7']} style={{ flex: 1 }}>
      <SafeAreaView className='flex-1'>
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          <View className={`flex-1  ${paddingX} pt-24`}>
            <View className={`self-start ${marginBottom}`} style={{ maxWidth: 300, width: '100%' }}>
              <Image
                source={require('../assets/images/logo_1.png')}
                style={{ width: '40%', height: 75 }}
                resizeMode='contain'
              />
            </View>
            <Text className={`${textSize} mb-2 text-[#292D32] font-extrabold font-poppins leading-9`}>Login</Text>
            <Text className='text-[#777F90] mb-4 font-poppins text-lg leading-6'>Welcome back to the app</Text>

            <Text className='text-[#292D32] mb-1 mt-4 font-bold leading-6 text-base font-poppins'>Email Address</Text>
            <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-3 mb-1 bg-[#FFFFFF] ${errors.email ? 'border-red-500' : ''}`}>
              <EmailIcon height={20} />
              <CustomTextInput
                placeholder='hello@example.com'
                value={formData.email}
                onChangeText={(text) => handleFieldChange('email', text.toLowerCase())}
              />
            </View>
            {errors.email && <Text className='text-red-500 text-sm font-poppins'>{errors.email}</Text>}

            <Text className='text-[#292D32] mb-1 mt-3 font-bold leading-6 text-base font-poppins'>Password</Text>
            <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-3 mb-1 bg-[#FFFFFF] ${errors.password ? 'border-red-500' : ''}`}>
              <LockIcon height={20} />
              <CustomTextInput
                placeholder='Enter password'
                secureTextEntry={!visiblePasswords.password}
                value={formData.password}
                onChangeText={(text) => handleFieldChange('password', text)}
              />
              <TouchableOpacity onPress={() => togglePasswordVisibility('password')}>
                {visiblePasswords.password ? <EyeOpen height={20} width={18} /> : <EyeClose height={20} width={18} />}
              </TouchableOpacity>
            </View>
            {errors.password && <Text className='text-red-500 text-sm font-poppins'>{errors.password}</Text>}

            <View className='flex-row justify-between items-center mb-4 mt-2'>
              <View className='flex-row items-center'>
                <Checkbox
                  value={isRememberMe}
                  onValueChange={setIsRememberMe}
                  className='m-2 p-2'
                  style={{ transform: [{ scale: 1 }], borderColor: '#C7C7C7', borderRadius: 5 }}
                />
                <Text className='text-[#777F90] font-poppins'>Keep me signed in</Text>
              </View>
              <TouchableOpacity onPress={onForgotPassword}>
                <Text className='text-primary font-semibold'>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <CustomButton onPress={handleLogin} title='Sign In' />
          </View>
          <StatusBar style='dark' />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
