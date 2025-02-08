import React from "react";
import { 
  View, 
  ScrollView, 
  Image,
  Text,
  ActivityIndicator
} from "react-native";
import '../global.css';
import { StatusBar } from "expo-status-bar";

export default function SplashScreenPage() {
  return (
    <View className='flex-1 bg-primary'>  
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1">
          <View  className="items-center mt-7 top-24 ">
            <Image 
              source={require("@/assets/images/logo.png")} 
              style={{ height: 60, width: "50%", resizeMode: "contain" }} 
            />
            <Text className="font-poppins font-bold text-white mt-1">MUTUAL FUNDS</Text>
          </View>

          <View className="items-center flex-1">
            <Image 
              source={require("@/assets/images/rectangle.png")} 
              style={{ height: 206, resizeMode: "contain", }} 
              className="flex-1 "
            />
            <Image 
              source={require("@/assets/images/rectangle_1.png")} 
              style={{ height: 206, resizeMode: "contain", }} 
              className="flex-1 absolute top-40 "
            />
            <Image 
              source={require("@/assets/images/rectangle_1.png")} 
              style={{ height: 206, resizeMode: "contain", }} 
              className="flex-1 absolute top-64 "
            />
          </View>

          <View 
          className="absolute bottom-20 right-0 left-0 flex-1 items-center"
          >
            
              <Text className="mt-49 text-2xl font-semibold text-white font-poppinss">
                Upaay Mutual Funds
              </Text>
              <Text className="mt-3 text-center text-sm font-normal w-2/3 leading-6 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </Text>
              <View style={{ marginTop: 40, width: "14%", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={54} color='white'/>
              </View>
          </View>
        </View>
        <StatusBar style="light"/>
      </ScrollView>
    </View>
  );
}
