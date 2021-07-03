import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Button,Input } from 'react-native-elements'
import {db } from '../firebase'
import Icon from "react-native-vector-icons/FontAwesome"
import { auth } from '../firebase'



const AddChatScreen = ({navigation}) => {

    const [input, setInput] = useState("");


    useLayoutEffect(() => {

        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats",
        });

        
    },[navigation
    ]);

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        })
        .then(() => {
            navigation.goBack();
        })
        .catch((error) => alert(error));
    };


    return (

        <View
        style={styles.container}>
            <Input
            placeholder = "Enter a Chat Name"
            value = {input}
            onChangeText = {(text) => setInput(text)}
            onSubmitEditing = {createChat}
            leftIcon = {
                <Icon name = "search" type = "antdesign" size = {24} color = "black"/>
            }
           
            />
         <Button onPress = {createChat} title = "Create new Chat" />
        </View>
    );

}

export default AddChatScreen;
const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding:30,
        backgroundColor:'white',
        height:"100%"
    },
    inputContainer: {
        width:300,
    },
    button:{
        width:100,
        marginTop:20,

    },
})