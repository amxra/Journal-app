import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';
import { Link } from 'react-router-native';


function Entries() {
    return (
        <View >
            <Text style = {styles.text}>Entries</Text>
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

export default Entries;


// function ListItem ({item, deleteItem}){
//     return(
//       <TouchableOpacity style = {styles.listItem}>
//           <View style = {styles.listItemView}>
//               <Text style = {styles.listItemText}>
//                   {item.text}
//               </Text>
//               <Icon 
//                   name = 'remove' 
//                   size={20} 
//                   color = 'firebrick'
//                   onPress = {() => deleteItem(item.id)} 
//               />
//           </View>
//       </TouchableOpacity>
//     );
// };