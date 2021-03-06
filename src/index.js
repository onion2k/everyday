import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  BrowserRouter as Router
} from 'react-router-dom'

// gitignored so the details don't get in to the repo. Create a local version
// import firebase from './firebase';

// if (firebase.auth) {
// import registerServiceWorker from './registerServiceWorker';

// const email = "chris@usablehq.com";
// const password = "password";

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((d) => {
//     let user = d;
//     let firestore = firebase.firestore();

//     console.log(user.uid);

//     firestore.collection('activity').add({
//       activity: 'write',
//       note: '',
//       timestamp: Date.now(),
//       uid: user.uid
//     });

//     // firestore.collection('charts').doc('sing').set({ activity: 'sing' }); // upsert with defined id

//     firestore.collection('charts').where('enabled', '==', true).get().then((querySnapshot)=>{
//       querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//       });
//     });


//   })
//   .catch(function(error) {
//     console.log(error);
//   });
  
// }

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();
