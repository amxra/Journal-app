import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Footer from './Footer';


function Entry() {
    return (
        <View style={{flex: 1}}>
            <View>
            <ScrollView>
                <Text style = {styles.header}>New Entry</Text>
                <View style = {styles.form}>
                    <View style = {styles.formSection}>
                        <Text style = {styles.text}>What emoji best descibes how you’re feeling?</Text>
                    </View>
                    <View style = {styles.formSection}>
                        <Text style = {styles.text}>What did you get up to today?</Text>
                        <TextInput style = {styles.input}/>
                    </View>
                    <View style = {styles.formSection}>
                        <Text style = {styles.text}>What did you want to do but didn’t get to?</Text>
                        <TextInput style = {styles.input}/>
                    </View>
                    <View style = {styles.formSection}>
                        <Text style = {styles.text}>Any thing special happen today?</Text>
                        <TextInput style = {styles.input}/>
                    </View>
                    <View style = {styles.formSection}>
                        <Text style = {styles.text}>What could have gone better?</Text>
                        <TextInput style = {styles.input}/>
                    </View>
                    <View style = {styles.formSection}>
                        <Text style = {styles.text}>Looking forward to anything tomorrow?</Text>
                        <TextInput style = {styles.input}/>
                    </View>
                    <TouchableOpacity style = {styles.btn} onPress ={() => addItem(text)}>
                        <Text style = {styles.btnText}>
                            Finish
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </View>
            
            <Footer style ={styles.footer}/>
        </View>
    )
}



const styles = StyleSheet.create({
    header:{
        color: "#a8a8a8",
        fontSize: 50,
        textAlign: "center"
    },
    text:{
      justifyContent: 'center', 
      fontSize: 15,
      color: '#a8a8a8',
      marginLeft: 20,
    },
    form: {
        // borderWidth: 2,
        // borderColor: 'red',
        minHeight: 600,
        alignItems: "center",
        marginBottom: 100,
    },
    input:{
        height: 120,
        padding: 20,
        fontSize: 16,
        // borderWidth: 2,
        // borderColor: 'blue',
        borderRadius: 5,
        margin: 20,
        backgroundColor: "rgba(168,168,168,0.1)"
    },
    formSection: {
        // borderWidth: 2,
        // borderColor: 'black',
        marginTop: 50,
        width: 400,
    },
    btn: {
        backgroundColor : 'rgba(168,168,168,0.3)',
        padding: 9,
        marginTop: 40,
        width: 250
    },
    btnText : {
        color: '#a8a8a8',
        fontSize: 20,
        textAlign: 'center',
    },
    footer: {
        position: "relative"
    },
    footer: {
        position: "relative"
    },
})

export default Entry;