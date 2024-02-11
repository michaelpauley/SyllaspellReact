import React from 'react';
import { ScrollView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const SyllableButtons = ({ syllablesData }) => {
  return (
    <ScrollView contentContainerStyle={styles.syllablesContainer}>
      {Object.entries(syllablesData).map(([syllable, count], index) => (
        <TouchableOpacity key={index} style={styles.syllableButton}>
          <Text style={styles.syllableText}>{syllable}</Text>
          <View style={styles.syllableCountContainer}>
            <Text style={styles.syllableCount}>{count}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  syllablesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
  },
  syllableButton: {
    backgroundColor: 'grey',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%', // Adjust based on your layout needs
  },
  syllableText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1, 
  },
  syllableCountContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 5,
  },
  syllableCount: {
    fontSize: 14,
  },
});

export default SyllableButtons;
