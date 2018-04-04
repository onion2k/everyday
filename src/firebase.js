import * as firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "everyday-e3dcd.firebaseapp.com",
  databaseURL: "https://everyday-e3dcd.firebaseio.com",
  projectId: "everyday-e3dcd",
  storageBucket: "everyday-e3dcd.appspot.com",
  messagingSenderId: "550217069696"
};

export default firebase.initializeApp(config);