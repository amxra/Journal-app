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
    height: 80,
    padding: 15,
    // borderWidth: 2,
    // borderColor: "#20232a",
  },
  text: {
    color: '#a8a8a8',
    fontSize: 46,
    textAlign: "center"
  }
})
export default Header;