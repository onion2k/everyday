import React, { Component } from 'react';
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
