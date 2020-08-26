import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './components/Footer';
import { NativeRouter, Route, Link } from "react-router-native";
import NewEntry from './components/NewEntry';
import Entries from './components/Entries';
import Profile from './components/Profile';



function App(){
    return(
        <NativeRouter>
            <View style = {styles.container}>
                <View>
                    <Entries/>
                </View>
                <Route exact path="/newentry" component={NewEntry} />
                <Route path="/entries" component={Entries} />
                <Route path="/profile" component={Profile} />
            </View>
        </NativeRouter>
        
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      justifyContent: 'center', 
    },
    text:{
      color: 'darkslateblue', 
      fontSize: 50,
      textAlign: "center",
    }
})

export default App;