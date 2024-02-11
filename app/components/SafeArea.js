// In SafeArea.js
import React from 'react';
import { SafeAreaView,StyleSheet,Platform} from 'react-native';

const SafeArea = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.droidSafeArea, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0
    },
    container: {
        flex: 1,
        alignItems: 'center',
        color:'#f4f4f4',
    },
});

export default SafeArea;
