import React, {useState,useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';
import Loading from '../components/Loading';
import Header from '../components/Header';
import SafeArea from '../components/SafeArea';
import ProgressBar from '../components/ProgressBar';
import DropdownButton from '../components/DropdownButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import phoneStyles from '../styles/PuzzlePhoneStyles';

import fetchGameData from '../utilities/apiCalls';
import handleDropdownPress from '../utilities/buttonActions';


// SET UP STYLES
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
let styles;
if(Platform.OS === 'ios') {if(aspectRatio>1.6) {styles = phoneStyles;}else {styles = tabletStyles;}} else {styles = phoneStyles;}

function PuzzleScreen({ navigation }) {
    const [puzzleData, setPuzzleData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchGameData('http://192.168.0.100:8000/api/game_data');
        setPuzzleData(data);
      };
      fetchData();
    }, []); 

    if (!puzzleData) {return (<Loading/>);}

    return (
        <SafeArea>
          
          <Header
            title={`Daily: ${puzzleData.puzzle_number}`} 
            showBackButton={true}
            onBackPress={() => navigation.goBack()}
            showMenu={true}
            onMenuPress={() => navigation.openDrawer()} 
          />

          <ProgressBar currentSyllables={0} totalSyllables={puzzleData.total_syllables} />

          <DropdownButton onPress={handleDropdownPress} />
    
          {/* Syllable Spaces */}
          <View style={styles.syllableSpacesContainer}>
            {[...Array(5)].map((_, index) => (
                <View key={index} style={styles.syllableSpace} />
            ))}
            </View>
    
          {/* Game Message Container */}
          <View style={styles.gameMessageContainer}>
            {/* Display game messages here */}
          </View>
    
          {/* Syllable Buttons */}
          <ScrollView contentContainerStyle={styles.syllablesContainer}>
            {Object.entries(puzzleData.syllables_count).map(([syllable, count], index) => (
              <TouchableOpacity key={index} style={styles.syllableButton}>
                <Text style={styles.syllableText}>{syllable}</Text>
                <View style={styles.syllableCountContainer}>
                  <Text style={styles.syllableCount}>{count}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

    
          {/* Control Buttons */}
          <View style={styles.controlButtonsContainer}>
            <TouchableOpacity style={styles.controlButton}>
              <Icon name="close" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Icon name="sort-alphabetical-variant" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Icon name="shuffle" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Icon name="arrow-right" size={24} />
            </TouchableOpacity>
          </View>
        </SafeArea>
      );
    }
    
    export default PuzzleScreen;