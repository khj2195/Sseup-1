import React, { createContext, useState, useEffect } from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const UserContext = createContext();

export const HandleUser = ({children}) => {
    const getCurrentDate=()=>{
        var date = new Date().getDate();
        var month = new Date().getMonth()+1;
        var year = new Date().getFullYear();
        return year + '-' + month + '-' + date;
    }
    const getCurrentTime=()=>{
      var date = new Date().getDate();
      var month = new Date().getMonth()+1;
      var year = new Date().getFullYear();
      var time=new Date().toLocaleTimeString();
      return year + '-' + month + '-' + date + '-' + time;
    }
    // const [users,setUsers] = useState(null);
    const [Id, setId] = useState();
    const [InhalerType, setInhalerType] = useState(0);
    const [GradeCard, setGradeCard]=useState([]);
    const emailID= auth().currentUser.email.split("@")[0];
    const submitUser = (Id, InhalerType, GradeCard) => {
        return new Promise(function(resolve, reject) {
          let key;
          if (Id != null) {
            key = Id;
            // console.log(key);
          } else {
            console.log(Id);
            key = database()
              .ref()
              .push().key;
          }
          let dataToSave = {
            Id: auth().currentUser.email,
            InhalerType: InhalerType,
            Date: getCurrentDate(),
            GradeCard: GradeCard,
          };
          // console.log(key);
          database()
            .ref('users/'+ emailID+'/'+getCurrentTime())
            .update(dataToSave)
            .then(snapshot => {
              resolve(snapshot);
            })
            .catch(error => {
              reject(error);
            });
        });
      };
      const saveUser = (Id, InhalerType, GradeCard) => {
        submitUser(Id, InhalerType, GradeCard)
          .then((result) => {
          })
          .catch((error) => {
            console.log(error);
          });
      };
      return (
        <UserContext.Provider
            value={{
                Id, setId, InhalerType, setInhalerType, GradeCard, setGradeCard,
                submitUser: submitUser,
                // deleteUser: deleteUser,
                saveUser: saveUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
