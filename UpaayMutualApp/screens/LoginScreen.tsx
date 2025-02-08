import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, ScrollView, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar'
import { Link } from "expo-router";
import Checkbox from 'expo-checkbox';
import { login } from "@/service/api/authService";
import { AxiosError } from "axios";

type LoginScreenProps = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailError: string;
  setEmailError: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordError: string;
  setPasswordError: React.Dispatch<React.SetStateAction<string>>
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isPasswordVisible: boolean;
  togglePasswordVisibility: (field:string) => void;
  handleLogin: () => void;
  onForgotPassword: () => void;
}
const LoginScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isChecked,
  setIsChecked,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  isPasswordVisible,
  togglePasswordVisibility,
  handleLogin,
  onForgotPassword
}: LoginScreenProps) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{flex:1}} automaticallyAdjustKeyboardInsets={true}>
      <View className="flex-1 bg-green-50 justify-center px-6">
        <View className="self-start mb-8">
        <Image source={require('../assets/images/logo_1.png')} className="h-20 w-32" resizeMode="contain"/>
        </View>
        <Text className="text-3xl mb-2 text-[#292D32] font-extrabold font-poppins">Login</Text>
        <Text className="text-gray-500 mb-4 font-poppins text-lg">Welcome back to the app</Text>

        <Text className="text-gray-700 mb-1 font-poppins">Email Address</Text>
        <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-1 mb-1 bg-[#FFFFFF] ${emailError ? 'border-red-500' :''}`}>
          <FontAwesome name="envelope" size={16} color="gray" />
          <TextInput
            className="flex-1 ml-2 text-gray-700 font-poppins"
            placeholder="hello@example.com"
            keyboardType="email-address"
            value={email}
            onChangeText={text => {setEmail(text.toLowerCase())
              if(emailError) setEmailError('')}
            }
          />
        </View>
        {emailError ? (
          <Text className="text-red-500 text-sm font-poppins mt-0">{emailError}</Text>
        ) : null}

        <Text className="text-gray-700 mb-1 mt-3 font-poppins">Password</Text>
        <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-1 mb-1 bg-[#FFFFFF] ${passwordError ? 'border-red-500' :''}`}>
          <FontAwesome name="lock" size={18} color="gray" />
          <TextInput
            className="flex-1 ml-2 text-gray-700 font-poppins"
            placeholder="Enter password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={text=>{
              setPassword(text);
              if(passwordError) setPasswordError('')
            }}
          />
          <TouchableOpacity onPress={()=>togglePasswordVisibility('password')}>
          <FontAwesome name={isPasswordVisible ? "eye" : "eye-slash"} size={16} color="gray" />
        </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text className="text-red-500 text-sm font-poppins">{passwordError}</Text>
        ) : null}
        <View className="flex-row justify-between items-center mb-4 mt-2">
          <View className="flex-row items-center">
            <Checkbox value={isChecked} onValueChange={setIsChecked} className="m-2" style={{ transform: [{ scale: 0.9 }], borderColor:'#C7C7C7', borderRadius:5 }} />
            <Text className="text-gray-600 font-poppins">Keep me signed in</Text>
          </View>
          <TouchableOpacity onPress={onForgotPassword}><Text className="text-primary font-semibold">Forgot Password?</Text></TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-primary py-3 rounded-lg mb-4 mt-6" onPress={handleLogin} >
          <Text className="text-center text-white text-lg font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;