import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import FormButton from './components/FormButton';


const checklistContents = 
  [
    "1. 흡입기를 잘 흔들었는가?",
    "2. 흡입기를 흔든 후 바로 사용하였는가?",
    "3. 흡입기 사용 전 숨을 완전히 뱉었는가?",
    "4. 흡입을 시작한 뒤에 흡입기를 분사했는가?",
    "5. 흡입을 이후 적당한 시점에 분사했는가?",
    "6. 들숨 한번에 흡입기를 1회만 사용하였는가?",
    "7. 호흡 속도는 적절하였는가?",
    "8. 흡입 시간은 충분하였는가?",
    "9. 흡입기의 위치는 정상적이었는가?",
    "10. 흡입 후 6~10초간 숨을 참았는가?",
    "11. 사용 후 양치나 가글을 하였는가?",
  ]
const checklist= [false, false, false, false, false, false, false, false, false, false, false]

class userChecklist extends Component {
  state= {
    forUpdate:true
  }
  setChecklist = (index) => {
    checklist[index]=true;

    this.setState({state:this.state})
    // this.setState({
    //   checklist: this.state.checklist.map(
    //     (num,key) => {
    //       return key === index ? !num : num;
    //     }
    //   )
    // })
  }
  unsetChecklist = (index) => {
    checklist[index]=false;
    // checklist.map((num,key) => {
    //   return key === index ? false : num;
    // })
    this.setState({state:this.state})
    // this.setState({
    //   checklist: this.state.checklist.map(
    //     (num,key) => {
    //       return key === index ? false : num;
    //     }
    //   )
    // })
  }
  sumChecklist = () => {
    let sum=0;
    for (const iterator of checklist) {
      sum += iterator;
    }
    return sum;
  }
  makeChecklist = () => {
    // return checklistContents.map((mem, key) => (
    //   <View style={styles.check} key={key}>
    //     <View style={{flex:9}}>
    //       <Text style={styles.texts}>{mem}</Text>
    //     </View>
    //     <View style={{flex:1}}>
    //       <CheckBox
    //       value={this.state.checklist[key]}
    //       onValueChange={()=> this.setChecklist(key)}
    //       />
    //     </View>
    //   </View>
    // ))

    return checklistContents.map((mem, key) => (
      <View style={{flex:1, padding: 10, flexDirection:'column'}} key={key}>
        <View style={{flex:1, AlignItems:'stretch'}}>
          <Text style={styles.texts}>{mem}</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:5}}>
            <TouchableOpacity
              onPress={()=> this.setChecklist(key)}
              style={{backgroundColor: checklist[key]? '#ABB8C3':'#FFF', alignItems:'center'}}
            >
                <Text style={{fontSize:18}}>Yes</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:5}}>
            <TouchableOpacity
              onPress={()=> this.unsetChecklist(key)}
              style={{backgroundColor: '#FFF', alignItems:'center'}}
            >
                <Text style={{fontSize:18}}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ))

  }
  render (){
    console.log(checklist)
    return(
      <View>
      <ScrollView style={{
          paddingBottom: 30,
          flexDirection: 'column',
      }}>
        {this.makeChecklist()}
        <FormButton
          buttonTitle="완료"
          onPress={()=>{
              let a = this.sumChecklist();
              let b = checklist;
              this.props.navigation.navigate(
                '레포트', 
                {
                  yourScore: a,
                  detailedScoring: b
                });
          }}
        />
      </ScrollView>
      
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  texts: {fontSize: 18, paddingTop:8, marginBottom:10},
  check: {flex:1, padding: 10, flexDirection:'row'}
});

export default userChecklist;