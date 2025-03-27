import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import EmailIcon from '../assets/icons/sms.svg';
import ArrowLeft from '../assets/icons/arrow-left.svg';
import CustomTextInput from '@/components/common/CustomTextInput';
import CustomButton from '@/components/common/CustomButton';
import { LinearGradient } from "expo-linear-gradient"

const { width } = Dimensions.get('window');

type ForgotPasswordScreenProps = {
  formData: { forgotPasswordEmail: string }
  errors: Record<string, string>
  handleFieldChange: (field: 'forgotPasswordEmail', value: string) => void
  onSendOTP: () => void
  onBack: () => void
}

const ForgotPasswordScreen = ({ formData, errors, handleFieldChange, onSendOTP, onBack }: ForgotPasswordScreenProps) => {
  const textSize = width > 600 ? 'text-4xl' : 'text-3xl';
  const paddingX = width > 600 ? 'px-12' : 'px-6';
  const marginTop = width > 600 ? 'mt-20' : 'mt-16';
  const marginBottom = width > 600 ? 'mb-12' : 'mb-9';
  const backButtonMargin = width > 600 ? 'mb-24' : 'mb-20';
  const iconScale = width > 600 ? 1.2 : 1;
  const backButtonSize = width > 600 ? 'w-9 h-9' : 'w-7 h-7';

  return (
    <LinearGradient colors={["#EBFBF7", "transparent", "#EBFBF7"]} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          <View className={`flex-1 ${paddingX} ${marginTop}`}>
            <TouchableOpacity onPress={onBack} className={backButtonMargin}>
              <View className={`${backButtonSize} bg-[#EAEAEB] p-1 rounded-md flex items-center justify-center`}>
                <ArrowLeft height={20 * iconScale} width={20 * iconScale} />
              </View>
            </TouchableOpacity>

            <View className={marginBottom}>
              <Text className={`${textSize} font-extrabold text-[#292D32] mb-2 font-poppins leading-9`}>Forgot Password?</Text>
              <Text className="text-[#777F90] mb-6 font-poppins text-lg leading-6">
                Enter your email address to create a new password
              </Text>
            </View>

            <Text className="text-[#292D32] mb-1 font-bold leading-6 text-base font-poppins">Email Address</Text>
            <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-3 mb-1 bg-[#FFFFFF] ${errors.forgotPasswordEmail ? "border-red-500" : ""}`}>
              <EmailIcon height={20 * iconScale} />
              <CustomTextInput
                placeholder='hello@example.com'
                value={formData.forgotPasswordEmail.toLowerCase()}
                onChangeText={(value) => handleFieldChange('forgotPasswordEmail', value)}
              />
            </View>

            {errors.forgotPasswordEmail && (
              <Text className="text-red-500 text-sm font-poppins">{errors.forgotPasswordEmail}</Text>
            )}
            
            <View className="mt-4">
              <CustomButton
                onPress={onSendOTP}
                title="Continue"
                disabled={!formData.forgotPasswordEmail.trim()}
              />
            </View>
          </View>
          <StatusBar style="dark" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default ForgotPasswordScreen