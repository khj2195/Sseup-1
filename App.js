/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import HomeScreenTab from './src/home';
import UserScreen from './src/user';
import userVideo from './src/userVideo';
import userChecklist from './src/userChecklist';
// import scoreContext from './src/scoreContext';


const Stack = createStackNavigator();

class App extends Component {
  logoTitle = () =>{
    return(
      <Image 
        style={{
          resizeMode:"contain",
          width:70,
          height: 20,
        }}
        source={require('./src/assets/images/Sseup_miniLogo.jpg')}
      />
    )
  }
  render (){
      
    return(
      <NavigationContainer>
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
      </NavigationContainer>
      
    )
  }
}

export default App;



// import 'react-native-gesture-handler';
// import React, {Component} from 'react';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
// import controlTower from './src/controlTower';
// import scoreContext from './src/scoreContext';

// class App extends Component {
//   state = {score: '0'}
  
//   render (){
      
//     return(
      
//         <scoreContext.Provider value={this.state.score}>
//           {/* <controlTower /> */}
//         </scoreContext.Provider>
      
//     )
//   }
// }


// export default App;
