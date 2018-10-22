import React, { Component } from 'react';
import axios from 'axios';
import CampusList from './CampusList';

export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      gpa: 0,
      campus: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event){
    event.preventDefault()
    try {
      const res = await axios.post('/api/students', this.state);
      console.log('RES.DATA', res.data)
      this.props.addStudent(res.data)
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        image: '',
        gpa: 0,
        campus:{}
      }); 
    }
    catch (err) {
      console.log(err)
    }
  }

  render(){
    //console.log("NEWSTUDENTPROPS", this.props) //addStudent //planetId
     //console.log("WHATISPLANETPROPS", this.props.planetId)
    console.log("Onemore", this.props.planetId )
    const {firstName, lastName, email, gpa, campus} = this.state
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            value={firstName}
          />
        </label>

        <label>
          Last Name:
          <input
            onChange={this.handleChange}
            type="text"
            name="lastName"
            
            value={lastName}
          />
        </label>

        <label>
          Email:
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            
            value={email}
          />
        </label>

        <label>
          GPA:
          <input
            onChange={this.handleChange}
            type="text"
            name="gpa"
            
            value={gpa}
          />
        </label>

        {/* <label>
          Campus:
          {this.props.planetId ? this.props.planetId.campusId : null }

          <select>

          <option type="select"
          onChange = {this.handleChange} >{this.props.planetId.map(planet => planet.id)}</option>

          </select>
        </label> */}

        <button type="submit">Submit New Student</button>
      </form>
     
      </div>
    )
  }
}