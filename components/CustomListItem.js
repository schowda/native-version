import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import { ListItem, Avatar } from 'react-native-elements'


const CustomListItem = ({id, chatName, enterChat} ) => { 
    return (

<ListItem>
   <Avatar
       rounded
       source = {{
           uri: 
           "https://img.pngio.com/computer-icons-user-clip-art-transparent-user-icon-png-1742152-user-logo-png-920_641.png",
       }
       }
   />
   <ListItem.Content>
   <ListItem.Title style={{fontWeight:"800"}}> 
   Sathwik Chowda
   </ListItem.Title>

   <ListItem.Subtitle numberOfLines = {1} ellipsizeMode = "tail"> 
   Sathwik Chowda  Sathwik Chowda Sathwik Chowda Sathwik Chowda Sathwik Chowda Sathwik Chowda Sathwik Chowda Sathwik Chowda
   </ListItem.Subtitle>

   </ListItem.Content>
</ListItem>


    );

}


export default CustomListItem 
const styles = StyleSheet.create({})