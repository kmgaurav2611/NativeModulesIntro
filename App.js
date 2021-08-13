/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState, useEffect} from 'react';

import {
  Button,
  SafeAreaView,

  StyleSheet,

} from 'react-native';

import Router from './src/navigation/router';


const App: () => Node = () => {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(255,253,246)" }}>
    <Router />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  }
});

export default App;
