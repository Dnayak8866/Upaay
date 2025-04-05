import React from 'react';
import { Tabs, usePathname, Redirect } from 'expo-router';
import { Pressable, View, Dimensions } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import { useEffect } from 'react';
import BriefCaseIcon from '@/assets/icons/brifecase-tick.svg';
import ProfileIcon from '@/assets/icons/user.svg';
import SeachIcon from '@/assets/icons/search-normal.svg';
import HomeIcon from '@/assets/icons/home.svg';
import HomeWhiteIcon from '@/assets/icons/Vector.svg';
import BriefCaseWhiteIcon from '@/assets/icons/white-briefcase.svg';
import SearchWhiteIcon from '@/assets/icons/search-normal-white.svg';
import UserWhiteIcon from '@/assets/icons/user-white.svg';
import Svg, { Path } from 'react-native-svg';

const TabBarBackground = ({ activeIndex = 0 }) => {
  const { isDarkMode } = useTheme();
  const { width } = Dimensions.get('window');
  const height = 35;
  const tabWidth = width / 4;
  const curveWidth = 50;
  const activeTabCenter = tabWidth * activeIndex + tabWidth / 2;
  
  return (
    <View style={{ 
      position: 'absolute', 
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: isDarkMode ? '#151718' : '#FFFFFF',
      height: height,
      overflow: 'hidden'
    }}>
      <Svg
        width={width}
        height={height}
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <Path
          d={`
            M 0 ${height}
            L 0 0
            L ${activeTabCenter - curveWidth} 0
            C ${activeTabCenter - curveWidth / 2} 0, ${activeTabCenter - curveWidth / 3} ${height / 1.5}, ${activeTabCenter} ${height / 1.5}
            C ${activeTabCenter + curveWidth / 3} ${height / 1.5}, ${activeTabCenter + curveWidth / 2} 0, ${activeTabCenter + curveWidth} 0
            L ${width} 0
            L ${width} ${height}
            Z
          `}
          fill={isDarkMode ? '#151718' : '#FFFFFF'}
        />
      </Svg>
    </View>
  );
};

export default function ProtectedLayout() {
  const { checkAuth, isAuthenticated } = useAuth();
  const { isDarkMode } = useTheme();
  const pathname = usePathname();
  
  const getActiveIndex = () => {
    switch (pathname) {
      case '/Home':
        return 0;
      case '/Investments':
        return 1;
      case '/Discover':
        return 2;
      case '/Account':
        return 3;
      default:
        return 0;
    }
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 75,
        backgroundColor: isDarkMode ? '#151718' : '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        borderTopWidth: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
      },
      tabBarBackground: () => <TabBarBackground activeIndex={getActiveIndex()} />,
      tabBarButton: (props) => (
        <Pressable
          {...props}
          android_ripple={null}
          style={[
            props.style,
            { backgroundColor: 'transparent' }
          ]}
        />
      )
    }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={{
              padding: focused ? 8 : 0,
              backgroundColor: focused ? (isDarkMode ? '#151718' : '#FFFFFF') : 'transparent',
              borderRadius: 50,
              transform: [{ translateY: focused ? -8 : 0 }],
            }}>
              <View style={{ 
                backgroundColor: focused ? '#04B888' : 'transparent', 
                borderRadius: 50, 
                padding: focused ? 12 : 0,
              }}>
                {focused ? <HomeWhiteIcon width={24} height={24} /> : <HomeIcon width={24} height={24} />}
              </View>
            </View>
          ),
          tabBarLabelStyle: {
            color: pathname === '/Home' ? '#04B888' : (isDarkMode ? '#9BA1A6' : '#9CA4AB'),
            fontSize: 12,
            marginTop: 10,
            fontWeight: '500'
          }
        }}
      />
      <Tabs.Screen
        name="Investments"
        options={{
          title: 'Investments',
          tabBarIcon: ({ focused }) => (
            <View style={{
              padding: focused ? 8 : 0,
              backgroundColor: focused ? (isDarkMode ? '#151718' : '#FFFFFF') : 'transparent',
              borderRadius: 50,
              transform: [{ translateY: focused ? -8 : 0 }],
            }}>
              <View style={{ 
                backgroundColor: focused ? '#04B888' : 'transparent', 
                borderRadius: 50, 
                padding: focused ? 12 : 0,
              }}>
                {focused ? <BriefCaseWhiteIcon width={24} height={24} /> : <BriefCaseIcon width={24} height={24} />}
              </View>
            </View>
          ),
          tabBarLabelStyle: {
            color: pathname === '/Investments' ? '#04B888' : (isDarkMode ? '#9BA1A6' : '#9CA4AB'),
            fontSize: 12,
            marginTop: 10,
            fontWeight: '500'
          }
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => (
            <View style={{
              padding: focused ? 8 : 0,
              backgroundColor: focused ? (isDarkMode ? '#151718' : '#FFFFFF') : 'transparent',
              borderRadius: 50,
              transform: [{ translateY: focused ? -8 : 0 }],
            }}>
              <View style={{ 
                backgroundColor: focused ? '#04B888' : 'transparent', 
                borderRadius: 50, 
                padding: focused ? 12 : 0,
              }}>
                {focused ? <SearchWhiteIcon width={24} height={24} /> : <SeachIcon width={24} height={24} />}
              </View>
            </View>
          ),
          tabBarLabelStyle: {
            color: pathname === '/Discover' ? '#04B888' : (isDarkMode ? '#9BA1A6' : '#9CA4AB'),
            fontSize: 12,
            marginTop: 10,
            fontWeight: '500'
          }
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => (
            <View style={{
              padding: focused ? 8 : 0,
              backgroundColor: focused ? (isDarkMode ? '#151718' : '#FFFFFF') : 'transparent',
              borderRadius: 50,
              transform: [{ translateY: focused ? -8 : 0 }],
            }}>
              <View style={{ 
                backgroundColor: focused ? '#04B888' : 'transparent', 
                borderRadius: 50, 
                padding: focused ? 12 : 0,
              }}>
                {focused ? <UserWhiteIcon width={24} height={24} /> : <ProfileIcon width={24} height={24} />}
              </View>
            </View>
          ),
          tabBarLabelStyle: {
            color: pathname === '/Account' ? '#04B888' : (isDarkMode ? '#9BA1A6' : '#9CA4AB'),
            fontSize: 12,
            marginTop: 10,
            fontWeight: '500'
          }
        }}
      />
    </Tabs>
  );
}
