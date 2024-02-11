import React from 'react';

// Components
import Header from '../components/Header';
import SafeArea from '../components/SafeArea';
import LogoWithTitle from '../components/LogoWithTitle';
import TitleButtons from '../components/TitleButtons';

function WelcomeScreen({ navigation }) {

  const titleButtons = [
    {text: 'DAILY',onPress: () => navigation.navigate('Puzzle')},
  ];

  return (
    <SafeArea>
      <Header title='' showBackButton={false} onBackPress={() => navigation.goBack()} 
      showMenu={true} onMenuPress={() => navigation.openDrawer()} />
      <LogoWithTitle onButtonPress={() => console.log('Button pressed!')} />

      <TitleButtons buttons={titleButtons} />
    </SafeArea>
  );
}




export default WelcomeScreen;
