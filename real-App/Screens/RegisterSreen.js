import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Pressable} from 'react-native'
import React, { useState } from 'react'

const RegisterSreen = () => {
  const [email,setEmail]= useState("");
  const [name,setName]= useState("");
  const [password,setPassword]= useState("");
  const [image,setImage]= useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#101E32" }}>
      <KeyboardAvoidingView>
        <View style={{ flex: 1, alignItems: "center", marginTop: 150 }}>
          <Text style={{ color: "white", marginBottom: 10, fontWeight: 800 }}>
            {" "}
            Sign in
          </Text>
          <Text style={{ color: "white", marginBottom: 35, fontWeight: 100 }}>
            {" "}
            Sign in to your account{" "}
          </Text>
          
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"gray"}
              placeholder="Enter Your Email"
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,marginBottom: 50
              }}
              placeholderTextColor={"gray"}
              placeholder="Enter Your Password"
            />
          </View>
        <Pressable  style={{ width: 150, backgroundColor: "gray",  marginRight: "auto", marginLeft: "auto", padding:15, borderRadius: 30,}}>
          <Text style={{ color:"white",fontSize: 16, fontWeight:"bold", textAlign: "center",}}> LogIn </Text>
        </Pressable>

         <Pressable >
          <Text  onPress={() => navigation.navigate("Register")} style={{color: "white", marginBottom: 35, fontWeight: 100,marginBottom: 10}}>Don't have an account? Sign Up</Text>
         </Pressable>

        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterSreen

const styles = StyleSheet.create({})