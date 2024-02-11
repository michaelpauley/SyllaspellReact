import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameMessageContainer = ({ children, message = '' }) => {
  return (
    <View style={styles.gameMessageContainer}>
      {children || <Text>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  gameMessageContainer: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 5,
    height: 45,
    marginBottom: 20,
    width: '90%', 
    alignSelf: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 10, 
  },
});

export default GameMessageContainer;
