// We import React so we can define a component.
import * as React from 'react';

// Core React Native components (no UI library here).
import { View, Text, StyleSheet } from 'react-native';

// This is a simple screen that uses only core React Native components.
export default function CoreScreen() {
  return (
    // View is like a <div> in web. It's just a container.
    <View style={styles.container}>
      {/* Title text */}
      <Text style={styles.title}>Core React Native Screen</Text>

      {/* Body text */}
      <Text style={styles.body}>
        This screen uses only View, Text and StyleSheet.
      </Text>

      <Text style={styles.body}>
        We will compare this with the React Native Paper screen.
      </Text>
    </View>
  );
}

// StyleSheet is how we define styles in React Native.
// It's similar to CSS, but written in JavaScript objects.
const styles = StyleSheet.create({
  container: {
    flex: 1,                         // take full height
    justifyContent: 'center',        // center vertically
    alignItems: 'center',            // center horizontally
    padding: 20,
    backgroundColor: '#f4f4f4',      // light grey background
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
});
