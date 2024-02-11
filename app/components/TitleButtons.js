// TitleButtons.js
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const TitleButton = ({ text, onPress }) => (
  <TouchableOpacity style={[styles.button, styles.buttonSize]} onPress={onPress}>
    <Text style={[styles.buttonText, styles.buttonTextSize, styles.buttonTextCenter]}>{text}</Text>
  </TouchableOpacity>
);

const TitleButtons = ({ buttons }) => {
  return (
    <View style={styles.container}>
      {buttons.map((btn, index) => (
        <TitleButton key={index} text={btn.text} onPress={btn.onPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3399FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonSize: {
    width: 300, // This can be adjusted or made dynamic via props if necessary
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonTextSize: {
    fontSize: 24,
  },
  buttonTextCenter: {
    textAlign: 'center',
  },
});

export default TitleButtons;
