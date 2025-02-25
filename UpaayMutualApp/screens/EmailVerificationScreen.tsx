import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import ArrowLeft from '../assets/icons/arrow-left.svg'
import CustomButton from '@/components/common/CustomButton';

type EmailVerificationProps = {
    handleVerifyOTP: (code: string[]) => void
    onBackToForgotPassword: () => void
}
const EmailVerificationScreen = ({ handleVerifyOTP, onBackToForgotPassword }: EmailVerificationProps) => {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const [timer, setTimer] = useState(30);
    const [isResendAvailable, setIsResendAvailable] = useState(false);

    useEffect(() => {
        if (timer === 0) {
            setIsResendAvailable(true);
            return;
        }

        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleCodeChange = (index: number, value: string) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        } else if (!value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const isCodeComplete = code.every(digit => digit !== '');

    const handleResend = () => {
        setTimer(30);
        setIsResendAvailable(false);
        // onResendCode();
    };
    return (
        <SafeAreaView className="flex-1 bg-green-50">
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View className="flex-1  px-6 mt-20">
                    <TouchableOpacity onPress={onBackToForgotPassword} className="mb-20">
                        <View className="text-lg  flex-1"><View className='w-7 h-7 bg-[#EAEAEB] p-1'>
                            <ArrowLeft />
                        </View>
                        </View>
                    </TouchableOpacity>
                    <View className="mb-9">
                        <Text className="text-3xl font-extrabold text-gray-900">Email Verification</Text>
                        <Text className="text-gray-600 mt-2">Enter the verification code we just sent on your email address.</Text>
                    </View>
                    <View className="flex-row justify-between mt-8">
                        {code.map((digit, index) => (
                            <TextInput
                                key={index}
                                className="border border-[#E6EAEE] bg-[#FFFFFF] rounded-lg w-16 h-16 text-center text-xl focus:border-primary placeholder:text-gray-400 font-poppins font-bold"
                                maxLength={1}
                                placeholder='0'
                                keyboardType="numeric"
                                value={digit}
                                ref={(ref) => inputRefs.current[index] = ref}
                                onChangeText={(value) => handleCodeChange(index, value)}
                            />
                        ))}
                    </View>
                    <CustomButton
                        onPress={() => handleVerifyOTP(code)}
                        title="Verify"
                        disabled={!isCodeComplete}
                    />
                    <Text className="text-center mt-4 text-gray-500">
                        {isResendAvailable ? (
                            <TouchableOpacity onPress={handleResend}>
                                <Text className="text-primary">Resend Code</Text>
                            </TouchableOpacity>
                        ) : (
                            `Resend Code in ${timer}s`
                        )}
                    </Text>
                </View>
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
};

export default EmailVerificationScreen