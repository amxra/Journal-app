import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';
import { Link } from 'react-router-native';
import {v4 as uuid } from 'uuid';




function Entry(props) {

   return (
        <View style = {{flex:1}}>
            <ScrollView>
                <View>
                    <Text>{props.name}</Text>
                    <Text>{props.age}</Text>
                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    text:{
      justifyContent: 'center', 
      color: '#a8a8a8', 
      fontSize: 50,
      textAlign: "center",
    },
    footer:{
        position: "relative"
    }
})

export default Entry;

