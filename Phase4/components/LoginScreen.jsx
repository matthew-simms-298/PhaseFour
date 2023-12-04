

/**
 * @Author Ryan Clarkson, Matthew Simms, Mitchell Kelm
 * @Group Prestige Worldwide
 * @Version 1.0
 * @Description This is the main file for the React Native application
 *
 * Documentation for React Native and TypeScript:
 * Sample React Native App: https://github.com/facebook/react-native
 * React Documentation: https://reactjs.org/docs/getting-started.html
 * React Native Documentation: https://reactnative.dev/docs/getting-started
 * TypeScript Documentation: https://www.typescriptlang.org/docs/
 * @format
 */

import StandardHeader from './components/StandardHeader';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default function LoginScreen(navigation) {
  return (
     
      <SafeAreaView style={styles.general}>
          <View>
            <Text>Chess Again!</Text>
            <Text>Please enter valid credentials here!</Text>
            <View style={styles.viewFormat}>
              <Text style={styles.inputLabels}>Username:</Text>
              <TextInput
                style={styles.textInputs}
                placeholder="Example: Matthew"
              />
              <Text style={styles.inputLabels}>Password:</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.textInputs}
                placeholder="Enter a password here!"
              />
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
          </View>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  general: {
    backgroundColor: '#002370',
    flex: 1
  },
  viewFormat: {
    display: "block",
    margin: 10,
    padding: 10,
    borderColor: 'black',
  },
  
  textInputs: {
    borderRadius: 4,
    borderWidth: 3, 
    borderColor: 'black',
    backgroundColor: 'white',
  },
  inputLabels: {
   paddingTop: 10,
   fontSize: 18,
   color: 'white'
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 3,

  },
  buttonText: {
    color: 'white'
  },
});

