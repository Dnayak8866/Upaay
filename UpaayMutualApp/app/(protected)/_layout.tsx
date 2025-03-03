import React from 'react';
import { Tabs, usePathname } from 'expo-router';
import { View } from 'react-native';
import BriefCaseIcon from '../../assets/icons/brifecase-tick.svg';
import ProfileIcon from '../../assets/icons/user.svg';
import SeachIcon from '../../assets/icons/search-normal.svg';
import HomeIcon from '../../assets/icons/home.svg';
import HomeWhiteIcon from '../../assets/icons/Vector.svg';
import BriefCaseWhiteIcon from '../../assets/icons/white-briefcase.svg';
import SearchWhiteIcon from '../../assets/icons/search-normal-white.svg';
import UserWhiteIcon from '../../assets/icons/user-white.svg';


const TabsLayout = () => {
  const pathname = usePathname();

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: '10%',
        paddingTop:5,
      },
    }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? '#04B888' : '#FFFFFF', borderRadius: 50, padding: 10 }}>
              {focused ? <HomeWhiteIcon width={20} height={20} /> : <HomeIcon width={20} height={20} />}
            </View>),
          tabBarLabelStyle: {
            color: pathname === '/Home' ? 'green' : 'gray',
            fontSize: 12,
            marginTop:10,
          }
        }}
      />
      <Tabs.Screen
        name="Investments"
        options={{
          title: 'Investments',
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? '#04B888' : '#FFFFFF', borderRadius: 50, padding: 10, }}>
              {focused ? <BriefCaseWhiteIcon width={20} height={20} /> : <BriefCaseIcon width={20} height={20} />}
            </View>),
          tabBarLabelStyle: {
            color: pathname === '/Investments' ? 'green' : 'gray',
            fontSize: 12,
            marginTop:10,
          }
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? '#04B888' : '#FFFFFF', borderRadius: 50, padding: 10 }}>
              {focused ? <SearchWhiteIcon width={20} height={20} /> : <SeachIcon width={20} height={20} />}
            </View>),
          tabBarLabelStyle: {
            color: pathname === '/Discover' ? 'green' : 'gray',
            fontSize: 12,
            marginTop:10,
          }
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? '#04B888' : '#FFFFFF', borderRadius: 50, padding: 10 }}>
              {focused ? <UserWhiteIcon width={20} height={20} /> : <ProfileIcon width={20} height={20} />}
            </View>),
          tabBarLabelStyle: {
            color: pathname === '/Account' ? 'green' : 'gray',
            fontSize: 12,
            marginTop:10,
          }
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
