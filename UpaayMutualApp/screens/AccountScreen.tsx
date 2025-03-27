import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch, ScrollView, SafeAreaView } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ArrowLeftIcon from '../assets/icons/arrow-left-normal.svg'
import UserIcon from '../assets/icons/user-color.svg';
import InfoIcon from '../assets/icons/info-circle.svg';
import ThemeIcon from '../assets/icons/moon.svg';
import CopyIcon from '../assets/icons/copy.svg';

const AccountScreen = () => {
  const { logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView className={`flex-1 ${isDarkMode ? 'bg-[#151718]' : 'bg-[#DFEDF1]'}`}>
        <View className="flex-row items-center mb-4 mt-6 p-4 relative">
          <TouchableOpacity
            className='absolute left-4 bg-[#FFFFFF] p-2 rounded-md'
            onPress={() => router.back()}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className={`text-lg font-bold font-poppins ${isDarkMode ? 'text-[#FFFFFF]' : 'text-[#292D32]'}`}>Account</Text>
          </View>
        </View>

        <View className="bg-white rounded-2xl mt-6 mb-6 p-8 items-center mx-4">
          <Image
            source={require('@/assets/images/Avatar.png')}
            className="w-25 h-25 rounded-full"
          />
          <Text className="text-lg font-semibold mt-2 text-[#292D32]">Dharmesh BaidharNayak</Text>
        </View>

        <View className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} flex-1 p-4 rounded-3xl shadow-sm`}>
          <Text className={`${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#878787]'} mt-2 mb-2 text-lg font-poppins`}>Profile</Text>

          <View className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} rounded-2xl`}>
            <TouchableOpacity
              className="flex-row items-center justify-between p-4"
            // onPress={() => router.push('/(protected)/my-team' as any)}
            >
              <View className="flex-row items-center">
                <UserIcon />
                <Text className={`ml-3 text-base ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#101010]'} font-semibold font-poppins`}>My Team</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color={isDarkMode ? '#ECEDEE' : '#101010'} />
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between p-4"
            // onPress={() => router.push('/(protected)/terms' as any)}
            >
              <View className="flex-row items-center">
                <InfoIcon />
                <Text className={`ml-3 text-base ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#101010]'} font-semibold font-poppins`}>Terms and condition</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color={isDarkMode ? '#ECEDEE' : '#101010'} />
            </TouchableOpacity>

            <View className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center">
                <ThemeIcon />
                <Text className={`ml-3 text-base ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#101010]'} font-semibold font-poppins`}>Dark Theme</Text>
              </View>
              <Switch
                trackColor={{ false: '#767577', true: '#04B888' }}
                thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
                onValueChange={toggleTheme}
                value={isDarkMode}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={handleSignOut}
            className="mt-4 bg-red-500 p-4 rounded-2xl"
          >
            <Text className="text-white text-center font-semibold text-base">Sign Out</Text>
          </TouchableOpacity>

          <View className="mt-6">
            <Text className="text-[#000000] mb-2 font-semibold font-poppins">Refer your friend</Text>
            <View className="bg-[#E6F8F4] rounded-2xl p-4 flex-row items-center justify-between border-2 border-dotted border-[#04B888]">
              <Text className="text-[#04B888] ml-2">nix-pay/awesomeyou-xyz</Text>
              <TouchableOpacity className='bg-white rounded-lg p-2'>
                <CopyIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen; 