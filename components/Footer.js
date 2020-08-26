import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5'


function Footer (){
  return(
    <View style ={styles.footer}>
        {/* <Text style = {styles.footerText}>Footer</Text> */}
        <View style = {styles.footerIcons}>
            <Icon
                style = {styles.footerIcon}
                name = 'pen-square'
                size={40} 
                color = '#a8a8a8'
            />
            <Icon
                style = {styles.footerIcon}
                name = 'list-alt'
                size={40} 
                color = '#a8a8a8'
            />
            <Icon
                style = {styles.footerIcon}
                name = 'user'
                size={40} 
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
    width: 400,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around"

  },
  footerIcon: {
    
    
  }
})
export default Footer;