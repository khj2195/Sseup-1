import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import FormButton from './components/FormButton';
import Video from 'react-native-video';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class UserScreen extends Component {
  
  render (){
    return(
        <View style={{height: windowHeight/2, width: windowWidth, marginTop:30}}>
            <Video 
              source={require('./assets/videos/DryingLime.mp4')}   // Can be a URL or a local file.
              ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onError={this.videoError}               // Callback when video cannot be loaded
              style={styles.backgroundVideo} 
              paused={this.paused}
              resizeMode='contain'
            />
            <View>
              <FormButton
                buttonTitle="내 영상 촬영하기"
                onPress={()=>{
                    this.props.navigation.navigate('userVideo')
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
  },
  backgroundVideo: {
    position: 'absolute',
    top: 20,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


export default UserScreen;