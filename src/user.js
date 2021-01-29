import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/dist/Ionicons';
import VideoPlayer from './VideoPlayer';

class UserScreen extends Component {
  render (){
    return(
      <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <View style={{flex:7, height: 300, width: 300, marginTop:100}}>
            {/* <Icons name="play-circle-outline" size={60} color="blue"/> */}
            <VideoPlayer />
        </View>          
        <View style={{flex:3}}>
          <Button
            title="To Home Screen"
            onPress={()=>{
                this.props.navigation.navigate('Home')
            }}
          />
        </View>
      </View>
    )
  }
}
const styles= StyleSheet.create({
  videoElementView: {
      marginTop:40,
      marginBottom:60,
      marginLeft: 5,
      marginRight: 5,
      padding: 30,
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 10,  
      },
      elevation: 15
  }
});


export default UserScreen;