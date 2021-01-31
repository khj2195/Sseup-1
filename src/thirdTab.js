import 'react-native-gesture-handler';
import React, {Component, useContext} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {AuthContext} from './AuthProvider';
import FormButton from './components/FormButton';


const thirdTab = () => {
  const {logout} = useContext(AuthContext);
    return (
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