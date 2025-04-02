import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, TextInput, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import ArrowLeftIcon from '@/assets/icons/arrow-left-normal.svg'
import { StatusBar } from 'expo-status-bar';
import SortIcon from '../assets/icons/sort.svg';


const PaymentScreen = () => {
    const { isDarkMode } = useTheme();
    const [amount, setAmount] = useState('64,000');
    const [selectedPayment, setSelectedPayment] = useState('googlepay');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView className="flex-1 bg-[#DFEDF1]">
                <View className="flex-row items-center mb-4 mt-12 p-4 relative">
                    <TouchableOpacity
                        className='absolute left-4 bg-[#FFFFFF] p-2 rounded-lg'
                        onPress={() => router.push('/(protected)/CreateSip')}
                    >
                        <ArrowLeftIcon />
                    </TouchableOpacity>
                    <View className="flex-1 items-center">
                        <Text className={`text-lg font-bold font-poppins ${isDarkMode ? 'text-[#FFFFFF]' : 'text-[#292D32]'}`}>Payment</Text>
                    </View>
                </View>

                {/* Payment Options Section */}
                <View className="bg-white rounded-2xl p-4 min-h-[700px]">
                    <View className='flex-row items-center justify-between mb-3'>
                        <Text className="text-lg font-semibold">Pay using any UPI app</Text>
                        <SortIcon />
                    </View>

                    <View className='bg-[#04B8880F] rounded-lg'>
                        {/* Google Pay Option */}
                        <Pressable
                            className={`flex-row items-center justify-between p-4 mb-3 rounded-lg `}
                            onPress={() => setSelectedPayment('googlepay')}
                        >
                            <View className="flex-row items-center">
                                <Image
                                    source={require('@/assets/images/gpay.png')}
                                    className="w-12 h-12 mr-3"
                                />
                                <Text className="text-base font-medium">Google Pay</Text>
                            </View>
                            <View className={`w-6 h-6 rounded-full border-2 ${selectedPayment === 'googlepay' ? 'border-primary bg-primary' : 'border-gray-300'} items-center justify-center`}>
                                {selectedPayment === 'googlepay' && (
                                    <View className="w-3 h-3 bg-white rounded-full" />
                                )}
                            </View>
                        </Pressable>

                        {/* Paytm Option */}
                        <Pressable
                            className={`flex-row items-center justify-between p-4 rounded-lg`}
                            onPress={() => setSelectedPayment('paytm')}
                        >
                            <View className="flex-row items-center">
                                <Image
                                    source={require('@/assets/images/paytm.png')}
                                    className="w-12 h-12 mr-3"
                                />
                                <Text className="text-base font-medium">Paytm</Text>
                            </View>
                            <View className={`w-6 h-6 rounded-full border-2 ${selectedPayment === 'paytm' ? 'border-primary bg-primary' : 'border-gray-300'} items-center justify-center`}>
                                {selectedPayment === 'paytm' && (
                                    <View className="w-3 h-3 bg-white rounded-full" />
                                )}
                            </View>
                        </Pressable>
                    </View>
                </View>

                <StatusBar style={isDarkMode ? 'light' : 'dark'} />
            </ScrollView>
            {/* Action Button */}
            <View className="p-6 bg-white">
                <TouchableOpacity className="bg-primary py-4 rounded-lg" onPress={() => router.push('/(protected)/OrderList')}>
                    <Text className="text-white text-xl text-center font-semibold">Pay ₹ {amount}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PaymentScreen; 