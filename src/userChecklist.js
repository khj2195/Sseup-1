import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import { Table, Row, Rows } from 'react-native-table-component';

const checklistContents = 
  [
    "1. 흡입기를 잘 흔들었는가?",
    "2. 흡입기를 흔든 후 바로 사용하였는가?",
    "3. 흡입기 사용 전 숨을 완전히 뱉었는가?",
    "4. 흡입을 시작한 이후에 흡입기를 분사했는가?",
    "5. 흡입을 시작한지 적당한 타이밍에 분사했는가?",
    "6. 들숨 한번에 흡입기를 1회만 사용하였나?",
    "7. 호흡 속도는 적절하였는가?",
    "8. 흡입 시간은 충분하였는가?",
    "9. 흡입기의 위치는 정상적이었는가?",
    "10. 흡입 후 6~10초간 숨을 참았는가?",
    "11. 사용 후 양치나 가글을 하였는가?",
  ]


class userChecklist extends Component {
  state= {
    checklist: [false, false, false, false, false, false, false, false, false, false, false]
  }
  setChecklist = (index) => {
    this.setState({
      checklist: this.state.checklist.map(
        (num,key) => {
          return key === index ? !num : num;
        }
      )
    })
  }
  sumChecklist = () => {
    let sum=0;
    for (const iterator of this.state.checklist) {
      sum += iterator;
    }
    return sum;
  }
  makeChecklist = () => {
    return checklistContents.map((mem, key) => (
      <View style={styles.check} key={key}>
      <View style={{flex:9}}>
        <Text style={styles.texts}>{mem}</Text>
      </View>
      <View style={{flex:1}}>
        <CheckBox
        value={this.state.checklist[key]}
        onValueChange={()=> this.setChecklist(key)}
        />
      </View>
    </View>
    ))
  }
  render (){
    return(
      <View style={{
          flex: 1,
          paddingTop: 30,
          flexDirection: 'column',
          alignItems: 'stretch',
      }}>
        <View>{this.makeChecklist()}</View>
        {/* <Text style={{fontSize:20}}>Your score: {this.sumChecklist()}0</Text> */}
        <View style={{paddingTop:60}}><Button
          title="완료"
          onPress={()=>{
              let a = this.sumChecklist();
              let b = this.state.checklist;
              this.props.navigation.navigate(
                '레포트', 
                {
                  yourScore: a,
                  detailedScoring: b
                });
          }}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  texts: {fontSize: 15, paddingTop:8},
  check: {flex:1, padding: 10, flexDirection:'row'}
});

export default userChecklist;