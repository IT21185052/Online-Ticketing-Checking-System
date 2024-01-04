// import React from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const TopBar = ({ navigation, showBackButton }) => {
//   return (
//     <View style={styles.container}>
//       {showBackButton && (
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//       )}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={24} color="black" />
//         <TextInput
//           style={styles.input}
//           placeholder="Search..."
//           onChangeText={(text) => {
//             // Handle your search functionality here
//             // You can implement search logic or navigation to a search screen.
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     paddingLeft: 16,
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingLeft: 10,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     marginRight: 10,
//   },
// });

// export default TopBar;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TopBar = ({ navigation, showBackButton }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Implement your dark mode toggle logic here
    setIsDarkMode(!isDarkMode);

    // You can change the app's theme using a state management library or context API
    // For this example, we're just changing the StatusBar color.
    if (isDarkMode) {
      StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setBarStyle('light-content');
    }
  };

  return (
    <View style={isDarkMode ? [styles.container, styles.darkMode] : styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}

      <View style={styles.modeIconContainer}>
        <TouchableOpacity onPress={toggleDarkMode}>
          {isDarkMode ? (
            <Ionicons name="md-moon" size={24} color="black" />
          ) : (
            <Ionicons name="md-sunny" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => {
            // Handle your search functionality here
            // You can implement search logic or navigation to a search screen.
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 16,
  },
  darkMode: {
    backgroundColor: '#333', // Change the background color for dark mode
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  modeIconContainer: {
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default TopBar;
