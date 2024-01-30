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
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import phoneStyles from '../styles/PuzzlePhoneStyles';
import commonStyles from '../styles/CommonStyles';
import devData from '../data/dev_data.json';


// SET UP STYLES
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
let styles;
if(Platform.OS === 'ios') {if(aspectRatio>1.6) {styles = phoneStyles;}else {styles = tabletStyles;}} else {styles = phoneStyles;}

function PuzzleScreen({ navigation }) {
    const [puzzleData, setPuzzleData] = useState(null);
    const [totalCount, setTotalCount] = useState(0);


    // EFFECTS
    useEffect(() => {
        const arizonaTime = new Date().toLocaleString("en-US", {timeZone: "America/Phoenix"});
        const dateParts = arizonaTime.split(',')[0].split('/');
        
        // Ensure month and day are zero-padded
        const month = dateParts[0].padStart(2, '0');
        const day = dateParts[1].padStart(2, '0');
        const year = dateParts[2];
        
        const formattedDate = `${month}/${day}/${year}`;
        console.log(formattedDate);
        const dataForToday = devData[formattedDate];
        
        if (dataForToday) {
          setPuzzleData(dataForToday);
        }
      }, []);

      useEffect(() => {
        if (puzzleData) {
          const total = puzzleData.game_syllables.reduce((sum, item) => {
            const count = Object.values(item)[0];
            return sum + count;
          }, 0);
          setTotalCount(total);
        }
      }, [puzzleData]);





    //   LOADING DATA SCREEN
    if (!puzzleData) {
        return (
            <SafeAreaView>
                <Text>Loading puzzle...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={commonStyles.container}>
          {/* Header with Puzzle Number */}
          <View style={commonStyles.header}>
        <Text style={commonStyles.headerText}>Daily: {puzzleData.puzzle_number}</Text>
        </View>
    
          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
        <View style={styles.progressBar} />
        <Text style={styles.progressText}>Syllables: 0/{totalCount}</Text>
        </View>
    
          {/* Dropdown Button */}
          <TouchableOpacity style={styles.dropdownButton}>
            <Text>Game stats...</Text>
            <Icon name="chevron-left" size={24} />
          </TouchableOpacity>
    
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
            {puzzleData.game_syllables.map((syllableObj, index) => {
              const syllable = Object.keys(syllableObj)[0];
              const count = syllableObj[syllable];
              return (
                <TouchableOpacity key={index} style={styles.syllableButton}>
                  <Text style={styles.syllableText}>{syllable}</Text>
                  <View style={styles.syllableCountContainer}>
                    <Text style={styles.syllableCount}>{count}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
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
        </SafeAreaView>
      );
    }
    
    export default PuzzleScreen;