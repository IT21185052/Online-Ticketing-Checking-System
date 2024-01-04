import React from 'react';
import { View,TouchableOpacity,  Text,StyleSheet } from 'react-native';
import TopBar from './TopBar';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} showBackButton={false} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QRScan')}
      >
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SubmittedDataScreen')}
      >
        <Text style={styles.buttonText}>        View Passengers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: 300, // Adjust the button width as needed
    height: 190, // Adjust the button height as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize : 50,
  },
});

export default HomeScreen;