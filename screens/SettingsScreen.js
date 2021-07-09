

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text, Image } from "react-native-elements";
import { auth } from "../firebase";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';

const SettingsScreen = ({ navigation }) => {
  const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  


  const updateUserProfile = () => {
   auth.currentUser.updateProfile({
          displayName: name,
        //   photoURL:
        //     imageUrl ||
        //     "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
    
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h1 style={{ marginBottom: 50 }}>
        Update Your Profile
      </Text>
      <View style={styles.inputContainer}>
      <AdMobBanner style={styles.bannerAd}
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                onDidFailToReceiveAdWithError={this.bannerError}
                onAdViewDidReceiveAd = {this.bannerAdReceived} />
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {/* <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        /> */}
        {/* <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={updateUserProfile}
        /> */}
      </View>
      <Button
        raised
        title="Update"
        containerStyle={styles.button}
        onPress={updateUserProfile}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
