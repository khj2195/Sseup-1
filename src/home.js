import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firstTab from './firstTab';
import secondTab from './secondTab';
import thirdTab from './thirdTab';
import Icons from 'react-native-vector-icons/dist/Ionicons';
// import userChecklist from './userChecklist';
// import scoreContext from './scoreContext';


const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
 let iconName, iconSize
 if (name === '홈') {
  iconName = focused? 'home' : 'home-outline'
 } else if (name === '레포트') {
  iconName = focused? 'document-text' : 'document-text-outline'
 } else if (name === 'MY') {
  iconName = focused? 'person' : 'person-outline'
 }
 iconSize= 30
 return (
   <Icons 
    name = {iconName}
    size= {iconSize}
   />
 )
 }

class HomeScreenTab extends Component {
  render (){
    
    return(
    <Tab.Navigator
      initialRouteName ="홈"
      screenOptions = {({route})=>({
        tabBarLabel: route.name,
        tabBarIcon: ({focused})=> TabBarIcon(focused, route.name)
      })}  
    >
      <Tab.Screen name="홈" component={firstTab} />
      <Tab.Screen name="레포트" component={secondTab}/>
      <Tab.Screen name="MY" component={thirdTab} />
      {/* <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
      }}>
          <Text>Home Screen</Text>
          <Button
            title="To User Screen"
            onPress={()=>{
                this.props.navigation.navigate('User')
            }}
          />
      </View> */}
    </Tab.Navigator>
    )
  }
}

export default HomeScreenTab;