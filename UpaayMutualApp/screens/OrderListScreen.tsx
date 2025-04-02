import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import StatusIcon from '../assets/icons/status.svg';
import SortIcon from '../assets/icons/sort.svg';

const OrderListScreen = () => {
    const [selectedTab, setSelectedTab] = useState('This Month');
    const [selectedPeriod, setSelectedPeriod] = useState('3Y Return');
    const { isDarkMode } = useTheme();
    const router = useRouter();
    const tabs = ['7 Days', '30 Days', 'This Month'];

    const handleFundPress = (fundId: string, fundName: string) => {
        router.push({
            pathname: '/(protected)/FundInfo',
            params: { fundId, fundName }
        });
    };

    return (
        <>
            <StatusBar style={isDarkMode ? 'light' : 'dark'} />
            <ScrollView className={`flex-1 ${isDarkMode ? 'bg-[#151718]' : 'bg-[#DFEDF1]'}`}>
                <View className="mb-4 mt-8 p-4">
                    <Text className={`text-lg text-center font-bold font-poppins ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#292D32]'}`}>Order List</Text>
                </View>

                <View className={`mt-2 mx-3 border ${isDarkMode ? 'border-[#2A2D2E]' : 'border-[#E6EAEE]'} rounded-xl mb-4 p-0.5 overflow-hidden ${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'}`}>
                    <View className='flex-row justify-between'>
                        {tabs.map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                onPress={() => setSelectedTab(tab)}
                                className={`py-2.5 flex-1 items-center rounded-xl ${selectedTab === tab ? 'bg-[#00BF91]' : ''}`}
                            >
                                <Text
                                    className={`${selectedTab === tab ? 'text-white font-normal' : isDarkMode ? 'text-[#9BA1A6]' : 'text-[#777F90]'}`}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View className={`mx-3  mb-4 p-3 rounded-xl ${isDarkMode? 'bg-[#1F2123]' : 'bg-white'}`}>
                    <Text className='text-base font-poppins text-[#777F90]'>Date Range</Text>
                    <View className='flex-row items-center justify-flex-start mt-3'>
                        <Text className='text-base font-poppins text-[#777F90]'>From</Text>
                        <Text className='text-base font-poppins text-[#777F90] ml-28'>To</Text>
                    </View>
                    <View className='flex-row items-center justify-flex-start gap-10 mt-3'>
                        <Text className={`text-base font-poppins font-bold ${isDarkMode ? 'text-white': ''}`}>10th Jan 2025</Text>
                        <Text className={`text-base font-poppins font-bold ${isDarkMode ? 'text-white': ''}`}>18th Jan 2025</Text>
                    </View>
                </View>

                <View className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} p-4 rounded-3xl`}>
                    <View className='mt-2'>
                        <View className='flex-row items-center justify-between mb-4'>
                            <Text className={`${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#000000]'} text-xl font-bold font-poppins`}>Executed Orders (1)</Text>
                            <SortIcon />
                        </View>


                        {[1, 2, 3].map((item) => (
                            <TouchableOpacity
                                key={item}
                                className={`${isDarkMode ? 'bg-[#2A2D2E]' : 'bg-[#E4F8F3]'} p-4 rounded-3xl shadow-sm mb-3`}
                                onPress={() => router.push('/(protected)/OrderDetails')}
                            >
                                <View className="flex-row items-start mb-2">
                                    <View className={`w-10 h-10 ${isDarkMode ? 'bg-[#3A3D3E]' : 'bg-green-50'} p-7 rounded-full flex items-center justify-center -mt-1`}>
                                        <StatusIcon />
                                    </View>
                                    <View className='flex-1 ml-3'>
                                        <Text className="text-primary font-bold text-xl font-poppins">Nippon India Dynamic Bond{"\n"}Fund</Text>
                                        <Text className={`${isDarkMode ? 'text-[#9BA1A6]' : 'text-[#777F90]'} text-base font-poppins`}>Direct | Growth | Debt - Dynamic Bond</Text>
                                    </View>
                                </View>

                                <View className={`border-t ${isDarkMode ? 'border-[#3A3D3E]' : 'border-[#EAEAEB]'} mt-2 flex-row justify-between items-center`}>
                                    <View>
                                        <Text className='text-[#21577A] text-sm font-poppins'>Amount</Text>
                                        <Text className='text-primary text-lg font-bold font-poppins'>$ 1000.00</Text>
                                    </View>
                                    <View className='flex-row items-center gap-2'>
                                        <Pressable className='bg-primary px-4 py-1 rounded-lg'><Text className='text-[#FFFFFF] text-sm font-bold font-poppins'>Buy</Text></Pressable>
                                        <Pressable className='bg-[#B86D041A] px-4 py-1 rounded-lg'><Text className='text-[#B8A904] text-sm font-bold font-poppins'>Pending</Text></Pressable>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default OrderListScreen;
