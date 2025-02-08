import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

type ConfirmationProps ={
    onBackToLogin : () => void
}
const ConfirmationScreen = ({onBackToLogin}: ConfirmationProps) => {
  return (
    <View className='flex-1 justify-center items-center px-6 bg-green-50'>
      <Image source={require('../assets/images/congratulation.png')}/>
      <Text className="text-3xl font-extrabold text-gray-800 mt-4">Congratulations!</Text>
      <Text className="text-gray-600 text-center mt-2">Your new password has been updated successfully.</Text>
      <TouchableOpacity className="mt-8" onPress={onBackToLogin}>
        <Text className="text-primary font-bold font-poppins">Sign in here</Text>
      </TouchableOpacity>
      <StatusBar style='dark'/>
    </View>
  )
}

export default ConfirmationScreen