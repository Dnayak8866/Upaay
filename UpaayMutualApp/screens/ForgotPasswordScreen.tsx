import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

type ForgotPasswordScreenProps = {
  forgotPasswordEmail: string;
  setForgotPasswordEmail: React.Dispatch<React.SetStateAction<string>>;
  onBackToLogin: () => void;
  onResetPassword: () => void;
}
const ForgotPasswordScreen = ({ forgotPasswordEmail, setForgotPasswordEmail, onBackToLogin, onResetPassword }: ForgotPasswordScreenProps) => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const handleEmailChange = (email: string) => {
    setForgotPasswordEmail(email.toLowerCase());
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView contentContainerStyle={{ flex: 1 }} automaticallyAdjustKeyboardInsets={true}>
        <View className="flex-1  px-6 mt-32">
          <TouchableOpacity onPress={onBackToLogin} className="mb-20">
            <View className="text-lg  flex-1"><View className='w-7 h-7 bg-[#EAEAEB] p-1'><AntDesign name="left" size={15} color="#292D32"/></View></View>
          </TouchableOpacity>

          <View className='mb-9'>
          <Text className="text-3xl font-extrabold text-gray-900 mb-2 font-poppins">Forgot Password?</Text>
          <Text className="text-gray-600 mb-6 font-poppins">
            Enter your email address to create new password
          </Text>
          </View>

          <Text className="text-gray-700 mb-2 font-poppins font-bold">Email Address</Text>
          <View className="flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-1 mb-4 bg-[#FFFFFF]">
            <FontAwesome name="envelope" size={16} color="gray"/>
            <TextInput
              className="flex-1 ml-2 text-gray-700 font-poppins"
              placeholder="hello@example.com"
              keyboardType="email-address"
              value={forgotPasswordEmail}
              onChangeText={handleEmailChange}
            />
          </View>

          <TouchableOpacity className="bg-primary py-3 rounded-lg mb-4 mt-6 disabled:bg-green-300" onPress={onResetPassword} disabled={!isEmailValid || forgotPasswordEmail.trim() === ''}
          >
            <Text className="text-center text-white text-lg font-semibold">Continue</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen