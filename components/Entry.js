import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';
import { Link } from 'react-router-native';
import {v4 as uuid } from 'uuid';




function Entry(props) {

   return (
        <View>
            <ScrollView>
                <View style = {styles.entryContainer}>
                    <Text style = {styles.entryDate}>{props.date}</Text>
                    <Text style = {styles.entryEmoji}>{props.emoji}</Text>
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
    entry: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2
    },
    entryContainer:{
        height: 100,
        marginBottom: 50,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        shadowColor:"#d0d0d0",
        shadowOffset: {width:5, height: 5},
        shadowRadius: 10,
        shadowOpacity: 1,
        width: 350,
    },
    entryDate:{
        fontSize: 25,
        color: '#a8a8a8', 
    },
    footer:{
        position: "relative"
    }
})

export default Entry;

