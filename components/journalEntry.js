import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from './Header';
import Footer from './Footer'

function JournalEntry (){
    return(
        <TouchableOpacity style = {styles.journalEntry}>
            <View style = {styles.journalEntryView}>
                <Header/>
                <Text style = {styles.journalEntryText}>
                </Text>
                <Footer/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    journalEntryText:{
        // borderWidth: 2,
        // borderColor: "#20232a",
        minHeight: 620,
        maxHeight: 620,
        overflow: 'scroll',
        padding: 50
    }
  })

export default JournalEntry;