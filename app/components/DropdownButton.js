// DropdownButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DropdownButton = ({ onPress, title = "Game stats..." }) => {
  return (
    <TouchableOpacity style={styles.dropdownButton} onPress={onPress}>
      <Text>{title}</Text>
      <Icon name="chevron-left" size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#d0d0d0', 
    borderRadius: 10,
    paddingVertical: 15, 
    width: '90%', 
    alignSelf: 'center',
    marginBottom: 20, 
    backgroundColor: '#ffffff', 
    paddingHorizontal: 10,
  },
});

export default DropdownButton;
