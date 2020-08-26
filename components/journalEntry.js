import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from './Header';


function JournalEntry (){
    return(
        <TouchableOpacity style = {styles.journalEntry}>
            <View style = {styles.journalEntryView}>
                <Header/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    }
  })

export default JournalEntry;