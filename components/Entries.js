import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';
import { Link } from 'react-router-native';
import {v4 as uuid } from 'uuid';
import Entry from './Entry'



function Entries() {

    const entries = [
        {name: "amira", age: "26"},
        {name: "moyo", age: "26"}
    ]

   return (
        <View style = {{flex:1}}>
            <ScrollView>
                <Text style = {styles.text}>
                    Entries
                </Text>
                <View>
                   {entries.map(entry => (
                       <Entry
                        name = {entry.name}
                        age = {entry.age}
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
    footer:{
        position: "relative"
    }
})

export default Entries;

