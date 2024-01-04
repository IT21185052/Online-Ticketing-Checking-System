// BottomNavigationBar.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator'; // Import the HomeStackNavigator
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import TicketingScreen from './TicketingScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomNavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Ticketing') {
            iconName = focused ? 'bus' : 'bus-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        tabBarStyle: {
          display: 'flex',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} /> {/* Use HomeStackNavigator instead of HomeScreen */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Ticketing" component={TicketingScreen} />
    </Tab.Navigator>
  );
}
