import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JournalEntry from './components/JournalEntry';
import {v4 as uuid } from 'uuid';
import { NativeRouter } from 'react-router-native'

function App (){

  return(
    <NativeRouter>
      <View style = {styles.container}>
        <JournalEntry/>
    </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    paddingTop: 100
  }
})

export default App;