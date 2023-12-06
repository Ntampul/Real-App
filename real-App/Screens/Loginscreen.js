import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can replace 'FontAwesome5' with the appropriate icon set

const Loginscreen = () => {
  return (

      <View style={{ flex: 1,  alignItems: 'center', backgroundColor:"#101E32"}}>
    <Icon name="fingerprint" size={50} color="#7D8243" /> 

    <Text style={{color: "white", marginBottom: 20 }}> Sign in with touch ID</Text>

      <KeyboardAvoidingView>
    
      </KeyboardAvoidingView>
    </View>
    
  )
}

export default Loginscreen

const styles = StyleSheet.create({})