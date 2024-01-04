

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// Dummy passenger data
const passengers = [
  { id: '123', name: 'John Doe', phoneNumber: '123-456-7890', balance: 10 },
  { id: '456', name: 'Jane Smith', phoneNumber: '987-654-3210', balance: 0 },
];

export default function QRCodeScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [passengerData, setPassengerData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);

    // Check if the scanned data matches any passenger ID
    const passenger = passengers.find((passenger) => passenger.id === data);

    if (passenger) {
      if (passenger.balance === 0) {
        Alert.alert('Passenger Verified', 'Insufficient balance! Issue a physical ticket...');
      } else {
        setPassengerData(passenger);
        Alert.alert('Passenger Verified', `Passenger ${passenger.name} has been verified.`);
      }
    } else {
      Alert.alert('Invalid Passenger', 'Passenger not found or invalid QR code.');
    }
  };

  const resetScanner = () => {
    setScanned(false);
    setScannedData(null);
    setPassengerData(null);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <View style={styles.scannedDataContainer}>
          {passengerData && passengerData.balance !== 0 ? (
            <View>
              <Text style={styles.scannedDataText}>Scanned Data:</Text>
              <Text>Name: {passengerData.name}</Text>
              <Text>ID: {passengerData.id}</Text>
              <Text>Phone Number: {passengerData.phoneNumber}</Text>
            </View>
          ) : null}
          <Button title="Scan Again" onPress={resetScanner} />
        </View>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scannedDataContainer: {
    alignItems: 'center',
    padding: 20,
  },
  scannedDataText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
