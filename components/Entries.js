import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';
import { Link } from 'react-router-native';
import {v4 as uuid } from 'uuid';
import Entry from './Entry'



function Entries() {

    const entries = [
        {id:uuid(), date: "27 Aug 2020", emoji: "😊"},
        {id:uuid(), date: "26 Aug 2020", emoji: "🥴"},
        {id:uuid(), date: "25 Aug 2020", emoji: "😐"},
        {id:uuid(), date: "24 Aug 2020", emoji: "😊"},
        {id:uuid(), date: "23 Aug 2020", emoji: "😊"},
        {id:uuid(), date: "22 Aug 2020", emoji: "😊"},
    ]

   return (
        <View style = {{flex:1}}>
            <ScrollView>
                <Text style = {styles.text}>
                    Entries
                </Text>
                <View style = {styles.entriesContainer}>
                   {entries.map(entry => (
                       <Entry style = {styles.entryStyle}
                        date = {entry.date}
                        emoji = {entry.emoji}
                       />
                   ))}
                </View>
            </ScrollView>
            
            <Footer style = {styles.footer}/>
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
    entryStyle: {
        borderWidth: 2,
        borderColor: "black"
    },
    entriesContainer:{
        // borderWidth: 3,
        // borderColor: "red",
        minHeight: 500,
        paddingBottom: 20,
        paddingTop: 60,
    },
    footer:{
        position: "relative"
    }
})

export default Entries;

