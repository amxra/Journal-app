import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function Footer (){
  return(
    <View style ={styles.footer}>
        <Text style = {styles.footerText}>Footer</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  footer:{
    // borderWidth: 2,
    // borderColor: "#20232a",
    // borderBottomColor: '#fff',
    height: 80,
    padding: 15
  },
  footerText: {
    fontSize: 36,
    textAlign: "center",
    color: '#a8a8a8',
  }
})
export default Footer;