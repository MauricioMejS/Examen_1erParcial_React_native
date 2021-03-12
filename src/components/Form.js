import React from 'React'
import {StyleSheet, View, Text, Button} from 'react-native'

export default function Form({setGlob1,setGlob2,setGlob3}){

    var g = "0";

    const Serie1 = () =>{
         g=g+"2";
        setGlob1(g)
    }

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <Button style={styles.button} title="Serie 1" onPress= {Serie1} />
                <Button title="Serie 2" style={styles.button} onPress= {(e)=> setGlob2(e+2)}/>
                <Button title="Serie 3" style={styles.button} onPress= {(e)=> setGlob3(e+2)}/>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    viewForm:{
        
    },
    viewInputs:{
        
    },
    button:{
        backgroundColor: "##f194ff"
    }
})
