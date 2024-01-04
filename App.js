import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import BottomNavigationBar from './components/BottomNavigationBar';
import QRCodeScannerScreen from './components/QRCodeScanner';
import SubmittedDataScreen from './components/SubmittedDataScreen';
import TicketingScreen from './components/TicketingScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QRScan" component={QRCodeScannerScreen} /> 
        <Stack.Screen name="SubmittedDataScreen" component={SubmittedDataScreen} /> 
        <Stack.Screen name="TabNavigation" component={BottomNavigationBar} />
        <Stack.Screen name="TicketingScreen" component={TicketingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});