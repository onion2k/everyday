import React, { Component } from 'react';
import {
  Switch, Route
} from 'react-router-dom'

import './User.css';

import Welcome from '../../Components/Welcome';
import Calendar from '../../Components/Calendar';

const u = {"uid":"Q24zqM2zICQYdqCI8c5MXPJb7WG2","displayName":null,"photoURL":null,"email":"everyday@usablehq.com","emailVerified":false,"phoneNumber":null,"isAnonymous":false,"providerData":[{"uid":"everyday@usablehq.com","displayName":null,"photoURL":null,"email":"everyday@usablehq.com","phoneNumber":null,"providerId":"password"}],"apiKey":"AIzaSyC3aN__MuRpf3bJDqYWfFin1gppFPA6DSM","appName":"[DEFAULT]","authDomain":"everyday-e3dcd.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyC3aN__MuRpf3bJDqYWfFin1gppFPA6DSM","refreshToken":"APyOXy26AZKMlsNI2xHnYJDyCJxON1pE6q-8k6Y_18OVcb3CgbhZd7kHcZiIui7CRspiBVsDs_Cyl4BmWnqNoHtUpZhIeAGSPbpK-TCUcF6QvZDzdjHSMMihd8RJ2ZViAlXDbbSRhZ1prWZE5Bckk6kVxQ4THnQRBwUvfxny_LLUe4qHQmcDzCV9mlet71oCQVHWSIjXgcYXv3keTa2OJNUaC9EEaIVW6Q","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImMwNmEyMTQ5YjdmOTU3MjgwNTJhOTg1YWRlY2JmNWRlMDQ3Y2RhNmYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZXZlcnlkYXktZTNkY2QiLCJhdWQiOiJldmVyeWRheS1lM2RjZCIsImF1dGhfdGltZSI6MTUyMzM0NTA0MiwidXNlcl9pZCI6IlEyNHpxTTJ6SUNRWWRxQ0k4YzVNWFBKYjdXRzIiLCJzdWIiOiJRMjR6cU0yeklDUVlkcUNJOGM1TVhQSmI3V0cyIiwiaWF0IjoxNTIzMzQ1MDQyLCJleHAiOjE1MjMzNDg2NDIsImVtYWlsIjoiZXZlcnlkYXlAdXNhYmxlaHEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImV2ZXJ5ZGF5QHVzYWJsZWhxLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OQXNXMB4Bq-vCeo1-9Mdg8MC2bQlVYFVnE_HMz9AK6XOspBQkY2-TaEckZy-qp7wUFvvbR71FVrp3jY7yeZbPPOaF-SP4467cmlJAHf8eFjoKgpYZ-ZPxYfQB92PnR0iZCXO5oclbspj4TzrWUG4b93uxjhrWdiffmMoV_x-g2e5uJ8mi0UbFLf_Bgf1nC63UdATiMXW7ykU5lZV9bXAYgDx-cWHV2hpy7fbJnBP4oaiFlOOa9ufYAvU1BVKzxLMCLkH7olzfvVKhs4fHh-GIRHC004x3pG6179H6c5xoRp80w3zZwrEDzreIQN2M8Nb_5YHFFUSd5UAlsKE6Pd7ow","expirationTime":1523348642133},"redirectEventId":null,"lastLoginAt":"1523345042000","createdAt":"1522828732000"};

export default class User extends Component {
  render(){

    let match = this.props.match;
    let username = u.displayName || "";
    let email = u.email;
    let emailVerified = u.emailVerified;

    let emailVerifiedWarning = null;

    if (email && !emailVerified) {
      emailVerifiedWarning = <div style={{ padding: '30px 10vw', backgroundColor: '#ffdddd' }}>You have created your chart by email but you haven't verified yet.</div>
    }
  
    return (
        <div className={"user"}>
          <Welcome name={match.params.user} />
          {emailVerifiedWarning}
          <Switch>
            <Route exact path={match.url}><Calendar days={[]} /></Route>
            <Route path={match.url+'/add'}><p>New Chart</p></Route>
            <Route path={match.url+'/preferences'}><p>Preferences</p></Route>
          </Switch>
        </div>
    );
  }
}
