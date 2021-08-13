import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Button,
  StyleSheet,
  View,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import HomeScreen from '../screens/homeScreen';
import ToggleFlashScreen from '../screens/toggleFlash';
import ComputeSumScreen from '../screens/computeSum';
import CheckSimulatorScreen from '../screens/checkSimulator';

const Stack = createStackNavigator();

const Router = navigation => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Home',
            // headerLeft: props => (
            //   <Button
            //     onPress={() => navigation.pop()}
            //     title="Back"
            //     color="red"
            //   />
            // ),
          })}
        />
        <Stack.Screen
          name="ToggleFlashScreen"
          component={ToggleFlashScreen}
          options={({navigation}) => ({
            title: 'Toggle Flash',
            headerLeft: props => (
              <Button
                onPress={() => navigation.pop()}
                title="Back"
                color="red"
              />
            ),
          })}
        />
        <Stack.Screen
          name="ComputeSumScreen"
          component={ComputeSumScreen}
          options={({navigation}) => ({
            title: 'Compute Sum of 2 numbers',
            headerLeft: props => (
              <Button
                onPress={() => navigation.pop()}
                title="Back"
                color="red"
              />
            ),
          })}
        />
        
        <Stack.Screen
          name="CheckSimulatorScreen"
          component={CheckSimulatorScreen}
          options={({navigation}) => ({
            title: 'Check if app running on simulator',
            headerLeft: props => (
              <Button
                onPress={() => navigation.pop()}
                title="Back"
                color="red"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
