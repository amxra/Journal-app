import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';
import { Link } from 'react-router-native';
import {v4 as uuid } from 'uuid';
import Entry from "./Entry"



function Entries() {

    const entries = [{
                id: uuid(), 
                date: '25 Aug 2020',
                emoji: '😊',
                howDayWent: ' my day went okay ',
                whatCouldbeBetter: ' something',
                whatWasntDone: ' alot',
                specialEvent: ' none',
                couldHaveGoneBetter: 'meh ',
                tomorrow: ' i dont know '
            },
            {
                id: uuid(), 
                date: '26 Aug 2020',
                emoji: '😊',
                howDayWent: ' my day went okay ',
                whatCouldbeBetter: ' something',
                whatWasntDone: ' alot',
                specialEvent: ' none',
                couldHaveGoneBetter: 'meh ',
                tomorrow: ' i dont know '
            },
            {
                id: uuid(), 
                date: '27 Aug 2020',
                emoji: '😊',
                howDayWent: ' my day went okay ',
                whatCouldbeBetter: ' something',
                whatWasntDone: ' alot',
                specialEvent: ' none',
                couldHaveGoneBetter: 'meh ',
                tomorrow: ' i dont know '
            },
            {
                id: uuid(), 
                date: '28 Aug 2020',
                emoji: '😊',
                howDayWent: ' my day went okay ',
                whatCouldbeBetter: ' something',
                whatWasntDone: ' alot',
                specialEvent: ' none',
                couldHaveGoneBetter: 'meh ',
                tomorrow: ' i dont know '
            },
            {
                id: uuid(), 
                date: '29 Aug 2020',
                emoji: '😊',
                howDayWent: ' my day went okay ',
                whatCouldbeBetter: ' something',
                whatWasntDone: ' alot',
                specialEvent: ' none',
                couldHaveGoneBetter: 'meh ',
                tomorrow: ' i dont know '
            },
            {
                id: uuid(), 
                date: '30 Aug 2020',
                emoji: '😊',
                howDayWent: ' my day went okay ',
                whatCouldbeBetter: ' something',
                whatWasntDone: ' alot',
                specialEvent: ' none',
                couldHaveGoneBetter: 'meh ',
                tomorrow: ' i dont know '
            },
            {
                id: uuid(), 
                date: '31 Aug 2020',
                emoji: '😊',
                howDayWent: ' my day went okay ',
                whatCouldbeBetter: ' something',
                whatWasntDone: ' alot',
                specialEvent: ' none',
                couldHaveGoneBetter: 'meh ',
                tomorrow: ' i dont know '
            }]

   return (
        <View >
            
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

