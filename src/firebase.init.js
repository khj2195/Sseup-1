import firebases from '@react-native-firebase/app';

const firebaseConfig ={
    projectId: 'sseup-e4d44',
    apiKey: 'AIzaSyAmeRPmaMK-MmGRqSF4qDoXD0oueAPifQo',
    authDomain: 'sseup-e4d44.firebaseapp.com',
    databaseURL: 'https://sseup-e4d44.firebaseio.com',
    storageBucket: 'sseup-e4d44.appspot.com',
    appID: '1:971613435836:android:49932d9cf492440aff9db9',
  };

firebases.initializeApp(firebaseConfig);