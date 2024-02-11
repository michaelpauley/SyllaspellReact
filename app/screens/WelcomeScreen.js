import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/welcomePhoneStyles';
import Header from '../components/Header';
import SafeArea from '../components/SafeArea';

function WelcomeScreen({ navigation }) {
  return (
    <SafeArea>
      <Header
        title=""
        showBackButton={false}
        onBackPress={() => navigation.goBack()}
        showMenu={false}
        onMenuPress={() => navigation.openDrawer()} 
      />
      <View style={{alignItems: 'center', justifyContent: 'center',paddingTop:50 }}>
      <Image source={require('../assets/logo.png')} />
      </View>
      <View style={styles.titleContainer}>
        <View style={[styles.titleChunk, styles.underline]}><Text style={[styles.titleText]}>SYL</Text></View>
        <View style={[styles.titleChunk, styles.underline]}><Text style={[styles.titleText]}>LA</Text></View>
        <View style={[styles.titleChunk, styles.underline]}><Text style={[styles.titleText]}>SPELL</Text></View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonSize]}
          onPress={() => navigation.navigate('Puzzle')}
        >
          <Text style={[styles.buttonText, styles.buttonTextSize, styles.buttonTextCenter]}>DAILY</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
}




export default WelcomeScreen;
