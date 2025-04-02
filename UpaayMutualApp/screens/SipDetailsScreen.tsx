import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import ArrowLeftIcon from '@/assets/icons/arrow-left-normal.svg'
import StatusIcon from '@/assets/icons/status.svg';
import { router } from 'expo-router';


const SipDetailsScreen = () => {
    const { isDarkMode } = useTheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className={`flex-1 ${isDarkMode ? 'bg-[#151718]' : 'bg-[#DFEDF1]'}`}>
                <ScrollView className="flex-1">
                    <View className="flex-row items-center mb-4 mt-10 p-4 relative">
                        <TouchableOpacity
                            className='absolute left-4 bg-[#FFFFFF] p-2 rounded-lg'
                            onPress={() => router.push('/(protected)/(tabs)/Investments')}
                        >
                            <ArrowLeftIcon />
                        </TouchableOpacity>
                        <View className="flex-1 items-center">
                            <Text className={`text-lg font-bold font-poppins ${isDarkMode ? 'text-[#FFFFFF]' : 'text-[#292D32]'}`}>SIP Details</Text>
                        </View>
                    </View>

                    <View
                        className={`${isDarkMode ? 'bg-[#2A2D2E]' : 'bg-[#FFFFFF]'} p-4 rounded-3xl shadow-sm mb-4 mx-4`}
                    >
                        <View className="flex-row items-center mb-2">
                            <View className="w-10 h-10 bg-green-50 p-7 rounded-full flex items-center justify-center -mt-4">
                                <StatusIcon />
                            </View>
                            <View className='flex-1 ml-3'>
                                <Text className="text-primary font-bold text-xl font-poppins">Nippon India Dynamic Bond{"\n"}Fund</Text>
                                <Text className="text-[#777F90] text-base font-poppins">Direct | Growth | Debt - Dynamic Bond`</Text>
                            </View>
                        </View>
                        <View className="flex-row justify-evenly pt-3">
                            <View className="items-center border-r border-[#EAEAEB] pr-5">
                                <Text className="text-[#21577A] text-sm font-poppins">Amount</Text>
                                <Text className="text-primary font-bold font-poppins mt-2">₹ 10k </Text>
                            </View>
                            <View className={`items-center border-r border-[#EAEAEB] pr-5`}>
                                <Text className="text-[#21577A] text-sm font-poppins">Next Installment</Text>
                                <Text className="text-primary font-bold font-poppins mt-2">27th Jan 2025</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-[#21577A] text-sm font-poppins">Frequency</Text>
                                <Text className="text-primary font-bold font-poppins mt-2">Monthly</Text>
                            </View>
                        </View>
                    </View>

                    {/* P & L */}
                    <View className="flex-1 rounded-t-3xl shadow-sm mt-2.5 overflow-hidden">
                        <LinearGradient
                            colors={isDarkMode ? ['#1F2123', '#1F2123'] : ['#FFFFFF', '#F5F9F7']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            className="flex-1 p-4"
                        >
                            <View className='flex flex-row justify-between items-center'>
                                <Text className="text-[#7F8184] text-base font-poppins mb-2">P & L</Text>
                                <Text className="text-[#7F8184] text-base font-poppins mb-2">XIRR</Text>
                            </View>
                            <View className='flex flex-row justify-between items-center'>
                                <Text className="text-primary text-3xl font-bold font-poppins">$ 25.65k </Text>
                                <Text className="text-primary text-2xl font-bold font-poppins">+12.23% </Text>
                            </View>
                            <View className='border-t border-[#EAEAEB] mt-2 flex-1'>
                                <View className='bg-[#04B8880F] m-1 p-3 mt-4 rounded-xl'>
                                    <View className='flex flex-row justify-between items-center'>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2">Last Installment</Text>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2 mr-8">SIP Creation Date</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center border-b border-[#EAEAEB]'>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2">27th Jan 2025</Text>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2 mr-8">27th Jan 2025</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center mt-3'>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2">Invested</Text>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2 mr-8">Current</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center border-b border-[#EAEAEB]'>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2">₹ 48,997.593</Text>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2 mr-8">₹ 48,997.593</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center mt-3'>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2">Avg. NAC</Text>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2 mr-8">Units</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center border-b border-[#EAEAEB]'>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2">₹ 47.90</Text>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2 mr-8">1,022.773</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center mt-3'>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2">Cur. NAV (17th Jan 2025)</Text>
                                        <Text className="text-[#777F90] text-base font-poppins mb-2 mr-8">Step-up</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center border-b border-[#EAEAEB]'>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2">₹ 64.61 <Text className='text-primary'>+19.81%</Text>  </Text>
                                        <Text className="text-[#292D32] text-base font-bold font-poppins mb-2 mr-8">NA</Text>
                                    </View>
                                    <View className='flex flex-row justify-between items-center mt-3'>
                                        <Text className="text-[#777F90] text-sm font-bold font-poppins mb-2">1 SIP</Text>
                                        <View className='flex flex-row gap-2'>
                                            <Pressable className='bg-[#7A21211A] px-4 py-1 rounded-lg'><Text className='text-[#7A2121] text-sm font-bold font-poppins'>Inactive</Text></Pressable>
                                            <Pressable className='bg-[#21577A1A] px-4 py-1 rounded-lg'><Text className='text-[#21577A] text-sm font-bold font-poppins'>Active</Text></Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text className='text-[#7F8184] text-sm font-poppins mt-3 ml-2'>Folio no. : <Text className='text-[#21577A]'>91092080094</Text></Text>
                        </LinearGradient>
                    </View>
                </ScrollView>
                <StatusBar style={isDarkMode ? 'light' : 'dark'} />

                <View className={`flex-row p-6 ${isDarkMode ? '#151718' : '#FFFFFF'}`}>
                    <TouchableOpacity
                        className="bg-[#00BF91] flex-1 py-4 rounded-xl mr-2"
                        onPress={() => { }}
                    >
                        <Text className="text-white text-xl text-center font-bold">Buy More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-primary'} w-16 h-16 items-center justify-center rounded-xl`}
                        onPress={() => { }}
                    >
                        <Text className="text-4xl text-white mb-4">...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default SipDetailsScreen; 