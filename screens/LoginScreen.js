
import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from "expo-status-bar"
import { KeyboardAvoidingView} from 'react-native'
import { useEffect } from 'react'
import { auth } from '../firebase'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

       const unsubscribe = auth.onAuthStateChanged((authUser) => {

        if(authUser){
            navigation.replace('Home');


        }

        

        } )
        return unsubscribe;
    });

 

    const signIn = () => {

    }


    return (

        <KeyboardAvoidingView behavior= 'padding' style= {styles.container}>
            <StatusBar style="dark" />
            <Image 
            source={{
                uri:"/Users/sathwikchowda/Desktop/native/chatsapp/assets/chatsapplogo.png"
}}
                style={{ width: 300, height: 200 }}
            />


            <View style={styles.inputContainer} >

                <Input
                 placeholder = "Email"
                 autoFocus 
                 type = "email" 
                 value = {email}
                 onChangeText = {(text) => setEmail(text)}
                 />
                <Input 
                placeholder = "Password" 
                secureTextEntry  
                type = "password"
                value = {password}
                onChangeText = {(text) => setPassword(text)}/>

            </View>

            <Button containerStyle={styles.button} onPress ={signIn} title="Login"/>
            <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type = "outline" title="Sign up"/>
            <View style={{height:100}}></View>
        </KeyboardAvoidingView>



    )
}

export default LoginScreen

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
        marginTop:20,
    },

});