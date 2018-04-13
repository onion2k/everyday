import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from '../../firebase';
import './Update.css';

export default class Update extends Component {
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
    if (firebase.auth && 0) {

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

    } else {
      this.props.history.push('/u/onion');
    }

  }

  render(){

    let note = {
      type: "text",
      name: "note",
      autoComplete: "off",
      value: this.state.note,
      placeholder: "Any comments?",
      onChange: this.handleChange
    }

    return (
        <div className={"update"}>

            <form onSubmit={this.handleSubmit}>
            <div>
              <h3>Update your chart</h3>
                <label>Chart</label>
                <span className="dd">
                  <select>
                    <option>Read</option>
                    <option>Code</option>
                    <option>Writing</option>
                  </select>
                </span>

                <label>Notes</label>
                <input {...note} />

                <input type="submit" value="Update" />
              </div>
            </form>

        </div>
    );
  }
}
