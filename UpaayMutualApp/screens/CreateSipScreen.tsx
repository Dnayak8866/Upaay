import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, TextInput } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import ArrowLeftIcon from '@/assets/icons/arrow-left-normal.svg'
import { StatusBar } from 'expo-status-bar';
import StatusIcon from '../assets/icons/status.svg';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const CreateSipScreen = () => {
    const { isDarkMode } = useTheme();
    const [amount, setAmount] = useState('64,000');

    const formatAmount = (value: string) => {
        const cleanNumber = value.replace(/[^\d]/g, '');      
        if (cleanNumber) {
            return Number(cleanNumber).toLocaleString();
        }
        return '0';
    };

    const handleNumberPress = (num: string) => {
        if (amount === '0') {
            setAmount(num);
        } else {
            const newAmount = amount.replace(/,/g, '') + num;
            setAmount(formatAmount(newAmount));
        }
    };

    const handleClear = () => {
        setAmount('0');
    };

    const handleBackspace = () => {
        const unformattedAmount = amount.replace(/,/g, '');
        if (unformattedAmount.length <= 1) {
            setAmount('0');
        } else {
            const newAmount = unformattedAmount.slice(0, -1);
            setAmount(formatAmount(newAmount));
        }
    };

    const handleAmountChange = (text: string) => {
        // Only update if the input is a valid number or empty
        if (/^\d*$/.test(text.replace(/,/g, ''))) {
            setAmount(formatAmount(text));
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView className="flex-1 bg-[#DFEDF1]">
                <View className="flex-row items-center mb-4 mt-12 p-4 relative">
                    <TouchableOpacity
                        className='absolute left-4 bg-[#FFFFFF] p-2 rounded-lg'
                        onPress={() => router.push('/(protected)/(tabs)/Discover')}
                    >
                        <ArrowLeftIcon />
                    </TouchableOpacity>
                    <View className="flex-1 items-center">
                        <Text className={`text-lg font-bold font-poppins ${isDarkMode ? 'text-[#FFFFFF]' : 'text-[#292D32]'}`}>Create SIP</Text>
                    </View>
                </View>

                {/* Fund Title Section */}
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

                <View className='flex-1 rounded-t-3xl shadow-sm mt-2.5 bg-white p-4'>
                    <Text className='text-center text-[#7F8184]'>Instalment amount</Text>
                    
                    {/* Amount Display */}
                    <View className="items-center my-4 flex-row justify-center">
                        <Text className="text-4xl font-semibold text-primary">₹ </Text>
                        <TextInput
                            value={amount}
                            onChangeText={handleAmountChange}
                            className="text-4xl font-semibold text-primary text-center"
                            editable={true}
                            showSoftInputOnFocus={false}
                            caretHidden={false}
                            selectTextOnFocus={false}
                            contextMenuHidden={true}
                            keyboardType="numeric"
                        />
                    </View>

                    {/* Monthly Date Selection */}
                    <View className="flex items-center justify-center">
                        <TouchableOpacity 
                            className="flex-row items-center justify-center bg-[#04B8881A] px-4 py-2 rounded-lg"
                        >
                            <EvilIcons name="calendar" size={24} color="#00B386" />
                            <Text className="ml-2 text-primary">Monthly on 10th</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Numeric Keypad */}
                    <View className=" px-1 mt-[149px]">
                        <View className="flex-row justify-between mb-4">
                            {[1, 2, 3].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    className="w-32 h-12 bg-[#04B8881A] rounded-lg items-center justify-center"
                                    onPress={() => handleNumberPress(num.toString())}
                                >
                                    <Text className="text-2xl text-[#000000] font-normal">{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View className="flex-row justify-between mb-4">
                            {[4, 5, 6].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    className="w-32 h-12 bg-[#04B8881A] rounded-lg items-center justify-center"
                                    onPress={() => handleNumberPress(num.toString())}
                                >
                                    <Text className="text-2xl text-[#000000] font-normal">{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View className="flex-row justify-between mb-4">
                            {[7, 8, 9].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    className="w-32 h-12 bg-[#04B8881A] rounded-lg items-center justify-center"
                                    onPress={() => handleNumberPress(num.toString())}
                                >
                                    <Text className="text-2xl text-[#000000] font-normal">{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View className="flex-row justify-between">
                            <TouchableOpacity
                                className="w-32 h-12 bg-[#04B8881A] rounded-lg items-center justify-center"
                                onPress={handleClear}
                            >
                                <Text className="text-2xl text-[#000000] font-normal">C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="w-32 h-12 bg-[#04B8881A] rounded-lg items-center justify-center"
                                onPress={() => handleNumberPress('0')}
                            >
                                <Text className="text-2xl text-[#000000] font-normal">0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="w-32 h-12 bg-[#04B8881A] rounded-lg items-center justify-center"
                                onPress={handleBackspace}
                            >
                                <Text className="text-2xl text-[#000000] font-normal">X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <StatusBar style={isDarkMode ? 'light' : 'dark'} />
            </ScrollView>
            {/* Action Buttons */}
            <View className={`flex-row justify-between p-6 ${isDarkMode ? 'bg-[#151718]' : 'bg-white'}`}>
                <TouchableOpacity 
                    className="flex-1 mr-2 bg-primary py-4 rounded-lg"
                    onPress={() => router.push('/(protected)/Payment')}
                >
                    <Text className="text-white text-xl text-center font-semibold">Create Order</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 ml-2 bg-primary py-4 rounded-lg">
                    <Text className="text-white text-xl text-center font-semibold">Create SIP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CreateSipScreen; 