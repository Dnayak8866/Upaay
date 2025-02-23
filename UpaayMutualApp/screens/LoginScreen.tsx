import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import EmailIcon from '../assets/icons/sms.svg';
import LockIcon from '../assets/icons/lock.svg';
import EyeOpen from '../assets/icons/eye.svg';
import EyeClose from '../assets/icons/eye-slash.svg';

const { width } = Dimensions.get("window");

interface LoginScreenProps {
  formData: {
    email: string;
    password: string;
  };
  errors: {
    email?: string;
    password?: string;
  };
  visiblePasswords: {
    password: boolean;
  };
  isRememberMe: boolean;
  handleFieldChange: (field: "email" | "password", value: string) => void;
  togglePasswordVisibility: (field: "password") => void;
  setIsRememberMe: (value: boolean) => void;
  handleLogin: () => void;
  onForgotPassword: () => void;
}

const LoginScreen = ({
  formData,
  errors,
  visiblePasswords,
  isRememberMe,
  handleFieldChange,
  togglePasswordVisibility,
  setIsRememberMe,
  handleLogin,
  onForgotPassword,
} : LoginScreenProps) => {
  const textSize = width > 600 ? "text-4xl" : "text-3xl";
  const paddingX = width > 600 ? "px-12" : "px-6";
  const marginBottom = width > 600 ? "mb-10" : "mb-8";

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <View className={`flex-1 bg-green-50 justify-center ${paddingX}`}>
          <View
            className={`self-start ${marginBottom}`}
            style={{ maxWidth: 300, width: "100%", alignItems: "flex-start" }}
          >
            <Image
              source={require("../assets/images/logo_1.png")}
              style={{ width: "40%", height: 75 }}
              resizeMode="contain"
            />
          </View>
          <Text className={`${textSize} mb-2 text-[#292D32] font-extrabold font-poppins`}>
            Login
          </Text>
          <Text className="text-gray-500 mb-4 font-poppins text-lg">
            Welcome back to the app
          </Text>

          <Text className="text-gray-700 mb-1 font-poppins">Email Address</Text>
          <View
            className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-2 mb-1 bg-[#FFFFFF] ${
              errors.email ? "border-red-500" : ""
            }`}
          >
            <EmailIcon height={20}/>
            <TextInput
              className="flex-1 ml-2 text-gray-700 font-poppins"
              placeholder="hello@example.com"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => handleFieldChange("email", text.toLowerCase())}
            />
          </View>
          {errors.email && <Text className="text-red-500 text-sm font-poppins">{errors.email}</Text>}

          <Text className="text-gray-700 mb-1 mt-3 font-poppins">Password</Text>
          <View
            className={`flex-row items-center border border-[#E6EAEE] rounded-lg px-3 py-2 mb-1 bg-[#FFFFFF] ${
              errors.password ? "border-red-500" : ""
            }`}
          >
            <LockIcon height={20}/>
            <TextInput
              className="flex-1 ml-2 text-gray-700 font-poppins"
              placeholder="Enter password"
              secureTextEntry={!visiblePasswords.password}
              value={formData.password}
              onChangeText={(text) => handleFieldChange("password", text)}
            />
            <TouchableOpacity onPress={() => togglePasswordVisibility("password")}>
              {visiblePasswords.password ? <EyeOpen height={20} width={18}/> : <EyeClose height={20} width={18}/>}
            </TouchableOpacity>
          </View>
          {errors.password && <Text className="text-red-500 text-sm font-poppins">{errors.password}</Text>}

          <View className="flex-row justify-between items-center mb-4 mt-2">
            <View className="flex-row items-center">
              <Checkbox
                value={isRememberMe}
                onValueChange={setIsRememberMe}
                className="m-2"
                style={{ transform: [{ scale: 0.9 }], borderColor: "#C7C7C7", borderRadius: 5 }}
              />
              <Text className="text-gray-600 font-poppins">Keep me signed in</Text>
            </View>
            <TouchableOpacity onPress={onForgotPassword}>
              <Text className="text-primary font-semibold">Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="bg-primary py-3 rounded-lg mb-4 mt-6" onPress={handleLogin}>
            <Text className="text-center text-white text-lg font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;