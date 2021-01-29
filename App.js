/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
// import HomeScreenTab from './src/home';
// import UserScreen from './src/user';
// import userVideo from './src/userVideo';
// import userChecklist from './src/userChecklist';
// import firebases from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
// import { useState, useEffect } from 'react';

import { AuthProvider } from './src/AuthProvider';
import Route from './src/Route';

const App = () => {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
}

export default App;


// const Stack = createStackNavigator();

// class App extends Component {
//   logoTitle = () =>{
//     return(
//       <Image 
//         style={{
//           resizeMode:"contain",
//           width:70,
//           height: 20,
//         }}
//         source={require('./src/assets/images/Sseup_miniLogo.jpg')}
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
//             options = {{
//               headerTitle: '흡입 영상 촬영하기'
//             }}
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

// export default App;

// const firebaseConfig ={
//   projectId: 'sseup-e4d44',
//   apiKey: 'AIzaSyAmeRPmaMK-MmGRqSF4qDoXD0oueAPifQo',
//   authDomain: 'sseup-e4d44.firebaseapp.com',
//   databaseURL: 'https://sseup-e4d44.firebaseio.com',
//   storageBucket: 'sseup-e4d44.appspot.com',
//   appID: '1:971613435836:android:49932d9cf492440aff9db9',
// }
// // let appFire = firebases.initializeApp(firebaseConfig);

// function App() {
//   logoTitle = () =>{
//     return(
//       <Image 
//         style={{
//           resizeMode:"contain",
//           width:70,
//           height: 20,
//         }}
//         source={require('./src/assets/images/Sseup_miniLogo.jpg')}
//       />
//     )
//   }

//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();
//   var curUser = auth().currentUser;

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;
//   if (!user) {
//     // console.log(firebases.app().name);
//     return (
//       <View>
//         <Text>Logins</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );

//     // return(
//     //   <NavigationContainer>
//     //     <Stack.Navigator>
//     //       <Stack.Screen 
//     //         name="Home" 
//     //         component={HomeScreenTab}
//     //         options = {{
//     //           title: 'SSEUP',
//     //           headerTitle: <this.logoTitle/>
//     //         }}
//     //       />
//     //       <Stack.Screen 
//     //         name="User" 
//     //         component={UserScreen}
//     //         options = {{title: '교육 영상'}}
//     //       />
//     //       <Stack.Screen
//     //         name="userVideo"
//     //         component={userVideo}
//     //         options = {{
//     //           headerTitle: '흡입 영상 촬영하기'
//     //         }}
//     //       />
//     //       <Stack.Screen
//     //         name="userChecklist"
//     //         component={userChecklist}
//     //       />
//     //     </Stack.Navigator>
//     //   </NavigationContainer>
      
//     // )
//   }

// export default App;
