

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopBar from './TopBar'; // Import the TopBar component

const SubmittedDataScreen = ({ navigation }) => {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    // Load all ticket data from AsyncStorage when the component mounts
    const loadTicketData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const ticketDataArray = await AsyncStorage.multiGet(keys);
        const parsedDataArray = ticketDataArray.map(([, value]) => JSON.parse(value));
        setTicketData(parsedDataArray);
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage: ', error);
      }
    };

    loadTicketData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} showBackButton={true} />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>Submitted Ticket Details ({ticketData.length})</Text>
        {ticketData.map((ticket, index) => (
          <View key={index}>
            <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{ticket.name}</Text>
                    <Text style={styles.label}>Pickup Location:</Text>
                    <Text style={styles.value}>{ticket.pickupLocation}</Text>
                    <Text style={styles.label}>Drop Location:</Text>
                    <Text style={styles.value}>{ticket.dropLocation}</Text>
                    <Text style={styles.label}>Value:</Text>
                    <Text style={styles.value}>{ticket.value}</Text>
                    <Text style={styles.label}>Phone Number:</Text>
                    <Text style={styles.value}>{ticket.phoneNumber}</Text>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{ticket.email}</Text>
                    <Text style={styles.label}>Reason:</Text>
                    <Text style={styles.value}>{ticket.reason}</Text>
                    <View style={styles.separator} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'blue', // Set the color for labels
    },
    value: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black', // Set the color for values
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});
export default SubmittedDataScreen;

