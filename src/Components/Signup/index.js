import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import './Signup.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {email: 'chris@usablehq.com', password: 'asd'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (firebase.auth) {

      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((d) => {
          let user = d;
          let firestore = firebase.firestore();

          console.log(user)

          firestore.collection('activity').add({
            activity: 'write',
            note: '',
            timestamp: Date.now(),
            uid: user.uid
          });

          // firestore.collection('charts').doc('sing').set({ activity: 'sing' }); // upsert with defined id

          firestore.collection('charts').where('enabled', '==', true).get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              this.props.history.push('/u/onion');
            });
          });


        })
        .catch(function(error) {
          console.log(error);
        });
    }

  }

  render(){

    let email = {
      type: "email",
      name: "email",
      autoComplete: "off",
      value: this.state.email,
      placeholder: "chris@everyday.com",
      onChange: this.handleChange
    }
    
    let password = {
      type: "password",
      name: "password",
      autoComplete: "off",
      value: this.state.password,
      onChange: this.handleChange
    }

    return (
        <div className={"login"}>

          <div className={"banner"}>
            Create your first chart
          </div>

          <div>

            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Email address</label>
                <input {...email} />
              </div>
              <div>
                <label>Password</label>
                <input {...password} />
              </div>
              <div>
                <label>Chart</label>
                <select>
                  <option>Read</option>
                  <option>Code</option>
                  <option>Write</option>
                  <option>Sing</option>
                  <option>Journal</option>
                </select>
              </div>

              <div>
                <input type="submit" value="Create" />
              </div>
            </form>

          </div>

        </div>
    );
  }
}
