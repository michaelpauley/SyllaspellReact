import React from 'react';
import { View, StyleSheet } from 'react-native';

const SyllableSpaces = ({ count = 5 }) => {
  return (
    <View style={styles.syllableSpacesContainer}>
      {[...Array(count)].map((_, index) => (
        <View key={index} style={styles.syllableSpace} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  syllableSpacesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', 
    marginTop: 20,
    marginBottom: 20,
    width: '90%', 
    alignSelf: 'center', 
  },
  syllableSpace: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '18%', 
    marginHorizontal: 2, 
    height: 2, 
    paddingVertical: 0,
  },
});

export default SyllableSpaces;
