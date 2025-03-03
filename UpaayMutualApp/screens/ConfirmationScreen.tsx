import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from "expo-linear-gradient"


type ConfirmationProps = {
  onBackToLogin: () => void
}
const ConfirmationScreen = ({ onBackToLogin }: ConfirmationProps) => {
  return (
    <LinearGradient colors={["#EBFBF7", "transparent", "#EBFBF7"]} style={{ flex: 1 }}>
      <View className='flex-1 justify-center items-center px-6 bg-green-50'>
        <Image source={require('../assets/images/congratulation.png')} />
        <Text className="text-3xl font-extrabold text-[#292D32] font-poppins mt-4">Congratulations!</Text>
        <Text className="text-[#777F90] text-center mt-2 font-poppins">Your new password has been updated successfully.</Text>
        <TouchableOpacity className="mt-8" onPress={onBackToLogin}>
          <Text className="text-primary font-bold font-poppins">Sign in here</Text>
        </TouchableOpacity>
        <StatusBar style='dark' />
      </View>
    </LinearGradient>
  )
}

export default ConfirmationScreen