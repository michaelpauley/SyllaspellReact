import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LogoWithTitle = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.titleContainer}>
        <View style={[styles.titleChunk, styles.underline]}>
          <Text style={styles.titleText}>SYL</Text>
        </View>
        <View style={[styles.titleChunk, styles.underline]}>
          <Text style={styles.titleText}>LA</Text>
        </View>
        <View style={[styles.titleChunk, styles.underline]}>
          <Text style={styles.titleText}>SPELL</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  titleChunk: {
    marginLeft: 5,
    marginRight: 5,
  },
  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});

export default LogoWithTitle;
