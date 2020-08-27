import React from 'react';
import { ScrollView } from 'react-native';

function EntryCard (){
    return(
        <View>
            <ScrollView>
                <Text style = {styles.text}>

                </Text>
            </ScrollView>
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

export default EntryCard;