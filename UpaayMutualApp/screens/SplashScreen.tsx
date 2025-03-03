import React from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 600;

export default function SplashScreenPage() {
  return (
    <SafeAreaView className='flex-1'>
      <ImageBackground
        source={require('@/assets/images/splash_screen3.png')}
        className='flex-1 justify-between flex-col items-center'
        resizeMode='cover'
      >
        <View className={isTablet ? 'mt-10' : 'mt-8'}>
          <Image
            source={require('@/assets/images/logo.png')}
            className='w-[160px] h-[90px] mt-10'
            resizeMode='contain'
          />
          <Text className='font-poppins font-bold text-2xl text-[#FFFFFF] mt-1'>MUTUAL FUNDS</Text>
        </View>

        <View className='mb-28'>
          <Text className='text-[#FFFFFF] text-center text-3xl font-bold font-poppins leading-9'>
            Upaay Mutual Funds
          </Text>
          <Text className='text-[#FFFFFF] text-center text-lg mt-3 leading-6 font-poppins'>
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </Text>
          <View className='mt-16'>
            <ActivityIndicator size='large' color='#fff'  />
          </View>
        </View>
      </ImageBackground>
      <StatusBar style='light' />
    </SafeAreaView>
  );
}
