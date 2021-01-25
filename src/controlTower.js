// import 'react-native-gesture-handler';
// import React, {Component} from 'react';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
// import HomeScreenTab from './home';
// import UserScreen from './user';
// import userVideo from './userVideo';
// import userChecklist from './userChecklist';
// import scoreContext from './scoreContext';


// const Stack = createStackNavigator();

// class controlTower extends Component {
//   logoTitle = () =>{
//     return(
//       <Image 
//         style={{
//           resizeMode:"contain",
//           width:70,
//           height: 20,
//         }}
//         source={require('./assets/images/Sseup_miniLogo.jpg')}
//       />
//     )
//   }
//   render (){
      
//     return(
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen 
//             name="Home" 
//             component={HomeScreenTab}
//             options = {{
//               title: 'SSEUP',
//               headerTitle: <this.logoTitle/>
//             }}
//           />
//           <Stack.Screen 
//             name="User" 
//             component={UserScreen}
//             options = {{title: '교육 영상'}}
//           />
//           <Stack.Screen
//             name="userVideo"
//             component={userVideo}
//           />
//           <Stack.Screen
//             name="userChecklist"
//             component={userChecklist}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
      
//     )
//   }
// }


// export default controlTower;
