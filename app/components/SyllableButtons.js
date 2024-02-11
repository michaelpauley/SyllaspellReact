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
    backgroundColor: '#333', 
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
  },
  syllableText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0E0E0',
    flexShrink: 1,
    paddingHorizontal:10,
  },
  syllableCountContainer: {
    backgroundColor: '#81c784', 
    borderRadius: 5, 
    paddingHorizontal: 10,
    paddingVertical: 10, 
    marginLeft: 'auto', 
  },
  syllableCount: {
    fontSize: 14,
    color: '#ffffff', 
    fontWeight: 'bold',
  },
});

export default SyllableButtons;
