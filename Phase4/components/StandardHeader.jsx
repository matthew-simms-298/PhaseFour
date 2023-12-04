/**
 * @Author Ryan Clarkson & Mitchell Kelm
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
  TextInput,
} from 'react-native';
import { useState } from 'react';

const Stack = createStackNavigator();

const headerStyles = StyleSheet.create({
    Header: {
        backgroundColor: '#0D2456',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:40,
        width: 'full',
        padding: 10,  paddingVertical: 10, paddingHorizontal: 20,
    },

    text: {
        color: 'white'
    }
});

export default function StandardHeader() {
    {/* Link to diffrent pages */}
    return(
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Home" component={App} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>

        </NavigationContainer>

       
    )
}

/*
In React Native, you can use a library like react-navigation to navigate between different screens in your app. Here's a basic example of how you can set it up:

Install the necessary packages:
npm install @react-navigation/native @react-navigation/stack
Import the necessary modules in your app:
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
Define your screens:
Create a stack navigator and use it in your app:
In this example, the HomeScreen component has a button that navigates to the DetailsScreen when pressed. The navigation.navigate function is used to navigate to different screens.


*/