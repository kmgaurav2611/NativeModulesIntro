import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  NativeModules,
  Text,
  TextInput
} from 'react-native';

const { CheckSimulator} = NativeModules;
const CheckSimulatorScreen = ({navigation}) => {
    const [simulator, setSimulator] = useState(false);
   useEffect(()=>{
    CheckSimulator.isSimulator((result, second) => {
        setSimulator(second)
      })

   },[])

  return (
    <View style={[styles.container]}>
        {
            simulator ?
            <Text>{`You are running this app on a Simulator.`}</Text>
            :
            <Text>{`You are running this app on a physical device.`}</Text>
        }
      
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

export default CheckSimulatorScreen;
