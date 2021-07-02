import React from 'react'
import { useLayoutEffect } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import { auth,db } from '../firebase'
import { ListItem, Avatar } from 'react-native-elements'

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {

        navigation.setOptions({
            title: "Chatsapp",
            headerStyle : {backgroundColor: "#fff"},
            headerTitleStyle: {color: "black"},
            headerTintColor: "black",
            headerLeft: () => (
                <View>
                  
                    <TouchableOpacity>
                    <Avatar rounded source = {{uri: auth?.currentUser?.photoURL}}/>
                        </TouchableOpacity>   
                </View>
            ),
        });

        
    },[]);
    return (

        <SafeAreaView>
            <ScrollView>
            <CustomListItem/>


            </ScrollView>
            
        </SafeAreaView>
    )

}

export default HomeScreen;
const styles = StyleSheet.create({})