import React, { useState } from "react";

import { StyleSheet, Text, TextInput, View, Button, Alert, StatusBar } from 'react-native';
import colors from './src/utils/colors';
//import From from './src/components/Form'



export default function App() {

  const[glob1, setGlob1] = useState(0);
  //const[glob2, setGlob2] = useState(0);
  const[glob3, setGlob3] = useState(1);
  const[cont2, setCont2] = useState(1);
  const[num1, setNum1]= useState(0);
  const[num2, setNum2]= useState(1);
  const[global,setGlobal]= useState("");
  const[tipo, setTipo]=useState(0);
  const[results1, setResults1]=useState("")
  const[results2, setResults2]=useState("")
  const[results3, setResults3]=useState("")
  //const g =0;

  const Serie1 = () =>{
    
    setGlob1(glob1+2)
    console.log(glob1)
    // setResults1(results1+glob1)
    // setGlobal(results1)
    setTipo(1)
    Mostrar(tipo)
  }

  const Serie2 = () =>{
    
    
    setNum2(num1+num2)
    setNum1(num2);
    //Serie2p();
    //setNum2(glob2);
    console.log(num1);
    setTipo(2)
    Mostrar(tipo)
  }

  // const Serie2p=()=>{
  //   setNum1(num2);
  //   setNum2(glob2);
  //   console.log(num1);
  // }


  const Serie3 = () =>{
    setCont2(cont2+1)
    setGlob3(glob3*(cont2+1))
    console.log(glob3)
    setTipo(3)
    Mostrar(tipo)
  }
  
  const Mostrar = (tipo) =>{
    switch (tipo) {
      case 1:
        setResults1(results1+glob1 +", ")
        setGlobal(results1)
        break;
    
      
      case 2:
        setResults2(results2+num2 +", ")
        setGlobal(results2)
        break;
      
      case 3:
        setResults3(results3+glob3 +", ")
        setGlobal(results3)
        break;
    }
  }
  

  return (
    <>
    <StatusBar style="light-content" />
    <View style={styles.containerA}>
      <View style={styles.container}>
        <Text style={styles.title}>Examen_TFT</Text>
        {/*<From setGlob1={setGlob1} setGlob2={setGlob2} setGlob3={setGlob3} />*/}
          <View style={styles.container}>
            <Text style={{
              backgroundColor: "#fff",
              height: 100,
              width: 300,
              padding:10}}>{global}</Text>
          </View>

          <View style={styles.container}>
            <Button style={styles.button} title="Serie 1" onPress= {Serie1} />
            <Button title="Serie 2" style={styles.button} onPress= {Serie2}/>
            <Button title="Serie 3" style={styles.button} onPress= {Serie3}/>
          </View>
      </View>

    
 
    
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  containerA:{
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    alignItems: 'center',
    width:"100%",
    height:"100%"
  },
  title: {
    color: "#fff",
    fontSize: 30,
    paddingTop:50,
    paddingBottom:50
    
  },
  textInput:{
    backgroundColor: "#fff",
    color: "#000"
  },
  button:{
    backgroundColor: "##f194ff",
    with: 60
  }
});
