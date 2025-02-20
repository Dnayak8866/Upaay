import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const InvestmentScreen = () => {
    return (
        <ScrollView className="flex-1 bg-gray-100 p-4">
            <View className="flex-row justify-between items-center mb-4">
                <TouchableOpacity className='bg-[#FFFFFF] p-1 rounded-md'>
                    <AntDesign name="arrowleft" size={17} color="gray" />
                </TouchableOpacity>
                <Text className="text-lg font-semibold">SIP List</Text>
                <TouchableOpacity className='bg-[#FFFFFF] p-1 rounded-md'>
                    <FontAwesome name="shopping-cart" size={17} color='#04B888' />
                </TouchableOpacity>
            </View>

            <View className="bg-white p-4 rounded-3xl  mb-4 border border-gray-200">
                <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-gray-400 text-md">P & L</Text>
                    <Text className="text-gray-500 text-md">Active SIPs</Text>
                </View>
                <Text className="text-green-600 text-3xl font-bold font-poppins">$25.65k</Text>
                <Text className='absolute top-11 right-6 text-xl font-poppins font-bold text-primary'>4</Text>
                <View className="border-t border-gray-200 mt-3 pt-3 flex-row justify-between">
                    <View className="items-center flex-1 border-r border-gray-200 justify-center flex-row gap-3">
                        <AntDesign name="wallet" size={25} color="gray" />
                        <View>
                            <Text className="text-gray-500 text-sm">Invested</Text>
                            <Text className="text-primary font-bold font-poppins">$1.29L</Text>
                        </View>
                    </View>
                    <View className="items-center flex-1 justify-center flex-row gap-3">
                        <FontAwesome name="money" size={25} color="gray" />
                        <View>
                            <Text className="text-gray-500 text-sm">Current</Text>
                            <Text className="text-primary font-semibold">$1.29L</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className="bg-white flex-1 p-4 rounded-lg shadow-sm">
                <Text className="text-gray-400 text-base">Contributions this month</Text>
                <Text className="text-green-600 text-3xl font-semibold">$25.65k</Text>
                <View className=' border-t border-gray-300 mt-2'>
                    <View className='flex-row justify-between mb-2 mt-2'>
                    <Text className="text-gray-700 text-lg font-semibold ">Mandates</Text>
                    <Ionicons name="filter" size={20} color="#04B888" />
                    </View>
                    {[1, 2, 3].map((item) => (
                        <View key={item} className="bg-green-50 p-4 rounded-3xl shadow-sm mb-4">
                            <View className="flex-row items-center mb-2">
                                <View className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <FontAwesome name="refresh" size={20} color="green" />
                                </View>
                                <View className='flex-1 ml-2'>
                                    <Text className="text-primary font-bold text-xl font-poppins">Nippon India Dynamic Bond Fund</Text>
                                    <View className='flex-row justify-between'>
                                        <Text className="text-gray-400 text-sm">MQ423354</Text>
                                        <Text className="text-gray-500 text-sm">P&L <Text className="text-primary font-semibold">10k <Text className="text-green-600 text-sm font-light">+19.81%</Text></Text></Text>
                                    </View>
                                </View>
                            </View>
                            <View className="flex-row justify-evenly pt-1">
                                <View className="items-center">
                                    <Text className="text-gray-500 text-xs">Amount</Text>
                                    <Text className="text-green-600 font-semibold">₹ 1.1k</Text>
                                </View>
                                <View className="items-center">
                                    <Text className="text-gray-500 text-xs">Invested</Text>
                                    <Text className="text-green-600 font-semibold">₹ 50k</Text>
                                </View>
                                <View className="items-center">
                                    <Text className="text-gray-500 text-xs">Current</Text>
                                    <Text className="text-green-600 font-semibold">₹ 40k</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default InvestmentScreen;
