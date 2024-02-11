// ControlButtons.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ControlButtons = ({ buttons = controlButtonConfigs }) => {
  return (
    <View style={styles.controlButtonsContainer}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.controlButton, { backgroundColor: button.color }]}
          onPress={button.onPress}
        >
          <Icon name={button.iconName} size={24} color="#FFFFFF" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  controlButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  controlButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '22%',

  },

});

export default ControlButtons;
