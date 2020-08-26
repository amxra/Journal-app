import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function Header ({title}){
  return(
    <View style ={styles.header}>
        <Text style = {styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'Entries'
}

const styles = StyleSheet.create({
  header:{
    height: 100,
    padding: 15,
  },
  text: {
    color: '#a8a8a8',
    fontSize: 36,
    textAlign: "center"
  }
})
export default Header;