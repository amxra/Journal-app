import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';


function Profile() {
    return (
        <View>
            <Text style = {styles.text}>Profile</Text>
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

export default Profile;