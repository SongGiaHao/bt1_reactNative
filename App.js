import { Component } from 'react';
import {Button, SafeAreaView,TextInput, StyleSheet, Text, View,Platform } from 'react-native';
import SignIn from './component/SignIn';
import React from 'react';
import SignUp from './component/SignUp';


class App extends Component {

  render(){
  //   const isIOS = Platform.OS==="ios"
  //   const isAndroid = Platform.OS==="android";
  //   if (isAndroid){
  //       console.log("this is Android")
  //   }
  //   if (isIOS){
  //     console.log("this is ios")
  // }
  return (
      <View style={styles.container}>
      {/* <Text>{Platform.OS}</Text> */}
      <SignIn></SignIn>
      {/* <CallApi></CallApi> */}
      </View>
  );
}
}
export default App;
const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:"column",
      ...Platform.select({
        ios: {
          backgroundColor: 'red'
        },
        android: {
          backgroundColor: 'RED'
        },
        default: {
          backgroundColor: 'blue'
        }
      })

  },

})
