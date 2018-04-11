import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import Combobo from 'combobo';
import './Signup.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {email: 'chris@usablehq.com', password: 'asd', chart: 'Code' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

    const chart = new Combobo({input: '.combobox',
      list: '.listbox',
      options: '.option', 
      openClass: 'open',
      activeClass: 'active',
      selectedClass: 'selected',
      useLiveRegion: true,
      noResultsText: null,
      selectionValue: (selecteds) => selecteds.map((s) => s.innerText.trim()).join(' - '),
      optionValue: 'underline', // wrap the matched portion of the option (if applicable) in a span with class "underline"
      filter: 'contains' // 'starts-with', 'equals', or funk
    });

    chart.on('change', (e) => {
      this.setState({
        'chart': chart.currentOption.innerText
      });
    });
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

    // if (firebase.auth) {

    //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .then((d) => {
    //       let user = d;
    //       let firestore = firebase.firestore();

    //       console.log(user)

    //       firestore.collection('activity').add({
    //         activity: 'write',
    //         note: '',
    //         timestamp: Date.now(),
    //         uid: user.uid
    //       });

    //       // firestore.collection('charts').doc('sing').set({ activity: 'sing' }); // upsert with defined id

    //       firestore.collection('charts').where('enabled', '==', true).get().then((querySnapshot)=>{
    //         querySnapshot.forEach((doc)=>{
    //           // doc.data() is never undefined for query doc snapshots
    //           console.log(doc.id, " => ", doc.data());
    //           this.props.history.push('/u/onion');
    //         });
    //       });


    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }

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
                <div className="combo-wrap">
                  <input type="text" name="chart" className="combobox" id="combobox-single" onChange={this.handleChange} value={this.state.chart} />
                  <i aria-hidden="true" className="fa trigger fa-caret-down" data-trigger="single"></i>
                  <div className="listbox">
                    <div className="option">Ween</div>
                    <div className="option">Frank Zappa</div>
                    <div className="option">Snarky Puppy</div>
                    <div className="option">Umphrey's McGee</div>
                    <div className="option">Keller Williams</div>
                    <div className="option">Greensky Bluegrass</div>
                    <div className="option">Leftover Salmon</div>
                    <div className="option">Code</div>
                    <div className="option">Family Groove Company</div>
                    <div className="option">Mac Demarco</div>
                    <div className="option">Lettuce</div>
                  </div>
                </div>
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
