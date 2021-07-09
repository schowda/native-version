import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";
import { render } from "react-dom";

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  const anonymus = () => {
  auth
    .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });
  }
 
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "/Users/sathwikchowda/Desktop/native/chatsapp/assets/chatsapplogo.png",
        }}
        style={{ width: 300, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={handleSignIn}
        />
      </View>
      <Button
        containerStyle={styles.button}
        onPress={handleSignIn}
        title="Login"
      />
      <Button
        backgroundColor = '#ff0000'
        containerStyle={styles.button}
        onPress={anonymus}
        title="Anonymus Login"
        type="solid"
      />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
        title="Sign Up"
        type="outline"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
      
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor : "white"
  },
  inputContainer: {
    width: 300,
  },
  button: {
    marginTop: 10,
    width: 200,
  },
});
