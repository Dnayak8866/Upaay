import React, { useEffect, useRef } from 'react';
import { Tabs, usePathname } from 'expo-router';
import { Animated, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

type AnimatedIconProps = {
  name: any;
  type: string;
  color: string;
  isActive: boolean;
};

const AnimatedIcon = ({ name, type, color, isActive }: AnimatedIconProps) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isActive ? -20 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const IconComponent = type === 'AntDesign' ? AntDesign : MaterialCommunityIcons;
  const iconColor = isActive ? 'white' : color;

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      <View
        style={{
          backgroundColor: isActive ? 'green' : 'transparent',
        }}
        className='rounded-full'
      >
        <IconComponent name={name} size={28} color={iconColor} />
      </View>
    </Animated.View>
  );
};

const TabsLayout = () => {
  const pathname = usePathname();

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }
    }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AnimatedIcon name="home" type="AntDesign" color={color} isActive={pathname === "/Home"} />
          ),
          tabBarLabelStyle: {
            color: pathname === '/Home' ? 'green' : 'gray',
          }
        }}
      />
      <Tabs.Screen
        name="Investments"
        options={{
          title: 'Investments',
          tabBarIcon: ({ color }) => (
            <AnimatedIcon name="briefcase-variant-outline" type="MaterialCommunityIcons" color={color} isActive={pathname === "/Investments"} />
          ),
          tabBarLabelStyle: {
            color: pathname === '/Investments' ? 'green' : 'gray',
          }
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => (
            <AnimatedIcon name="search1" type="AntDesign" color={color} isActive={pathname === "/Discover"} />
          ),
          tabBarLabelStyle: {
            color: pathname === '/Discover' ? 'green' : 'gray',
          }
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => (
            <AnimatedIcon name="user" type="AntDesign" color={color} isActive={pathname === "/Account"} />
          ),
          tabBarLabelStyle: {
            color: pathname === '/Account' ? 'green' : 'gray',
          }
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
