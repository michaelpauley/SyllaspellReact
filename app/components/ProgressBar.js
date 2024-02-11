import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ currentSyllables, totalSyllables }) => {
  const progressPercentage = `${(currentSyllables / totalSyllables) * 100}%`;

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: progressPercentage }]} />
      <Text style={styles.progressText}>Syllables: {currentSyllables}/{totalSyllables}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'blue',
  },
  progressText: {
    position: 'absolute',
    right: 15,
    color: '#000',
  },
});

export default ProgressBar;
