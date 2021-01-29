import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import HomeScreenTab from './home';
import UserScreen from './user';
import userVideo from './userVideo';
import userChecklist from './userChecklist';
import firebases from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

class AppStack extends Component {
    logoTitle = () =>{
    return(
        <Image 
        style={{
            resizeMode:"contain",
            width:70,
            height: 20,
        }}
        source={require('./assets/images/Sseup_miniLogo.jpg')}
        />
    )
    }
    render (){
        return(
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={HomeScreenTab}
                options = {{
                    title: 'SSEUP',
                    headerTitle: <this.logoTitle/>
                }}
                />
                <Stack.Screen 
                name="User" 
                component={UserScreen}
                options = {{title: '교육 영상'}}
                />
                <Stack.Screen
                name="userVideo"
                component={userVideo}
                options = {{
                    headerTitle: '흡입 영상 촬영하기'
                }}
                />
                <Stack.Screen
                name="userChecklist"
                component={userChecklist}
                />
            </Stack.Navigator>            
        )
    }
}

export default AppStack;