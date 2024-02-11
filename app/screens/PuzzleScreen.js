import React, {useState,useEffect} from 'react';
import { View } from 'react-native';
// Components
import Loading from '../components/Loading';
import Header from '../components/Header';
import SafeArea from '../components/SafeArea';
import ProgressBar from '../components/ProgressBar';
import DropdownButton from '../components/DropdownButton';
import SyllableSpaces from '../components/SyllableSpaces';
import GameMessageContainer from '../components/GameMessageContainer';
import SyllableButtons from '../components/SyllableButtons';
import ControlButtons from '../components/ControlButtons';

// Functions
import fetchGameData from '../utilities/apiCalls';
import {
  handleDropdownPress,
  handleShufflePress,
  handleAlphabetizePress
} from '../utilities/buttonActions';


function PuzzleScreen({ navigation }) {
    const [puzzleData, setPuzzleData] = useState(null);

    const controlButtonConfigs = [
      { iconName: 'close', color: '#e57373', onPress: () => console.log('Close pressed') },
      { iconName: 'sort-alphabetical-variant', color: '#64b5f6', onPress: () => console.log('Sort pressed') },
      { iconName: 'shuffle', color: '#ffb74d', onPress: () => console.log('Shuffle pressed') },
      { iconName: 'arrow-right', color: '#81c784', onPress: () => console.log('Next pressed') },
    ];    

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
          <Header title={`Daily: ${puzzleData.puzzle_number}`} showBackButton={true} onBackPress={() => navigation.goBack()} 
          showMenu={true} onMenuPress={() => navigation.openDrawer()} />
          <ProgressBar currentSyllables={0} totalSyllables={puzzleData.total_syllables} />
          <DropdownButton onPress={handleDropdownPress} />
          <SyllableSpaces count={5} />
          <GameMessageContainer message={''} />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <SyllableButtons syllablesData={puzzleData.syllables_count} />
            <ControlButtons buttons={controlButtonConfigs} />
          </View>
        </SafeArea>
      );
    }
    
    export default PuzzleScreen;