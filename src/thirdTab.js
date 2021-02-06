import 'react-native-gesture-handler';
import React, {Component, useContext, useState} from 'react';
import { StyleSheet, View, ScrollView, Text, Button, Image} from 'react-native';
import {AuthContext} from './AuthProvider';
import { UserContext } from './HandleUser';

import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import CalendarPicker from 'react-native-calendar-picker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
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
// const listMistakes = (array) => {
//     if(array===null){
//       return null;
//     } 
//     else{
//       let content = checklistContents.filter((mem, key) => {return array[key]===false});
//       return content.map((mem, key) => (
//         <Text style={{fontSize:15}} key={key}>{mem}</Text>
//       ))
//     }
// }
// const showArray = (array) => {
//   if(array===null){
//     return null;
//   } 
//   else if(Array.isArray(array)){
//     // let newArr= checklistContents.filter((mem, key) => {return array[key]===false});
//     return array.map((mem, key) => (
//       <Text style={{fontSize:15}} key={key}>{JSON.stringify(mem)}</Text>
//     ))
//   }
//   else return null;
// }

// const multiArray = [true,true,false,false,true,true,true,true,true,true,true];
// const multiArray= [
//   [true, false, true, false, false, false, false, false, false, false, false],
//   [true, false, false, false, false, true, false, true, false, false, false],
//   [true, false, true, false, false, false, true, false, false, true, false]
// ]
const myList= new Array;

const thirdTab = () => {
  const [Values, setValues] = useState(0);
  const {logout} = useContext(AuthContext);
  const {InhalerType, Id} = useContext(UserContext);
  const emailID= auth().currentUser.email.split("@")[0];
  var userRef= database().ref('/users/'+emailID);

  const getHistory = () => {
    if(myList.length<1){
    var count=0;
    userRef.once('value').then((snapshot)=>
    {
      snapshot.forEach(item=>
      {
        count++;
        if(myList.length<count){
          myList.push(item.child('GradeCard'));
        }
      }
      )
    })
  }
    // console.log('getHistory implemented');
    console.log(myList);
  }
    return (
      <ScrollView>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <CalendarPicker />
          <FormButton
            buttonTitle="Show History"
            onPress={() =>
              {
              getHistory();
              // console.log(tempList.split(','));
              setValues(Values+1);
              }
            }
          />
          {
            myList.length>0? 
            // myList.map((member,key)=>{
            //   return listMistakes(member);
            // })
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:20}}>총 {myList.length}번 사용하셨어요!</Text>
              {/* <Text>{JSON.stringify(myList[0])}</Text>
              <Text>{JSON.stringify(myList[1])}</Text>
              <Text>{JSON.stringify(myList[2])}</Text> */}
              <Text>최근 사용결과 {JSON.stringify(myList[myList.length-1])}</Text>
              
              {/* {listMistakes(firstRow)} */}
              {/* {showArray(JSON.stringify(myList[0]).slice(1).split(','))} */}
              {/* {showArray(multiArray[multiArray.length-1])} */}
              {/* {showArray(myList[myList.length-1])} */}
            </View>
            :
            <View>
            </View>
          }
          {/* <FormButton
            buttonTitle="Show Current User Info"
            onPress={() => 
              {
                // myList.map((member,key)=>{
                //   return listMistakes(member);
                // });
                // setValues(Values+1);
                console.log(myList[myList.length-1]);
              }
            }
          /> */}
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black', fontFamily: 'Lato-Regular', marginTop:50}}>
            {emailID}님은 {InhalerType===1? "MDI" : "디스커스"}를 사용 중이에요!
          </Text>
          <Image
            source={InhalerType===1? require('./assets/images/MDI.jpg') : require('./assets/images/Seretide_diskus.jpg')}
            style={styles.inhaler}
          />
          <FormButton
            buttonTitle="Log out"
            onPress={() => logout()}
          />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  inhaler: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
  }
});

export default thirdTab;