import react, { Component } from "react";
import {Button, SafeArenaView, StyleSheet, Text, View,Platform, TextInput, SafeAreaView } from 'react-native';


class SignUp extends Component {
    
  render(){
   
    return(

        <View style={styles.container}>
           <View style={styles.header}>
            <Text style={styles.textHeader}>SignUp</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textDefault}>Address:</Text>
          <TextInput placeholder="123 Street Rd" style={styles.textInputDefault}></TextInput>
          <Text style={styles.textDefault}>State:</Text>
          <TextInput  placeholder="Victoria" style={styles.textInputDefault}></TextInput>
          <Text style={styles.textDefault}>Your Phone Number:</Text>
          <TextInput  placeholder="+61 1234567890" style={styles.textInputDefault}></TextInput>
          <Button title='Register' ></Button>
        
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
}
}
export default SignUp;
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
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    header: {
        height:80,
        width:420,
        backgroundColor:"#F26938",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        
        elevation: 22,
      },
      textHeader:{
        color:"white",
        fontSize:30,
        textAlign:"center",
       paddingVertical:10,
      },
      content:{
        flex:1,
        flexDirectionL:"column",
        justifyContent:"center",

      },
      textDefault:{
        fontSize:14,
        marginHorizontal:5,
        marginVertical:3,
      },
      textInputDefault:{
        borderColor:"#F26938",
        borderWidth:1,
        borderRadius:5,
        marginHorizontal:5,
        marginVertical:5,
        paddingHorizontal:5,
        paddingVertical:5,
        fontSize:14
      },
      textForgotPassWord:{
        fontSize:16,
        textAlign:"center",
        marginTop:30,
        fontWeight:"bold",
        textDecorationLine:"underline"
      },
      buttonDefault:{
        width:"50&",
        height:100,
        marginHorizontal:10,
        marginVertical:10,
      }
    

})