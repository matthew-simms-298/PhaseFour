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


function App() {
  return (
     <SafeAreaView style={styles.general}>
      {/*Calculator*/}
      <View style={styles.viewFormat}>
        <Text style={styles.inputLabels}>PlaceHolder</Text>
      </View>
      <View style={styles.keypadContainer}>
      <View style={styles.keypad}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            1
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            2
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            3
          </Text>
        </Pressable>
       </View> 
       <View style={styles.keypad}> 
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            4
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            5         
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            6
          </Text>
        </Pressable>
      </View>
      <View style={styles.keypad}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}> 
            7
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            8
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            9
          </Text>
        </Pressable>
      </View>
      <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </Pressable>
        <View style={styles.keypad}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            *
          </Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            /
          </Text>
        </Pressable>
        </View>
      </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  keypad: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: 'auto',
    height: 'auto',
  },
  keypadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  
  general: {
    backgroundColor: '',
    flex: 1
  },
  viewFormat: {
    display: "block",
    margin: 10,
    padding: 70,
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
    width: 'auto',
    height: 'auto',
    padding: 'auto',
    fontSize: 32,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 3,
    

  },
  buttonText: {
    color: 'white',
    fontSize: 100,
    
  },
});

export default App;
