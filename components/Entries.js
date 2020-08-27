import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';
import { Link } from 'react-router-native';
import {v4 as uuid } from 'uuid';
import Entry from "./Entry"



function Entries() {
    const id = uuid();
    const date = "27 Aug 2020";
    const emoji = "😊";
    const howDayWent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const whatCouldbeBetter = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const whatWasntDone = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const specialEvent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const couldHaveGoneBetter = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const tomorrow = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    return (
        <View >
            <Entry
            id = {id}
            date = {date}
            emoji = {emoji}
            howDayWent = {howDayWent}
            />
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


// function ListItem ({item, deleteItem}){
//     return(
//       <TouchableOpacity style = {styles.listItem}>
//           <View style = {styles.listItemView}>
//               <Text style = {styles.listItemText}>
//                   {item.text}
//               </Text>
//               <Icon 
//                   name = 'remove' 
//                   size={20} 
//                   color = 'firebrick'
//                   onPress = {() => deleteItem(item.id)} 
//               />
//           </View>
//       </TouchableOpacity>
//     );
// };