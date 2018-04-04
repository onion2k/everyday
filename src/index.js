import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// gitignored so the details don't get in to the repo. Create a local version
import firebase from './firebase';

// import registerServiceWorker from './registerServiceWorker';

// const email = "chris@usablehq.com";
// const password = "password";

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((d) => {
//     let user = d;
//     let firestore = firebase.firestore();

//     // firestore.collection('charts').add({ activity: 'write' }); // add with auto id
//     // firestore.collection('charts').doc('sing').set({ activity: 'sing' }); // upsert with defined id

//   })
//   .catch(function(error) {
//     console.log(error);
//   });

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
