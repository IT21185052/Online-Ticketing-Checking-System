// // SettingsScreen.js
// import React from 'react';
// import { View, Text } from 'react-native';

// export default function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notification Settings</Text>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Account Settings</Text>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Privacy Settings</Text>
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: 'black', // Blue background color
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
  },
  settingButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  settingButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
