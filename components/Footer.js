import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Link } from 'react-router-native';
import NewEntry from './NewEntry';
import Entries from './Entries';
import Profile from './Profile';

function Footer(){
    return(
        <View>
            <View style ={styles.footer}>
                <View style = {styles.footerIcons}>
                
                    <Icon
                        style = {styles.footerIcon}
                        name = 'pen-square'
                        size={30} 
                        color = '#a8a8a8'
                    />
                
                    <Icon
                        style = {styles.footerIcon}
                        name = 'list-alt'
                        size={30} 
                        color = '#a8a8a8'
                    />
                    <Icon
                        style = {styles.footerIcon}
                        name = 'user'
                        size={30} 
                        color = '#a8a8a8'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
      // borderWidth: 2,
      // borderColor: "#20232a",
      // borderBottomColor: '#fff',
      
      height: 80,
      padding: 15,
      // borderWidth: 2,
      // borderColor: 'red',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    footerText: {
      fontSize: 36,
      textAlign: "center",
      color: '#a8a8a8',
    },
    footerIcons : {
      // borderWidth: 2,
      // borderColor: 'red',
      width: 300,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-around"
  
    }
  })



export default Footer;