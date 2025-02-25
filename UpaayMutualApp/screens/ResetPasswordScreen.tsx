import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LockIcon from '../assets/icons/lock.svg';
import EyeOpen from '../assets/icons/eye.svg';
import EyeClose from '../assets/icons/eye-slash.svg';
import CustomTextInput from "@/components/common/CustomTextInput";
import CustomButton from "@/components/common/CustomButton";

type ResetPasswordProps = {
  formData: {
    newPassword: string;
    confirmPassword: string;
  }
  errors: Record<string, string>;
  visiblePasswords: {
    password: boolean;
    confirmPassword: boolean;
  };
  togglePasswordVisibility: (field: 'password' | 'confirmPassword') => void;
  handleFieldChange: (field: 'newPassword' | 'confirmPassword', value: string) => void
  handleResetPassword: () => void;
}

const ResetPasswordScreen = ({
  formData,
  errors,
  visiblePasswords,
  togglePasswordVisibility,
  handleResetPassword,
  handleFieldChange,
}: ResetPasswordProps) => {
  const { newPassword, confirmPassword } = formData;
  const { newPassword: newPasswordError, confirmPassword: confirmPasswordError } = errors;

  return (
    <SafeAreaView className="flex-1 bg-green-50 px-4">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View className="mt-32">
          <View className="mb-9">
            <Text className="text-3xl font-extrabold text-gray-900">Reset Password</Text>
            <Text className="text-gray-600 mt-2">Enter your new password twice below to reset your password.</Text>
          </View>
          <Text className="text-gray-700 mt-6 font-bold font-poppins">Enter New Password</Text>
          <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-2 bg-white mt-2 ${newPasswordError ? "border-red-500" : ""}`}>
            <LockIcon />
            <CustomTextInput
              placeholder="Enter new password"
              secureTextEntry={!visiblePasswords.password}
              value={newPassword}
              onChangeText={(value) => handleFieldChange('newPassword', value)}
            />
            <TouchableOpacity onPress={() => togglePasswordVisibility('password')}>
              {visiblePasswords.password ? <EyeOpen height={20} width={18} /> : <EyeClose height={20} width={18} />}</TouchableOpacity>
          </View>
          {newPasswordError && <Text className="text-red-500 text-sm mt-1">{newPasswordError}</Text>}
          <Text className="text-gray-700 mt-6 font-bold font-poppins">Re-enter New Password</Text>
          <View className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-2 bg-[#FFFFFF] mt-2 ${confirmPasswordError ? "border-red-500" : ""}`}>
            <LockIcon />
            <CustomTextInput
              placeholder="Confirm password"
              secureTextEntry={!visiblePasswords.confirmPassword}
              value={confirmPassword}
              onChangeText={(value) => handleFieldChange('confirmPassword', value)}
            />
            <TouchableOpacity onPress={() => togglePasswordVisibility('confirmPassword')}>
              {visiblePasswords.confirmPassword ? <EyeOpen height={20} width={18} /> : <EyeClose height={20} width={18} />}
            </TouchableOpacity>
          </View>
          {confirmPasswordError && <Text className="text-red-500 text-sm mt-1">{confirmPasswordError}</Text>}
          <CustomButton
            onPress={handleResetPassword}
            title="Continue"
          />
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ResetPasswordScreen