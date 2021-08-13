import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  NativeModules,
  NativeEventEmitter,
  Text,
  TouchableOpacity
} from 'react-native';

const {Torch, GetSum, CheckSimulator} = NativeModules;
const TorchEvents = new NativeEventEmitter(Torch);

const HomeScreen = ({navigation}) => {
  const [torch, setTorch] = useState(null);

  useEffect(() => {
    TorchEvents.addListener('onChange', result => {
      alert(result);

      setTorch(result);
    });
    console.log(NativeModules);
    console.log(GetSum);
    // GetSum.returnSum(5, 6, (result, second) => {
    //   var hwAnswer = 'swiftCB: ' + result;
    //   console.log('hawwww', hwAnswer, second);
    // });
    console.log(
      CheckSimulator.isSimulator((result, second) => {
        
        console.log('aww', second);
      }),
    );
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style = {styles.title}>{"This is a project intended for learning native modules in react native"}</Text>
      <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate("ToggleFlashScreen")}>
        <Text style = {{color:'white'}}>Go to toggle flash screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate("ComputeSumScreen")}>
        <Text style = {{color:'white'}}>Go to compute sum screen</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate("CheckSimulatorScreen")}>
        <Text style = {{color:'white'}}>Go to check simulator screen</Text>
      </TouchableOpacity>
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
  title:{
    alignContent:'center',
    fontSize:20,
    padding:20
  },
  button:{
    padding: 10,
    margin:15,
    backgroundColor:'blue'
  }
});

export default HomeScreen;
