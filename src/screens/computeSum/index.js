import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  NativeModules,
  Text,
  TextInput
} from 'react-native';

const {GetSum} = NativeModules;

const ComputeSumScreen = ({navigation}) => {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [sum, setSum] = useState(0);


  const calcSum= ()=>{
    GetSum.returnSum(parseInt(firstNum), parseInt(secondNum), (error,result) => {
        setSum(result);
      });


  }

  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder={"Enter first number"}
        maxLength={3}
        keyboardType={'number-pad'}
       style = {{borderColor:'black', borderWidth:1, color:'black'}}
        value={firstNum}
        onChangeText={(text) => setFirstNum(text)}
        placeholderTextColor = "black"
    />
    <TextInput
        placeholder={"Enter second number"}
        maxLength={3}
        keyboardType={'number-pad'}
       style = {{borderColor:'black', borderWidth:1, color:'black'}}
        value={secondNum}
        onChangeText={(text) => setSecondNum(text)}
        placeholderTextColor = "black"
    />
      <Button title = "Compute sum" onPress={()=>calcSum()}/>

      <Text>{`The current sum is: ${sum}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFCFFF',
  },
});

export default ComputeSumScreen;
