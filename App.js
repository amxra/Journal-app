import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './components/Footer';
import { NativeRouter, Route, Link } from "react-router-native";
import NewEntry from './components/NewEntry';
import Entries from './components/Entries';
import Profile from './components/Profile';
import Entry from './components/Entry';



function App(){
 
    
    return(
        <NativeRouter>
            <View style = {styles.container}>
                <Route path="/newentry" component={NewEntry} />
                <Route  exact path="/" component={Entries} />
                <Route path="/profile" component={Profile} />
                <Route path = "/entry" component = {Entry}/>
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




// const [newEntry, setNewEntry] = useState([
//     {
//         id: uuid(), 
//         date: '25 Aug 2020',
//         emoji: '😊',
//         howDayWent: ' my day went okay ',
//         whatCouldbeBetter: ' something',
//         whatWasntDone: ' alot',
//         specialEvent: ' none',
//         couldHaveGoneBetter: 'meh ',
//         tomorrow: ' i dont know '
//     },
//     {
//         id: uuid(), 
//         date: '26 Aug 2020',
//         emoji: '😊',
//         howDayWent: ' my day went okay ',
//         whatCouldbeBetter: ' something',
//         whatWasntDone: ' alot',
//         specialEvent: ' none',
//         couldHaveGoneBetter: 'meh ',
//         tomorrow: ' i dont know '
//     },
//     {
//         id: uuid(), 
//         date: '27 Aug 2020',
//         emoji: '😊',
//         howDayWent: ' my day went okay ',
//         whatCouldbeBetter: ' something',
//         whatWasntDone: ' alot',
//         specialEvent: ' none',
//         couldHaveGoneBetter: 'meh ',
//         tomorrow: ' i dont know '
//     },
//     {
//         id: uuid(), 
//         date: '28 Aug 2020',
//         emoji: '😊',
//         howDayWent: ' my day went okay ',
//         whatCouldbeBetter: ' something',
//         whatWasntDone: ' alot',
//         specialEvent: ' none',
//         couldHaveGoneBetter: 'meh ',
//         tomorrow: ' i dont know '
//     },
//     {
//         id: uuid(), 
//         date: '29 Aug 2020',
//         emoji: '😊',
//         howDayWent: ' my day went okay ',
//         whatCouldbeBetter: ' something',
//         whatWasntDone: ' alot',
//         specialEvent: ' none',
//         couldHaveGoneBetter: 'meh ',
//         tomorrow: ' i dont know '
//     },
//     {
//         id: uuid(), 
//         date: '30 Aug 2020',
//         emoji: '😊',
//         howDayWent: ' my day went okay ',
//         whatCouldbeBetter: ' something',
//         whatWasntDone: ' alot',
//         specialEvent: ' none',
//         couldHaveGoneBetter: 'meh ',
//         tomorrow: ' i dont know '
//     },
//     {
//         id: uuid(), 
//         date: '31 Aug 2020',
//         emoji: '😊',
//         howDayWent: ' my day went okay ',
//         whatCouldbeBetter: ' something',
//         whatWasntDone: ' alot',
//         specialEvent: ' none',
//         couldHaveGoneBetter: 'meh ',
//         tomorrow: ' i dont know '
//     }
// ])