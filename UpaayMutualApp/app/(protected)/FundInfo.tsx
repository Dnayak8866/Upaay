import React from 'react';
import FundInfoScreen from '@/screens/FundInfoScreen';
import { useLocalSearchParams } from 'expo-router';

export default function FundInfo() {
  const params = useLocalSearchParams();
  return <FundInfoScreen route={{ params }} />;
} 