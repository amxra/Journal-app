import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JournalEntry from './components/JournalEntry';
import {v4 as uuid } from 'uuid';

function App (){

  return(
    <View style = {styles.container}>
        <JournalEntry/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    paddingTop: 100
  }
})

export default App;