import React, { Component } from 'react';
import axios from 'axios';

export default class NewCampusForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //updating the state
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("what",[event.target.name])
  }

  //resetting the state so the form clears out
  async handleSubmit(event){
    event.preventDefault()
    try {
      const res = await axios.post('/api/campuses', this.state);
      console.log('RES.DATA', res.data)
      this.props.addCampus(res.data)
      this.setState({
        name: '',
        address: '',
        description: ''
      }); 
    }
    catch (err) {
      console.log(err)
    }
  }
  //what is showing on screen
  render(){
    const {name, address, description} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name of Campus:
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
          />
        </label>

        <label>
          Address:
          <input
            onChange={this.handleChange}
            type="text"
            name="address"
            value={address}
          />
        </label>

        <label>
          Description:
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={description}
          />
        </label>

        <button type="submit" >Add New Campus</button>
      </form>
    )
  }
}
