import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { Link } from 'react-router-native';
import EntryForm from './EntryForm';



function Footer (){
  return(
    <View style ={styles.footer}>
        {/* <Text style = {styles.footerText}>Footer</Text> */}
        <View style = {styles.footerIcons}>
            <Link
                to = '/newentry'
                
            >
                <Icon
                    style = {styles.footerIcon}
                    name = 'pen-square'
                    size={30} 
                    color = '#a8a8a8'
                />
            </Link>
            
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
  );
};


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

  },
  footerIcon: {
    
    
  }
})
export default Footer;