import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const checklistContents = 
  [
    "- 흡입기를 잘 흔들었는가?",
    "- 흡입기를 흔든 후 바로 사용하였는가?",
    "- 흡입기 사용 전 숨을 완전히 뱉었는가?",
    "- 흡입을 시작한 이후에 흡입기를 분사했는가?",
    "- 흡입을 시작한지 적당한 타이밍에 분사했는가?",
    "- 들숨 한번에 흡입기를 1회만 사용하였나?",
    "- 호흡 속도는 적절하였는가?",
    "- 흡입 시간은 충분하였는가?",
    "- 흡입기의 위치는 정상적이었는가?",
    "- 흡입 후 6~10초간 숨을 참았는가?",
    "- 사용 후 양치나 가글을 하였는가?",
  ]
const listMistakes = (array) => {
    if(array===null){
      return null;
    }
    let content = checklistContents.filter((mem, key) => {return array[key]===false})
    // return content;
    return content.map((mem, key) => (
      <Text style={{fontSize:15}} key={key}>{mem}</Text>
    ))
}

class secondTab extends Component {
  
  render (){
    const {params} = this.props.route;
    const yourScore = params ? params.yourScore : null;
    const detailedScoring = params ? params.detailedScoring : null;

    return(
      <View style={styles.homeElementView}>
          {/* <Text style={{fontSize:25}}>SUMMARY</Text> */}
          <Text style={{fontSize:20}}>ID님의 흡입기 사용점수는</Text>
          <Text style={{fontSize:40}}>{JSON.stringify(yourScore)}0점</Text>
          <Text></Text>
          <Text style={{fontSize:20}}>ID님이 잘못 시행한 단계</Text>
          <Text></Text>
          <View>{listMistakes(detailedScoring)}</View>
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
    marginLeft: 12,
    marginRight: 12,
    padding: 20,
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

export default secondTab;