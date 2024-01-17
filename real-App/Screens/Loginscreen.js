import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can replace 'FontAwesome5' with the appropriate icon set

const Loginscreen = () => {
  return (

      <View style={{ flex: 1,  alignItems: 'center', backgroundColor:"#101E32"}}>
      <KeyboardAvoidingView>

             <View style={{ flex: 1,  alignItems: 'center', }}>
              <Icon name="fingerprint" size={50} color="#7D8243"  /> 
              <Text style={{color: "white", marginBottom: 35, fontWeight: 800}}> Sign in with touch ID</Text>
              <Text style={{color: "white", marginBottom: 35, fontWeight: 100 }}> Use your touch ID for faster and easier access to your account. </Text>
              <TouchableOpacity
    onPress={() => {
      // Add your login with email logic here
    }}
    style={{
      backgroundColor: '#7D8243',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 50,
     
    }}
    
  >
    <Text style={{ color: 'white', fontSize: 16 }}>Log In with Email</Text>
  </TouchableOpacity>
  
  <Text style={{color: "white", marginBottom: 105, fontWeight: 800}}>New user? Sign Up</Text>

  <Icon name="bell" size={50} color="#7D8243" />
            </View>
            <View style={{ backgroundColor: "white", borderRadius: 90, width: 500, height: 150,  alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: 800, textAlign: "center", color:"#7D8243"}}>
    help?
  </Text>
</View>


          
      </KeyboardAvoidingView>
    </View>
    
  )
}

export default Loginscreen

const styles = StyleSheet.create({})