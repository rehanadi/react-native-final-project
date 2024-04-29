import { useState, useContext } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const { signIn, authState, ...others } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={require("../assets/logo.png")}
      />

      <Text>Email</Text>
      <TextInput  
        style={styles.inputText}
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput 
        style={styles.inputText}
        value={password}
        onChangeText={setPassword}
      />

      <Button 
        title="Login"
        style={styles.button}
        onPress={() => signIn({ email })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  imageLogo: {
    height: 100,
    resizeMode: "cover",
    marginBottom: 20
  },
  inputText: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  button: {
    marginTop: 50,
    height: 50,
    width: 300,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    padding: 10
  },
  titleButton: {
    color: "white"
  }
});