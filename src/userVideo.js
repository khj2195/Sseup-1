import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


class userVideo extends Component {
  render (){
    return(
        <View>
          <TouchableOpacity
              style={styles.buttonElementView}
              onPress={()=>{
              this.props.navigation.navigate('userChecklist')}}
          >
              <Text style={{fontSize:20}}>내 영상 촬영하기</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles= StyleSheet.create({
    videoElementView: {
        marginTop:40,
        marginBottom:30,
        marginLeft: 15,
        marginRight: 15,
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
        elevation: 15,
    },
    buttonElementView: {
        marginTop:180,
        marginBottom:100,
        marginLeft: 15,
        marginRight: 15,
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
        elevation: 15,
    }
});

export default userVideo;