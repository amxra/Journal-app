import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './components/Footer';
import { NativeRouter, Route, Link } from "react-router-native";
import NewEntry from './components/NewEntry';
import Entries from './components/Entries';
import Profile from './components/Profile';
import {v4 as uuid } from 'uuid';



function App(){
    const [newEntry, setNewEntry] = useState({
        id: uuid(), 
        date: ' ',
        emoji: ['😊', '😐', ' 😮','🥴', '😭'],
        howDayWent: ' ',
        whatCouldbeBetter: ' ',
        whatWasntDone: ' ',
        specialEvent: ' ',
        couldHaveGoneBetter: ' ',
        tomorrow: ' '
    })
    return(
        <NativeRouter>
            <View style = {styles.container}>
                <View>
                    
                </View>
                <Route path="/newentry" component={NewEntry} />
                <Route  exact path="/" component={Entries} />
                <Route path="/profile" component={Profile} />
            </View>
        </NativeRouter>
        
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      paddingTop: 130,
    },
    text:{
      color: 'darkslateblue', 
      fontSize: 50,
      textAlign: "center",
    }
})

export default App;