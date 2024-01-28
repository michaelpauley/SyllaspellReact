import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './app/screens/WelcomeScreen'; 
import Puzzle from './app/screens/PuzzleScreen'; 
// import Web from './app/screens/WebView'; 
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === 'ios') {
        const { status } = await requestTrackingPermissionsAsync();
      }
    };
    requestPermissions(); 
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{ headerShown: false }}/>
          <Stack.Screen
          name="Puzzle"
          component={Puzzle}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
