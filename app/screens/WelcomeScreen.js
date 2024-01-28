import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import phoneStyles from '../styles/welcomePhoneStyles';
import commonStyles from '../styles/CommonStyles';

// SET UP STYLES
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
let styles;
if(Platform.OS === 'ios') {if(aspectRatio>1.6) {styles = phoneStyles;}else {styles = tabletStyles;}} else {styles = phoneStyles;}




function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerText}>LETTERSET</Text>
      </View>
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
        {/* <TouchableOpacity
          style={[styles.button, styles.buttonSize]}
          onPress={() => navigation.navigate('Web')}
        >
          <Text style={[styles.buttonText, styles.buttonTextSize, styles.buttonTextCenter]}>ARCHIVE</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}




export default WelcomeScreen;
