import React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView className="flex-1 bg-gray-100 p-4">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                    <View className='border border-white rounded-full'>
                    <Image
                        source={require("@/assets/images/profile-icon.png")}
                        className="w-12 h-12 rounded-full"
                    />
                    </View>
                    <View className="ml-2">
                        <Text className="text-[#292D32] text-lg font-poppins font-bold">Hi Nicolas!</Text>
                        <View className='bg-white border-[#FFFFFF] px-2 rounded-lg'><Text className="text-[#292D32] text-sm">Welcome to Upaay</Text></View>
                    </View>
                </View>
                <View className="flex-row items-center bg-white p-2 rounded-full">
                    <View className='bg-primary p-2 rounded-full'><Image source={require('@/assets/images/coin.png')} alt='coin' /></View>
                    <Text className="ml-2 font-bold font-poppins">$1.44L</Text>
                </View>
            </View>

            {/* P&L Section */}
            <View className="bg-white p-4 rounded-3xl  mb-4 border border-gray-200">
                <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-gray-400 text-md">P & L</Text>
                    <Text className="text-gray-500 text-md">XIRR</Text>
                </View>
                <Text className="text-primary text-3xl font-bold font-poppins">$25.65k</Text>
                <TouchableOpacity className="absolute right-3 top-12 bg-[#21577A] px-3 py-1 rounded-full flex-row items-center">
                    <Text className="text-white text-xs">View</Text>
                    <FontAwesome name="refresh" size={12} color="white" className="ml-1" />
                </TouchableOpacity>
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

            {/* Search Bar */}
            <Text className="text-[#000000] text-lg font-semibold mb-2">Explore</Text>
            <Text className='text-[#777F90] mb-2'>Explore top funds by category</Text>
            <View className="bg-white p-2 rounded-full flex-row items-center mb-4 justify-between">
                <View className="flex-row items-center">
                    <FontAwesome name="search" size={16} color="gray" className="ml-2" />
                    <TextInput
                        className="ml-2"
                        placeholder="Search..."
                        style={{ height: 40 }}
                    />
                </View>
                <AntDesign name="filter" size={16} color="gray" className="mr-3" />
            </View>

            {/* Upcoming SIP List */}
            <Text className="text-[#000000] text-lg font-semibold mb-3">Upcoming SIP List</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row space-x-4">
                {[1, 2, 3].map((item) => (
                    <TouchableOpacity key={item} className="bg-white p-4 rounded-3xl shadow-sm w-60 mr-4">
                        <View className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-2">
                            <FontAwesome name="refresh" size={16} color="green" />
                        </View>
                        <Text className="text-primary font-bold font-poppins text-xl">Nippon India Dynamic Bond Fund</Text>
                        <Text className="text-[#777F90] text-base">Next installment:&nbsp;&nbsp;&nbsp; <Text className="text-primary text-base font-poppins">27th Jan</Text></Text>
                        <Text className="text-[#777F90] text-sm">MQ423354</Text>
                        <TouchableOpacity className="mt-2">
                            <AntDesign name="arrowright" size={14} color="gray" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ScrollView>
    );
};

export default HomeScreen;
