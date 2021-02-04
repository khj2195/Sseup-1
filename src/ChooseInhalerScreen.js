import React, {useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import { AuthContext } from './AuthProvider';


const ChooseInhalerScreen = ({navigation}) => {
  const {InhalerType, setInhalerType} = useContext(AuthContext);
  return (
    <View style={styles.container}>
    <Text style={{fontSize: 16, fontWeight: '500', color: 'black', fontFamily: 'Lato-Regular',}}>
      당신이 사용하는 흡입기를 선택해주세요.
    </Text>
    <TouchableOpacity
        onPress={() => 
            {
              setInhalerType(1);
              console.log(InhalerType);  
            }}>
        <Image
        source={require('./assets/images/MDI.jpg')}
        style={styles.inhaler}
      />
    </TouchableOpacity>
    <TouchableOpacity
        onPress={() => 
          {
            setInhalerType(2);
            console.log(InhalerType);  
          }}>
        <Image
        source={require('./assets/images/Seretide_diskus.png')}
        style={styles.inhaler}
      />
    </TouchableOpacity>

      <FormButton
        buttonTitle="다음"
        onPress={() => 
          {
            navigation.navigate('Home');
            console.log(InhalerType);  
          }
        }
      />
    </View>
  );
};

export default ChooseInhalerScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  inhaler: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
});