import 'react-native-gesture-handler';
import React, {Component, useContext} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import {AuthContext} from './AuthProvider';
import FormButton from './components/FormButton';


const thirdTab = () => {
  const {logout} = useContext(AuthContext);
  // state = {
  //   tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
  //   tableData: [
  //     ['1', '2', '3', '4'],
  //     ['a', 'b', 'c', 'd'],
  //     ['1', '2', '3', '456\n789'],
  //     ['a', 'b', 'c', 'd']
  //   ],
  //   checklist: [false, false]
  // }
    return (
      // <View style={styles.container}>
      //   <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
      //     <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
      //     <Rows data={this.state.tableData} textStyle={styles.text}/>
      //   </Table>
      // </View>
      <View>
        <FormButton
          buttonTitle="Log out"
          onPress={() => logout()}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default thirdTab;