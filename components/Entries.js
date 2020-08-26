import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';


function Entries() {
    return (
        <View>
            <Text style = {styles.text}>Entries</Text>
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

export default Entries;