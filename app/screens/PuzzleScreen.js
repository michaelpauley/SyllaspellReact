import React, {useState,useEffect} from 'react';
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
import phoneStyles from '../styles/PuzzlePhoneStyles';
import commonStyles from '../styles/CommonStyles';
//import devData from '../data/dev_data.json';


// SET UP STYLES
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
let styles;
if(Platform.OS === 'ios') {if(aspectRatio>1.6) {styles = phoneStyles;}else {styles = tabletStyles;}} else {styles = phoneStyles;}

function PuzzleScreen({ navigation }) {


    return (
    <SafeAreaView style={styles.container}>
    <View style={commonStyles.header}>
        <Text style={commonStyles.headerText}>LETTERSET</Text>
    </View>
    </SafeAreaView>
        );
    }
    
    
    
    
export default PuzzleScreen;