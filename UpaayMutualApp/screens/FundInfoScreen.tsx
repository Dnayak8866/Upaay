import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import ArrowLeftIcon from '@/assets/icons/arrow-left-normal.svg'
import { StatusBar } from 'expo-status-bar';
import StatusIcon from '../assets/icons/status.svg';

interface FundInfoScreenProps {
    route: {
        params: {
            fundId?: string;
            fundName?: string;
        };
    };
}

const FundInfoScreen: React.FC<FundInfoScreenProps> = ({ route }) => {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const { isDarkMode } = useTheme();
    const [selectedTab, setSelectedTab] = useState('2 Year');


    // Sample data - replace with actual data from your API
    const chartData = {
        labels: ['1Y', '2Y', '3Y'],
        datasets: [{
            data: [20, 45, 28, 80, 99, 43],
        }]
    };
    const tabs = ['1 Year', '2 Year', '3 Year'];


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView className={`flex-1 ${isDarkMode ? 'bg-[#151718]' : 'bg-[#DFEDF1]'}`}>
                {/* Header */}
                <View className="flex-row items-center mb-4 mt-6 p-4 relative">
                    <TouchableOpacity
                        className='absolute left-4 bg-[#FFFFFF] p-2 rounded-lg'
                        onPress={() => router.push('/(protected)/(tabs)/Discover')}
                    >
                        <ArrowLeftIcon />
                    </TouchableOpacity>
                    <View className="flex-1 items-center">
                        <Text className={`text-lg font-bold font-poppins ${isDarkMode ? 'text-[#FFFFFF]' : 'text-[#292D32]'}`}>Fund Info</Text>
                    </View>
                </View>

                {/* Fund Title Section */}
                <View className={`p-4 ${isDarkMode ? 'bg-[#3A3D3E]' : 'bg-white'} rounded-2xl mx-4 mb-4`}>
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

                <View className={`flex-1 rounded-t-3xl shadow-sm mt-2.5 ${isDarkMode ? 'bg-[#3A3D3E]' : 'bg-white'} p-4`}>
                    <Text className={`mb-2 mt-4 ${isDarkMode ? 'text-white' : 'text-[#323236]'}`}>Last Week</Text>
                    {/* Chart Section */}
                    <View className=" mb-4">
                        <LineChart
                            data={chartData}
                            width={width - 22}
                            height={220}
                            chartConfig={{
                                backgroundColor: '#fff',
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 184, 148, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                    </View>
                    <View className={`mt-6 border ${isDarkMode ? 'border-[#2A2D2E]' : 'border-[#E6EAEE]'} rounded-3xl mb-4 p-0.5 overflow-hidden`}>
                            <View className='flex-row justify-between'>
                                {tabs.map((tab) => (
                                    <TouchableOpacity
                                        key={tab}
                                        onPress={() => setSelectedTab(tab)}
                                        className={`py-1.5 flex-1 items-center rounded-3xl ${selectedTab === tab ? 'bg-[#21577A]' : ''}`}
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

                    {/* Fund Details */}
                    <View className={`p-2 ${isDarkMode ? '' : 'bg-white'} rounded-lg`}>
                        <Text className="text-[#7F8184] mb-2">Cur. NAV (17th Jan 2025)</Text>
                        <Text className="text-primary text-2xl font-bold mb-2">₹ 64.61 <Text className="text-primary text-sm font-medium text-right">+19.81%</Text></Text>
                        <View className='pt-2 border-t border-[#EAEAEB] '>
                            <View className=' bg-[#E4F8F3] p-2 rounded-xl'>
                                <View className="flex-row justify-between items-center mb-2">
                                    <Text className="text-[#777F90]">CAGR 3 Years</Text>
                                    <Text className="text-[#777F90]">Min. Investment</Text>
                                </View>
                                <View className="flex-row justify-between items-center border-b border-[#EAEAEB] pb-2">
                                    <Text className="font-semibold">+6.08%</Text>
                                    <Text className="font-semibold">₹ 5000</Text>
                                </View>
                                <View className="flex-row justify-between items-center mt-2">
                                    <Text className="text-[#777F90]">Exit load</Text>
                                    <Text className="text-[#777F90] mb-1">Current</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <StatusBar style={isDarkMode ? 'light' : 'dark'} />
            </ScrollView>
            {/* Action Buttons */}
            <View className={`flex-row justify-between p-6 ${isDarkMode ? 'bg-[#151718]' : 'bg-white'}`}>
                <TouchableOpacity className="flex-1 mr-2 bg-primary py-4 rounded-lg">
                    <Text className="text-white text-xl text-center font-semibold">One Time</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 ml-2 bg-primary py-4 rounded-lg"  onPress={() => router.push('/(protected)/CreateSip')}>
                    <Text className="text-white text-xl text-center font-semibold">SIP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default FundInfoScreen; 