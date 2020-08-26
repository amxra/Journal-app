import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';


function Entry() {
    return (
        <View>
            <Text style = {styles.text}>Entry</Text>
            <Link to="/newentry" underlayColor="#f0f4f7">
                        <Icon
                            style = {styles.footerIcon}
                            name = 'pen-square'
                            size={30} 
                            color = '#a8a8a8'
                        />
                    </Link>
            <Footer/>
        </View>
    )
}



const styles = StyleSheet.create({
    text:{
      justifyContent: 'center', 
      color: 'darkslateblue', 
      fontSize: 50,
      textAlign: "center",
    }
})

export default Entry;