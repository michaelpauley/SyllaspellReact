import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Header = ({ title, showBackButton, onBackPress, showMenu, onMenuPress }) => {
  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      )}

      <Text style={styles.headerText}>{title}</Text>

      {showMenu && (
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Icon name="menu" size={24} color="#000" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 10,
    height: 60, 
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  iconButton: {
    padding: 10, 
  },
});

export default Header;
