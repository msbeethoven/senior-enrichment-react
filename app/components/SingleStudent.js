import React, {Component} from 'react';
import axios from 'axios';


export default class SingleStudent extends Component {
  constructor(props){
    super(props);
    console.log("PROPS",props)
    this.state = {
      student: {
        campus: {}
      }
    }
  }

  componentDidMount(){
    this.getStudent()
  }

  async getStudent(){
    console.log('fetching a student')

    try {
      const studentId = this.props.match.params.id;
      console.log("STUDENTID", studentId)
      const {data} = await axios.get(`/api/students/${studentId}`)
      console.log("DATASTUDENTSINGLE", {data})
      this.setState({student: data})
    } catch (err){
      console.error(err)
      console.log("404 no sign of intelligent life")

    }
  }

  render(){
    //console.log("WhatIsThis", this.state.student) //the info
    //console.log("PARSEDINFORMATION", this.state.student.lastName)
    console.log("ACCESS Student img", this.state.student.image)

    //console.log("ACCESS CAMPUS NAME", this.state.student.campus.name) //undefined even though i see the name
    return (
    <div>
      <center>
        <h1>{this.state.student.lastName}</h1>
        <h2>{this.state.student.email}</h2>
        <h3>{this.state.student.gpa}</h3>
        {this.state.student.campus ? <h4>On Campus {this.state.student.campus.name}</h4> : <h4>No Campus Yet!</h4> }
        <div className="imagecontainer"><img src={this.state.student.image} /></div>

      </center>
    </div>
    )
  }
}
