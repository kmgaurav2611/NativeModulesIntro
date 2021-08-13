import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  View,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

const {Torch} = NativeModules;
const TorchEvents = new NativeEventEmitter(Torch);

const ToggleFlashScreen = ({navigation}) => {
  const [torch, setTorch] = useState(null);

  useEffect(() => {
    TorchEvents.addListener('onChange', result => {
      alert(result);

      setTorch(result);
    });
  }, []);

  const color = torch ? '#ffff88' : '#000000';

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Button title="ON" onPress={() => Torch.on()} />
      <Button title="OFF" onPress={() => Torch.off()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default ToggleFlashScreen;
