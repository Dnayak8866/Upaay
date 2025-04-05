import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, TextInput, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import ArrowLeftIcon from '@/assets/icons/arrow-left-normal.svg'
import { StatusBar } from 'expo-status-bar';
import StatusIcon from '../assets/icons/status.svg';


const OrderDetailsScreen = () => {
    const { isDarkMode } = useTheme();
    const [amount, setAmount] = useState('64,000');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView className="flex-1 bg-[#DFEDF1]">
                <View className="flex-row items-center mb-4 mt-12 p-4 relative">
                    <TouchableOpacity
                        className='absolute left-4 bg-[#FFFFFF] p-2 rounded-lg'
                        onPress={() => router.push('/(protected)/OrderList')}
                    >
                        <ArrowLeftIcon />
                    </TouchableOpacity>
                    <View className="flex-1 items-center">
                        <Text className={`text-lg font-bold font-poppins ${isDarkMode ? 'text-[#FFFFFF]' : 'text-[#292D32]'}`}>Order Details</Text>
                    </View>
                </View>

                <View className="p-4 bg-white rounded-2xl mx-4 mb-4">
                    <View className="flex-row items-center gap-4">
                        <View className="w-10 h-10 bg-green-50 p-7 rounded-full flex items-center justify-center -mt-4">
                            <StatusIcon />
                        </View>
                        <View>
                            <Text className="text-lg font-semibold text-primary">
                                Nippon India Dynamic Bond{"\n"}Fund
                            </Text>
                            <Text className="text-gray-500">
                                Direct | Growth | Debt - Dynamic Bond
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="bg-white rounded-2xl p-4 min-h-[700px]">
                    <Text className="text-[#7F8184] text-base font-poppins mb-2">Amount</Text>
                    <Text className="text-primary text-3xl font-bold font-poppins">$ 1000.00</Text>
                    <View className='border-t border-[#EAEAEB] mt-2 flex-1'>
                                <View className='bg-[#04B8880F] m-1 p-3 mt-4 rounded-xl'>
                                    <View className='flex flex-row justify-between items-center'>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2">Units</Text>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2 mr-8">Avg. Price</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center border-b border-[#EAEAEB]'>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2">27th Jan 2025</Text>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2 mr-8">27th Jan 2025</Text>
                                    </View>
                                    
                                    <View className='flex flex-row justify-between items-center mt-3'>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2">Placed on</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center border-b border-[#EAEAEB]'>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2">10th Jan 2025, 01:52:41 AM<Text className='text-primary'>+19.81%</Text>  </Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center mt-3'>
                                        <View className='flex-row justify-end items-center w-full gap-2'>
                                            <Pressable className='bg-primary px-4 py-1 rounded-lg'><Text className='text-[#FFFFFF] text-sm font-bold font-poppins'>Buy</Text></Pressable>
                                            <Pressable className='bg-[#B86D041A] px-4 py-1 rounded-lg'><Text className='text-[#B8A904] text-sm font-bold font-poppins'>Pending</Text></Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                </View>

                <StatusBar style={isDarkMode ? 'light' : 'dark'} />
            </ScrollView>
            {/* Action Button */}
            <View className="p-6 bg-white">
                <TouchableOpacity className="bg-primary py-4 rounded-lg" onPress={() => { }}>
                    <Text className="text-white text-xl text-center font-semibold">Buy Now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default OrderDetailsScreen; 