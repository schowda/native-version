import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { Button,Input, Avatar } from 'react-native-elements'
import {db } from '../firebase'
import Icon from "react-native-vector-icons/FontAwesome"
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'




const ChatScreen = ({navigation, route }) => {


    useLayoutEffect(() => {

        navigation.setOptions({

            title: "Chat",
            headerTitleAlign: "left",
            headerTitle:() => (
                <View
                style = {{
                    flexDirection:"row",
                    alignItems:"center"
                }}
                >
                    <Text>          </Text>
                    <Avatar rounded source = {{uri:"https://img.pngio.com/computer-icons-user-clip-art-transparent-user-icon-png-1742152-user-logo-png-920_641.png"}}  />
                    <Text style = {{color:"black",marginLeft:10,fontWeight:"800"}}>{route.params.chatName}</Text>
                </View>
            ),

            headerLeft: () => (
                <TouchableOpacity
                
                style={{marginLeft:10}}
                onPress = {navigation.goBack}
                >
                    <AntDesign name = "arrowleft"  size = {24} color = "white" />
                </TouchableOpacity>
            ),

            headerRight: () => (
                <View 
                style = {{
                    flexDirection:"row",
                    justifyContent: "space-between",
                    width:80,
                    marginRight:20,

                }}
                >
                
                  
                    <TouchableOpacity activeOpacity={0.5}>
                   <AntDesign name = "phone" size = {24} color="black"/>
                        </TouchableOpacity>   

                        <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
                   <AntDesign name = "setting" size = {24} color="black"/>
                        </TouchableOpacity>   
                </View>
            ),


        });
        

        
    },[navigation
    ]);

    return (
        <SafeAreaView style = {{flex:1, backgroundColor:"white"}}>
            <Text >
                {route.params.chatName}
            </Text>
        </SafeAreaView>
    )










    // const [input, setInput] = useState("");



    // const createChat = async () => {
    //     await db.collection('chats').add({
    //         chatName: input
    //     })
    //     .then(() => {
    //         navigation.goBack();
    //     })
    //     .catch((error) => alert(error));
    // };


//     return (

//         <View
//         style={styles.container}>
//             <Input
//             placeholder = "Enter a Chat Name"
//             value = {input}
//             onChangeText = {(text) => setInput(text)}
//             onSubmitEditing = {createChat}
//             leftIcon = {
//                 <Icon name = "search" type = "antdesign" size = {24} color = "black"/>
//             }
           
//             />
//          <Button onPress = {createChat} title = "Create new Chat" />
//         </View>
//     );

 }

export default ChatScreen;
const styles = StyleSheet.create({

    // container: {
    //     flex:1,
    //     alignItems: "center",
    //     justifyContent: "flex-start",
    //     padding:30,
    //     backgroundColor:'white',
    //     height:"100%"
    // },
    // inputContainer: {
    //     width:300,
    // },
    // button:{
    //     width:100,
    //     marginTop:20,

    // },
})