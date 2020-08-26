import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JournalEntry from './components/journalEntry'

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