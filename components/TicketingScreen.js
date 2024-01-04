import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TicketingScreen = () => {
  const [name, setName] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [value, setValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const [nameError, setNameError] = useState('');
  const [pickupLocationError, setPickupLocationError] = useState('');
  const [dropLocationError, setDropLocationError] = useState('');
  const [valueError, setValueError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [reasonError, setReasonError] = useState('');

  // State variable to store the submitted data
  const [submittedData, setSubmittedData] = useState([]);

  const validateField = (field, value, regex, errorMessage) => {
    if (!regex.test(value)) {
      switch (field) {
        case 'Name':
          setNameError(errorMessage);
          break;
        case 'Pickup Location':
          setPickupLocationError(errorMessage);
          break;
        case 'Drop Location':
          setDropLocationError(errorMessage);
          break;
        case 'Value':
          setValueError(errorMessage);
          break;
        case 'Phone Number':
          setPhoneNumberError(errorMessage);
          break;
        case 'Email':
          setEmailError(errorMessage);
          break;
        case 'Reason':
          setReasonError(errorMessage);
          break;
        default:
          break;
      }
    } else {
      switch (field) {
        case 'Name':
          setNameError('');
          break;
        case 'Pickup Location':
          setPickupLocationError('');
          break;
        case 'Drop Location':
          setDropLocationError('');
          break;
        case 'Value':
          setValueError('');
          break;
        case 'Phone Number':
          setPhoneNumberError('');
          break;
        case 'Email':
          setEmailError('');
          break;
        case 'Reason':
          setReasonError('');
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async () => {
    if (!name || !pickupLocation || !dropLocation || !value || !phoneNumber || !email || !reason) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
        // Generate a unique key for this ticket
    const ticketId = Date.now().toString();

      // Save the form data to AsyncStorage
      const ticketData = {
        name,
        pickupLocation,
        dropLocation,
        value,
        phoneNumber,
        email,
        reason,
      };
      try {
      await AsyncStorage.setItem(ticketId, JSON.stringify(ticketData));
    } catch (error) {
      console.error('Error saving data to AsyncStorage: ', error);
    }
  
      // Show success message
      Alert.alert('Success', 'Ticket Details Saved and sent to the Passenger Email');
  
      // Clear the form fields
      setName('');
      setPickupLocation('');
      setDropLocation('');
      setValue('');
      setPhoneNumber('');
      setEmail('');
      setReason('');
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Physically Ticketing Details</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => {
          setName(text);
          validateField('Name', text, /^[A-Za-z\s]+$/, 'Name should contain only letters and spaces.');
        }}
        placeholder="Enter Passenger name"
      />
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

      <Text style={styles.label}>Pickup Location:</Text>
      <TextInput
        style={styles.input}
        value={pickupLocation}
        onChangeText={(text) => {
          setPickupLocation(text);
          validateField('Pickup Location', text, /^[A-Za-z\s]+$/, 'Pickup Location should contain only letters and spaces.');
        }}
        placeholder="Enter pickup location"
      />
      {pickupLocationError ? <Text style={styles.error}>{pickupLocationError}</Text> : null}

      <Text style={styles.label}>Drop Location:</Text>
      <TextInput
        style={styles.input}
        value={dropLocation}
        onChangeText={(text) => {
          setDropLocation(text);
          validateField('Drop Location', text, /^[A-Za-z\s]+$/, 'Drop Location should contain only letters and spaces.');
        }}
        placeholder="Enter drop location"
      />
      {dropLocationError ? <Text style={styles.error}>{dropLocationError}</Text> : null}

      <Text style={styles.label}>Value:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          validateField('Value', text, /^\$?[0-9]+(\.[0-9][0.9])?$/, 'Value should contain only Numbers.');
        }}
        placeholder="Enter Ticket Value"
      />
      {valueError ? <Text style={styles.error}>{valueError}</Text> : null}

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => {
          setPhoneNumber(text);
          validateField('Phone Number', text, /^[0-9]{10}$/, 'Phone Number should be a 10-digit number.');
        }}
        placeholder="Enter phone number"
      />
      {phoneNumberError ? <Text style={styles.error}>{phoneNumberError}</Text> : null}

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateField('Email', text, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a valid email address.');
        }}
        placeholder="Enter Passenger email"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Reason:</Text>
      <TextInput
        style={styles.input}
        value={reason}
        onChangeText={(text) => {
          setReason(text);
          validateField('Reason', text, /^[A-Za-z\s]+$/, 'Reason should contain only letters and spaces.');
        }}
        placeholder="Enter reason to get physcal ticket"
      />
      {reasonError ? <Text style={styles.error}>{reasonError}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={handleSubmit}
          color="white"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default TicketingScreen;
