import React, { createContext, useState, useEffect } from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // const getCurrentDate=()=>{
    //     var date = new Date().getDate();
    //     var month = new Date().getMonth()+1;
    //     var year = new Date().getFullYear();
    //     return year + '-' + month + '-' + date;
    // }
    // const getCurrentTime=()=>{
    //   var date = new Date().getDate();
    //   var month = new Date().getMonth()+1;
    //   var year = new Date().getFullYear();
    //   var time=new Date().toLocaleTimeString();
    //   return year + '-' + month + '-' + date + '-' + time;
    // }
    const [users,setUsers] = useState(null);
    // const [Id, setId] = useState();
    // const [Name, setName] = useState('');
    // const [InhalerType, setInhalerType] = useState(0);
    // const [GradeCard, setGradeCard]=useState([]);
    // const emailID= auth().currentUser.email.split("@")[0];

    // const submitUser = (Id, InhalerType, GradeCard) => {
    //     return new Promise(function(resolve, reject) {
    //       let key;
    //       if (Id != null) {
    //         key = Id;
    //         // console.log(key);
    //       } else {
    //         console.log(Id);
    //         key = database()
    //           .ref()
    //           .push().key;
    //       }
    //       let dataToSave = {
    //         Id: auth().currentUser.email,
    //         InhalerType: InhalerType,
    //         Date: getCurrentDate(),
    //         GradeCard: GradeCard,
    //       };
    //       // console.log(key);
    //       database()
    //         .ref('users/'+ emailID+'/'+getCurrentTime())
    //         .update(dataToSave)
    //         .then(snapshot => {
    //           resolve(snapshot);
    //         })
    //         .catch(error => {
    //           reject(error);
    //         });
    //     });
    //   };
    // const deleteUser = (Item) => {
    //     database()
    //     .ref('users/' + Item.Id)
    //     .remove()
    //     .then(() => {})
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // };
    // const saveUser = (Id, InhalerType, GradeCard) => {
    //   submitUser(Id, InhalerType, GradeCard)
    //     .then((result) => {
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    // useEffect(() => {
    //     const userRef = database().ref('/users');
    //     const OnLoadingListener = userRef.on('value', (snapshot) => {
    //       // setUsers([]);
    //       // snapshot.forEach(function (childSnapshot) {
    //       //     setUsers((users) => [...users, childSnapshot.val()]);
    //       // });
    //       Alert.alert('제출되었습니다.');
    //     });
    //     // const childRemovedListener = userRef.on('child_removed', (snapshot) => {
    //     // // Set Your Functioanlity Whatever you want.
    //     // alert('Child Removed');
    //     // });

    //     // const childChangedListener = userRef.on('child_changed', (snapshot) => {
    //     // // Set Your Functioanlity Whatever you want.
    //     // alert('Child Updated/Changed');
    //     // });

    //     return () => {
    //     userRef.off('value', OnLoadingListener);
    //     // userRef.off('child_removed', childRemovedListener);
    //     // userRef.off('child_changed', childChangedListener);
    //     };
    // }, []);
    return (
        <AuthContext.Provider
            value={{
                users, setUsers,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                        Alert.alert('ID나 비밀번호를 확인해주세요.');
                    }
                },
                register: async (email, password) => {
                    try {
                      await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                      console.log(e);
                    }
                },
                logout: async () => {
                    try {
                      await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}