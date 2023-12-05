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
'use client'

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
import { useState } from 'react';





function App() {
  
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [calculation, setCalculation] = useState("");
  
  const handleNum = (num) => {
      if (!operator) {
          setNum1(num1 + num);
      } else {
          setNum2(num2 + num);
          setCalculation(num1 + operator + num2);
      }
  }
  
  const handleResult = () => {
      let res;
      switch (operator) {
          case "+":
              res = parseInt(num1) + parseInt(num2);
              break;
          case "-":
              res = parseInt(num1) - parseInt(num2);
              break;
          case "*":
              res = parseInt(num1) * parseInt(num2);
              break;
          case "/":
              res = parseInt(num1) / parseInt(num2);
              break;
            }
          setResult(res.toString());
          setNum1("");
          setNum2("");
          setOperator("");
          setCalculation(num1 + operator + num2 + "=" + res.toString());
  }
  
/* #Copilot Suggestion
This error typically occurs when you're trying to access a property or method of an object that is null or undefined. In this case,

it seems like you're trying to access handleSetJSResponder of an object that is null.

However, the provided code does not contain any reference to handleSetJSResponder. This might be in another part of your code.

To fix this issue, you should add a null check before accessing handleSetJSResponder. Here's a general example of how you can do this:

Replace yourObject with the actual object you're working with.

If you're still having trouble, please provide the part of your code where handleSetJSResponder is being used so I can give a more accurate solution.

if (yourObject !== null && yourObject !== undefined) {
  yourObject.handleSetJSResponder();
}
*/

  const handleOperator = (op) => {
      setOperator(op);
      setCalculation(num1 + op);
  }
  
  const handleclear = () => {
      setNum1("");
      setNum2("");
      setOperator("");
      setResult("");
      setCalculation("");
  }


  return (
     <SafeAreaView style={styles.general}>
      {/*Calculator*/}
      <View style={styles.viewFormat}>
        <Text style={styles.inputLabels}>{num1} {operator} {num2} {operator && num2 ? '=' : handleResult}</Text>
        <Text style={styles.inputLabels}>{result}</Text>
      </View>
      <View style={styles.keypadContainer}>
      <View style={styles.keypad}>
        <Pressable 
        onPress={() => handleNum(1)}
        style={styles.button}>
          <Text 
          style={styles.buttonText}>
            1
          </Text> 
        </Pressable>
        <Pressable 
        onPress={() => handleNum(2)}
        style={styles.button}>
          <Text style={styles.buttonText}>
            2
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleNum(3)}
        style={styles.button}>
          <Text style={styles.buttonText}>
            3
          </Text>
        </Pressable>
       </View> 
       <View style={styles.keypad}> 
        <Pressable 
        onPress={() => handleNum(4)}
        style={styles.button}>
          <Text style={styles.buttonText}>
            4
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleNum(5)}
        style={styles.button}>
          <Text style={styles.buttonText}>
            5         
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleNum(6)}
        style={styles.button}>
          <Text style={styles.buttonText}>
            6
          </Text>
        </Pressable>
      </View>
      <View style={styles.keypad}>
        <Pressable 
        onPress={() => handleNum(7)}
        style={styles.button}>
          <Text style={styles.buttonText}> 
            7
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleNum(8)}
        style={styles.button}>
          <Text style={styles.buttonText}>
            8
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleNum(9)}
        style={styles.button}>
          <Text style={styles.buttonText}>
            9
          </Text>
        </Pressable>
      </View>
      <View style={styles.keypad}>
      <Pressable 
      onPress={() => handleNum(0)}
      style={styles.button}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleclear()}
        style={styles.operatorButton}>
          <Text style={styles.buttonText}>
            C
          </Text>
        </Pressable>
      </View>
        <View style={styles.keypad}>
        <Pressable 
        onPress={() => handleOperator("+")}
        style={styles.operatorButton}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleOperator("-")}
        style={styles.operatorButton}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleOperator("*")}
        style={styles.operatorButton}>
          <Text style={styles.buttonText}>
            *
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleOperator("/")}
        style={styles.operatorButton}>
          <Text style={styles.buttonText}>
            /
          </Text>
        </Pressable>
        <Pressable 
        onPress={() => handleResult()}
        style={styles.operatorButton}>
          <Text style={styles.buttonText}>
            =
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
    backgroundColor: 'black',
    flex: 1
  },
  viewFormat: {
    display: "block",
    margin: 10,
    padding: 45,
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
   color: 'white',
   backgroundColor: 'black'
  },
  button: {
    width: 'auto',
    height: 'auto',
    padding: 'auto',
    fontSize: 32,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 3,
    flex: 1,
  },

operatorButton: {
  width: 'auto',
    height: 'auto',
    padding: 'auto',
    fontSize: 32,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 3,
    flex: 1,
},

  buttonText: {
    color: 'white',
    fontSize: 100,
    
  },
});

export default App;
