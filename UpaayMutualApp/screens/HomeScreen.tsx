import React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import EmptyWalletIcon from '../assets/icons/empty-wallet.svg'
import EmptyWalletTimeIcon from '../assets/icons/empty-wallet-time.svg';
import SearchIcon from '../assets/icons/Search.svg';
import RefreshIcon from '../assets/icons/refresh.svg';
import FilterIcon from '../assets/icons/Filter.svg';
import StatusIcon from '../assets/icons/status.svg';
import ArrowRightIcon from '../assets/icons/arrow-right.svg';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <ScrollView className={`flex-1 ${isDarkMode ? 'bg-[#151718]' : 'bg-[#E7F3F6]'} p-4`}>
            <View className="flex-row justify-between items-center mb-4 mt-6">
                <View className="flex-row items-center">
                    <View className='border border-white rounded-full'>
                        <Image
                            source={require("@/assets/images/profile-icon.png")}
                            className="w-12 h-12 rounded-full"
                        />
                    </View>
                    <View className="ml-3">
                        <Text className={`${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#292D32]'} text-lg font-poppins font-bold`}>Hi Nicolas!</Text>
                        <View className='bg-white border-[#FFFFFF] px-2 rounded-lg'>
                            <Text className='text-[#292D32] text-sm font-medium font-poppins'>Welcome to Upaay</Text>
                        </View>
                    </View>
                </View>
                <View className={`flex-row items-center ${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} p-2 rounded-full`}>
                    <View className='bg-primary p-2 rounded-full'><Image source={require('@/assets/images/coin.png')} alt='coin' /></View>
                    <Text className={`ml-2 font-bold font-poppins ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#292D32]'}`}>$1.44L</Text>
                </View>
            </View>

            <View className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} p-4 rounded-3xl shadow-sm mb-6`}>
                <View className="flex-row justify-between items-center mb-2 mt-1">
                    <Text className={`${isDarkMode ? 'text-[#9BA1A6]' : 'text-[#7F8184]'} text-md font-poppins pl-2`}>P & L</Text>
                    <Text className={`${isDarkMode ? 'text-[#9BA1A6]' : 'text-[#7F8184]'} text-md font-poppins mr-2`}>XIRR</Text>
                </View>
                <Text className="text-primary pl-2 text-3xl font-bold font-poppins">$ 25.65k</Text>
                <TouchableOpacity className="absolute right-4 top-14 bg-[#21577A] px-3 py-1 rounded-full flex-row justify-between items-center">
                    <Text className="text-white text-sm font-poppins">View</Text>
                    <RefreshIcon style={{ marginLeft: 6 }} />
                </TouchableOpacity>
                <View className={`border-t ${isDarkMode ? 'border-[#2A2D2E]' : 'border-gray-200'} mt-5 pt-3 flex-row justify-between`}>
                    <View className={`items-center flex-1 border-r ${isDarkMode ? 'border-[#2A2D2E]' : 'border-gray-200'} justify-center flex-row gap-3 mt-3 mb-2`}>
                        <EmptyWalletIcon />
                        <View>
                            <Text className="text-[#21577A] text-base font-poppins">Invested</Text>
                            <Text className="text-primary font-bold text-lg font-poppins">$ 1.29L</Text>
                        </View>
                    </View>
                    <View className="items-center flex-1 justify-center flex-row gap-3 mt-3 mb-2">
                        <EmptyWalletTimeIcon />
                        <View>
                            <Text className="text-[#21577A] text-base font-poppins">Current</Text>
                            <Text className="text-primary font-bold text-lg font-poppins">$ 1.29L</Text>
                        </View>
                    </View>
                </View>
            </View>

            <Text className={`${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#000000]'} text-lg font-bold mt-4 font-poppins`}>Explore</Text>
            <Text className='text-[#777F90] mb-4 font-poppins text-sm'>Explore top funds by category</Text>
            <View className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} p-2 rounded-full flex-row items-center mb-6 justify-between`}>
                <View className="flex-row items-center ml-2">
                    <SearchIcon />
                    <TextInput
                        className={`ml-2 leading-4 text-lg font-medium placeholder:text-[#9CA4AB] ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#292D32]'}`}
                        placeholder="Search..."
                        placeholderTextColor={isDarkMode ? '#9BA1A6' : '#9CA4AB'}
                        style={{ height: 40 }}
                    />
                </View>
                <View className={`mr-2 border-l ${isDarkMode ? 'border-[#2A2D2E]' : 'border-[#E3E7EC]'} pl-2`}>
                    <FilterIcon />
                </View>
            </View>

            <Text className={`${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#000000]'} text-lg font-bold mb-4 font-poppins`}>Upcoming SIP List</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps="handled" className="flex-row space-x-4">
                {[1, 2, 3].map((item) => (
                    <TouchableOpacity key={item} className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} p-4 rounded-3xl shadow-sm w-60 mr-2`}>
                        <View className={`w-10 h-10 p-7 ${isDarkMode ? 'bg-[#3A3D3E]' : 'bg-green-50'} rounded-full flex items-center justify-center mb-2`}>
                            <StatusIcon />
                        </View>
                        <Text className="text-primary font-bold font-poppins text-xl">Nippon India{"\n"}Dynamic Bond Fund</Text>
                        <Text className={`${isDarkMode ? 'text-[#9BA1A6]' : 'text-[#777F90]'} text-base font-poppins mt-1`}>Next installment:&nbsp;&nbsp;&nbsp; <Text className="text-primary text-base font-medium font-poppins">27th Jan</Text></Text>
                        <Text className={`${isDarkMode ? 'text-[#9BA1A6]' : 'text-[#777F90]'} text-base font-poppins mt-1 text-ellipsis text-nowrap`} numberOfLines={1}>Direct | Growth | Debt - Dynamic Bond</Text>
                        <TouchableOpacity className="mt-4 ml-2">
                            <ArrowRightIcon />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <StatusBar style={isDarkMode ? 'light' : 'dark'} />
        </ScrollView>
    );
};

export default HomeScreen;
