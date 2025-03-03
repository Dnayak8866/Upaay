import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import EmailIcon from '../assets/icons/sms.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import CustomTextInput from '@/components/common/CustomTextInput';
import CustomButton from '@/components/common/CustomButton';
import { LinearGradient } from "expo-linear-gradient"


type ForgotPasswordScreenProps = {
  formData: { forgotPasswordEmail: string }
  errors: Record<string, string>
  handleFieldChange: (field: 'forgotPasswordEmail', value: string) => void
  onSendOTP: () => void
  onBack: () => void
}

const ForgotPasswordScreen = ({ formData, errors, handleFieldChange, onSendOTP, onBack }: ForgotPasswordScreenProps) => {
  return (
    <LinearGradient colors={["#EBFBF7", "transparent", "#EBFBF7"]} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ flex: 1 }} automaticallyAdjustKeyboardInsets={true}>
          <View className="flex-1 px-6 mt-16">
            <TouchableOpacity onPress={onBack} className="mb-20">
              <View className="w-7 h-7 bg-[#EAEAEB] p-1 rounded-md">
                <ArrowLeft />
              </View>
            </TouchableOpacity>

            <View className="mb-9">
              <Text className="text-3xl font-extrabold text-[#292D32] mb-2 font-poppins">Forgot Password?</Text>
              <Text className="text-[#777F90] mb-6 font-poppins">
                Enter your email address to create a new password
              </Text>
            </View>

            <Text className="text-[#292D32] mb-1 font-medium leading-6 text-base">Email Address</Text>
            <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-3 mb-1 bg-[#FFFFFF] ${errors.forgotPasswordEmail ? "border-red-500" : ""}`}>
              <EmailIcon height={20} />
              <CustomTextInput
                placeholder='hello@example.com'
                value={formData.forgotPasswordEmail.toLowerCase()}
                onChangeText={(value) => handleFieldChange('forgotPasswordEmail', value)}
              />
            </View>

            {errors.forgotPasswordEmail && (
              <Text className="text-red-500 text-sm font-poppins">{errors.forgotPasswordEmail}</Text>
            )}
            <CustomButton
              onPress={onSendOTP}
              title="Continue"
              disabled={!formData.forgotPasswordEmail.trim()}
            />
          </View>
          <StatusBar style="dark" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default ForgotPasswordScreen