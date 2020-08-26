import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';



function NewEntry() {
    return (
        <View>
            <Text style = {styles.text}>New Entry</Text>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
      justifyContent: 'center', 
      color: 'darkslateblue', 
      fontSize: 50,
      textAlign: "center",
    }
})

export default NewEntry;