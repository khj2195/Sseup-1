import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class firstTab extends Component {

  render (){
    const {params} = this.props.route;
    const yourScore = params ? params.yourScore : null;
    return(
    <View style={{backgroundColor: 'white', height:'100%'}}>
      <View style={styles.homeFirstElementView}>
          <Text style={{fontSize:20, color:'white'}}>당신의 흡입기 사용점수:</Text>
          <Text style={{fontSize:25, color:'white'}}>{yourScore}0점</Text>
      </View>
      <TouchableOpacity
        style={styles.homeElementView}
        onPress={()=>{
          this.props.navigation.navigate('userVideo')
        }}
      >
          <Text style={{fontSize:20}}>흡입 영상 촬영하기</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.homeElementView}
        onPress={()=>{
          this.props.navigation.navigate('User')
        }}
      >
          <Text style={{fontSize:20}}>교육영상 보러가기</Text>
      </TouchableOpacity>
    </View>
    )
  }
}

const styles= StyleSheet.create({
  homeFirstElementView: {
    marginTop:20,
    marginBottom:20,
    marginLeft: 15,
    marginRight: 15,
    padding: 30,
    flex:1,
    backgroundColor: 'steelblue',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 10,  
    },
    elevation: 15,
  },
  homeElementView: {
    marginTop:20,
    marginBottom:20,
    marginLeft: 15,
    marginRight: 15,
    padding: 30,
    flex:1,
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

export default firstTab;