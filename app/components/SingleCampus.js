import React, {Component} from 'react';
import axios from 'axios';

export default class SingleCampus extends Component {
  constructor(){

    super();
    this.state = {
      campus: {}
    }
  }
  componentDidMount(){
    this.getCampus()
  }

  async getCampus(){
    console.log('fetching a campus')

    try {
      const campusId = this.props.match.params.id;
      console.log("CAMPUSID", campusId)
      const {data} = await axios.get(`/api/campuses/${campusId}`)
      console.log("DATACAMPUSSINGLE", {data})
      this.setState({campus: data})
    } catch (err){
      console.error(err)
      console.log("404 end of galaxy")

    }
  }

  render(){
    console.log("WhatIsThis", this.state.campus) //the info
    console.log("PARSEDINFORMATION", this.state.campus.name)
    return (
    <div>
      <center>
        <h1>{this.state.campus.name}</h1>
        <h2>{this.state.campus.address}</h2>
        <h3>{this.state.campus.description}</h3>
      </center>
      
    </div>
    )
  }
}
