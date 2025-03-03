import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ArrowLeftIcon from '../assets/icons/arrow-left-normal.svg'
import EmptyWalletIcon from '../assets/icons/empty-wallet.svg'
import EmptyWalletTimeIcon from '../assets/icons/empty-wallet-time.svg';
import StatusIcon from '../assets/icons/status.svg';
import SortIcon from '../assets/icons/sort.svg';
import ShoppingCartIcon from '../assets/icons/shopping-cart.svg'


const InvestmentScreen = () => {
    return (
        <ScrollView className="flex-1 bg-[#DFEDF1]">
            <View className="flex-row justify-between items-center mb-4 mt-4 p-4">
                <TouchableOpacity className='bg-[#FFFFFF] p-2 rounded-md'>
                    <ArrowLeftIcon />
                </TouchableOpacity>
                <Text className="text-lg font-bold font-poppins text-[#292D32]">SIP List</Text>
                <TouchableOpacity className='bg-[#FFFFFF] p-2 rounded-md'>
                    <ShoppingCartIcon />
                </TouchableOpacity>
            </View>

            <View className="bg-white p-4 rounded-3xl  mb-4  mx-3">
                <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-[#7F8184] text-md font-poppins pl-2">P & L</Text>
                    <Text className="text-[#7F8184] text-md font-poppins pr-2">Active SIPs</Text>
                </View>
                <Text className="text-primary text-3xl font-bold font-poppins pl-2">$ 25.65k</Text>
                <Text className='absolute top-11 right-7 text-xl font-poppins font-bold text-primary'>4</Text>
                <View className="border-t border-[#EAEAEB] mt-5 pt-3 flex-row justify-between">
                    <View className="items-center flex-1 border-r border-[#EAEAEB] justify-center flex-row gap-3 mt-3 mb-2">
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

            <View className="bg-white flex-1 p-4 rounded-t-3xl shadow-sm">
                <Text className="text-[#7F8184] text-base font-poppins mb-2">Contributions this month</Text>
                <Text className="text-primary text-3xl font-bold font-poppins">$ 25.65k</Text>
                <View className=' border-t border-[#EAEAEB] mt-2'>
                    <View className='flex-row justify-between mb-4 mt-3'>
                        <Text className="text-[#000000] text-lg font-bold font-poppins">Mandates</Text>
                        <SortIcon />
                    </View>
                    {[1, 2, 3].map((item) => (
                        <View key={item} className="bg-[#E4F8F3] p-4 rounded-3xl shadow-sm mb-4">
                            <View className="flex-row items-center mb-2">
                                <View className="w-10 h-10 bg-green-50 p-7 rounded-full flex items-center justify-center">
                                    <StatusIcon />
                                </View>
                                <View className='flex-1 ml-3'>
                                    <Text className="text-primary font-bold text-xl font-poppins">Nippon India Dynamic Bond{"\n"}Fund</Text>
                                    <Text className="text-[#777F90] text-base font-poppins">Direct | Growth | Debt - Dynamic Bond`</Text>
                                </View>
                            </View>
                            <View className="flex-row justify-evenly pt-3">
                                <View className="items-center border-r border-[#EAEAEB] pr-5">
                                    <Text className="text-[#21577A] text-sm font-poppins">P&L</Text>
                                    <Text className="text-primary font-bold font-poppins mt-2">₹ 10k <Text className='text-xs font-poppins font-medium'>+19.81%</Text></Text>
                                </View>
                                <View className="items-center border-r border-[#EAEAEB] pr-5">
                                    <Text className="text-[#21577A] text-sm font-poppins">Invested</Text>
                                    <Text className="text-primary font-bold font-poppins mt-2">₹ 50k</Text>
                                </View>
                                <View className="items-center">
                                    <Text className="text-[#21577A] text-sm font-poppins">Current</Text>
                                    <Text className="text-primary font-bold font-poppins mt-2">₹ 40k</Text>
                                </View>
                            </View>
                            <View className='border-t border-[#EAEAEB] mt-4 flex-row justify-between items-center'>
                                <Text className='text-[#21577A] text-sm font-poppins pt-2'>SIP Amount:</Text>
                                <Text className='text-sm font-poppins font-bold text-primary pt-2'>Rs. 1k <Text className='text-sm font-light font-poppins text-primary'>(Monthly)</Text></Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default InvestmentScreen;
