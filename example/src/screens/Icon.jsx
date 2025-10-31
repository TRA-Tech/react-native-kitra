/**
 * Kitra Icons Example
 * 
 * react-native-kitra now uses its own SVG-based icon set!
 * Only requires react-native-svg peer dependency - no other dependencies.
 */

import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Icon } from '@tra-tech/react-native-kitra';
import iconPaths from '../../../src/components/Icons/iconPaths.json';

const IconScreen = () => {
  // Get all available icons dynamically from generated iconPaths.json
  const allIcons = Object.keys(iconPaths).sort();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>🎨 Kitra Icons</Text>
      <View style={styles.allIconsGrid}>
        {allIcons.map((iconName) => (
          <View key={iconName} style={styles.iconContainer}>
            <Icon name={iconName} size={28} color="#195CEF" />
            <Text style={styles.iconLabel}>{iconName}</Text>
          </View>
        ))} 
      </View>
    </ScrollView>
  );
};

export default IconScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  allIconsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 30,
  },
  category: {
    marginBottom: 30,
  },
  iconContainer: {
    alignItems: 'center',
    width: 70,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  iconLabel: {
    marginTop: 6,
    fontSize: 8,
    color: '#666',
    textAlign: 'center',
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#e83e8c',
  },
  note: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
});
