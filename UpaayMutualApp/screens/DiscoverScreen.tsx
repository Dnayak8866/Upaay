import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import StatusIcon from '../assets/icons/status.svg';
import SortIcon from '../assets/icons/sort.svg';
import SearchIcon from '../assets/icons/Search.svg';
import FilterIcon from '../assets/icons/Filter.svg';
import UpDownArrowIcon from '../assets/icons/up-down-arrow.svg';

const DiscoverScreen = () => {
    const [selectedTab, setSelectedTab] = useState('Small Cap');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState('3Y Return');
    const { isDarkMode } = useTheme();
    const router = useRouter();
    const tabs = ['Small Cap', 'Mid Cap', 'Large Cap'];
    const returnPeriods = ['1Y Return', '3Y Return', '5Y Return'];
    
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
                    <Text className={`text-lg text-center font-bold font-poppins ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#292D32]'}`}>Discover</Text>
                </View>

                <View className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} p-2 mr-2 ml-2 rounded-full flex-row items-center mb-6 justify-between`}>
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

                <View className={`${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} p-4 rounded-3xl`}>
                    <View className='mt-2'>
                        <View className='flex-row justify-between mb-4'>
                            <Text className={`${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#000000]'} text-xl font-bold font-poppins`}>Top 10 Funds</Text>
                            <View className='flex-row justify-center items-center gap-2'>
                                <UpDownArrowIcon/>
                                <View>
                                    <TouchableOpacity onPress={() => setShowDropdown(true)}>
                                        <Text className={`underline text-base ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#000000]'}`}>{selectedPeriod}</Text>
                                    </TouchableOpacity>
                                    <Modal
                                        visible={showDropdown}
                                        transparent={true}
                                        animationType="fade"
                                        onRequestClose={() => setShowDropdown(false)}
                                    >
                                        <TouchableWithoutFeedback onPress={() => setShowDropdown(false)}>
                                            <View className="flex-1">
                                                <View className={`absolute top-56 right-4 ${isDarkMode ? 'bg-[#1F2123]' : 'bg-white'} w-40 rounded-xl overflow-hidden shadow-lg`}>
                                                    {returnPeriods.map((period) => (
                                                        <TouchableOpacity
                                                            key={period}
                                                            className={`p-3 border-b ${isDarkMode ? 'border-[#2A2D2E]' : 'border-gray-200'}`}
                                                            onPress={() => {
                                                                setSelectedPeriod(period);
                                                                setShowDropdown(false);
                                                            }}
                                                        >
                                                            <Text className={`text-center ${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#000000]'} font-poppins ${selectedPeriod === period ? 'font-bold' : ''}`}>
                                                                {period}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </Modal>
                                </View>
                                <SortIcon />
                            </View>
                        </View>
                        <View className={`mt-2 mr-1 ml-1 border ${isDarkMode ? 'border-[#2A2D2E]' : 'border-[#E6EAEE]'} rounded-3xl mb-4 p-0.5 overflow-hidden`}>
                            <View className='flex-row justify-between'>
                                {tabs.map((tab) => (
                                    <TouchableOpacity 
                                        key={tab}
                                        onPress={() => setSelectedTab(tab)}
                                        className={`py-2.5 flex-1 items-center rounded-3xl ${selectedTab === tab ? 'bg-[#00BF91]' : ''}`}
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
                        
                        {[1, 2, 3].map((item) => (
                            <TouchableOpacity 
                                key={item} 
                                className={`${isDarkMode ? 'bg-[#2A2D2E]' : 'bg-[#E4F8F3]'} p-4 rounded-3xl shadow-sm mb-3`}
                                onPress={() => handleFundPress('fund-123', 'Nippon India Dynamic Bond Fund')}
                            >
                                <View className="flex-row items-start mb-2">
                                    <View className={`w-10 h-10 ${isDarkMode ? 'bg-[#3A3D3E]' : 'bg-green-50'} p-7 rounded-full flex items-center justify-center`}>
                                        <StatusIcon />
                                    </View>
                                    <View className='flex-1 ml-3'>
                                        <Text className="text-primary font-bold text-xl font-poppins">Nippon India Dynamic Bond{"\n"}Fund</Text>
                                        <Text className={`${isDarkMode ? 'text-[#9BA1A6]' : 'text-[#777F90]'} text-base font-poppins`}>Direct | Growth | Debt - Dynamic Bond</Text>
                                        <Text className={`${isDarkMode ? 'text-[#9BA1A6]' : 'text-[#777F90]'} font-poppins mt-2`}>AUM  <Text className={`${isDarkMode ? 'text-[#ECEDEE]' : 'text-[#000000]'} font-bold font-poppins`}>$4233.54Cr</Text></Text>
                                    </View>
                                </View>
                                
                                <View className={`border-t ${isDarkMode ? 'border-[#3A3D3E]' : 'border-[#EAEAEB]'} mt-2 flex-row justify-between items-center`}>
                                    <Text className='text-[#21577A] text-sm font-poppins pt-2'>CARGR : <Text className='text-primary text-sm font-bold font-poppins pt-2'>18.52%</Text></Text>
                                    <Text className='text-sm font-poppins font-bold text-primary pt-2'>3 Year</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default DiscoverScreen;
