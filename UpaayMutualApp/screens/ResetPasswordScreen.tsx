import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

type ResetPasswordProps={
    isPasswordVisible: boolean;
    isConfirmPasswordVisible: boolean;
    togglePasswordVisibility: (field : string) => void;
    onConfirm: () => void;
}
const ResetPasswordScreen = ({isPasswordVisible,isConfirmPasswordVisible, togglePasswordVisibility, onConfirm}: ResetPasswordProps) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    useEffect(() => {
      if (confirmPassword && password !== confirmPassword) {
        setError('Passwords do not match');
      } else {
        setError('');
      }
    }, [confirmPassword, password]);

    const isContinueDisabled = password !== confirmPassword || !password || !confirmPassword;
    return (
      <SafeAreaView className="flex-1 bg-green-50 px-6">
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View className="mt-32">
          <View className="mb-9">
            <Text className="text-3xl font-extrabold text-gray-900">Reset Password</Text>
            <Text className="text-gray-600 mt-2">Enter your new password twice below to reset your password.</Text>
          </View>
          <Text className="text-gray-700 mt-6 font-bold font-poppins">Enter New Password</Text>
          <View className="flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-1 bg-white mt-2">
            <FontAwesome name="lock" size={18} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-gray-700"
              placeholder="Enter new password"
              secureTextEntry = {!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={()=>togglePasswordVisibility('password')}>
                <FontAwesome name={isPasswordVisible ? "eye" : "eye-slash"} size={16} color="gray" />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-700 mt-6 font-bold font-poppins">Re-enter New Password</Text>
          <View className="flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-1 bg-[#FFFFFF] mt-2">
            <FontAwesome name="lock" size={18} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-gray-700 font-poppins"
              placeholder="Confirm password"
              secureTextEntry ={!isConfirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => togglePasswordVisibility('confirmPassword')}>
                <FontAwesome name={isConfirmPasswordVisible ? "eye" : "eye-slash"} size={16} color="gray" />
            </TouchableOpacity>
          </View>
          {error ? (
            <Text className="text-red-500 text-sm mt-1">{error}</Text>
          ) : null}
          <TouchableOpacity className="bg-primary py-3 rounded-lg mt-8 disabled:bg-green-300"  onPress={onConfirm} disabled={isContinueDisabled} >
            <Text className="text-center text-white text-lg font-semibold">Continue</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar style="dark" />
      </SafeAreaView>
    );
  };

  export default ResetPasswordScreen