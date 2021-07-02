
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from 'react-native-elements'
import { name, email, password } from "ci-info";
import React, { useState } from 'react'
import { useLayoutEffect } from "react";
import { auth } from "../firebase";
import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'



const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImage] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headBackTitle: "Back to Login",
        });
    },[navigation]);

const register = () => {

   

    

    console.log({email, password});
    
  auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser) => {

        authUser.user.updateProfile({
            displayName: name,
            photoURL: 
              imageUrl || 
              "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        });
    })
    .catch((error) => alert(error.message))



};

    return (
        <KeyboardAvoidingView behavior= 'padding' style= {styles.container}>
        <StatusBar style="dark" />
        <Image 
        source={{
            uri:"/Users/sathwikchowda/Desktop/native/chatsapp/assets/chatsapplogo.png"
}}
            style={{ width: 300, height: 200 }}
        />
            <View style={styles.inputContainer}>
                < Input
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                < Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                < Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)} />

                < Input
                    placeholder="Profile Picture (Optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImage(text)}
                    onSubmitEditing = {register}
                    />
            </View>
            <Button raised onPress={register} containerStyle={styles.button} type = "solid" title="Sign up"/>
            <View style={{height:100}}></View>


        </KeyboardAvoidingView>

    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center',
        padding:10,
        backgroundColor:'white',
    },
    inputContainer: {
        width:300,
    },
    button:{
        width:100,
        marginTop:10,
    },
});