import React, {Component} from 'react';
import axios from 'axios';
import SingleCampus from './SingleCampus';
import { Link } from 'react-router-dom';
import NewCampusForm from './NewCampusForm';
import NewStudentForm from './NewStudentForm';


export default class CampusList extends Component {
  constructor(props){
    super(props);
    this.state = {
      campuses: []
    }

    this.addCampus = this.addCampus.bind(this)

  }

  componentDidMount(){
    this.getCampuses()
  }

  async getCampuses(){
    console.log('fetching campuses')
  
  try {
    const {data} = await axios.get('api/campuses')
    console.log("DATACAMPUS", {data})
    this.setState({campuses: data})
  } catch (err){
    console.error(err)
  }
}

addCampus(campus){
  this.setState({
    campuses: [...this.state.campuses, campus]
  })
}

//delete 
async removeCampus(id){
  try {
    if (this.state.campuses.length){
      alert('Are you sure you want to obliterate a planet with students on it?')
    }
    await axios.delete(`api/campuses/${id}`)
    this.setState({
      campuses: this.state.campuses.filter(campus => campus.id !== id)
    })
  }
  catch (err){
    console.log(err)
  }
}

  //showing on screen, links, images, and deletions
  render(){
    //console.log("CHECKITOUT", this.state.campuses)
    const myCampuses = this.state.campuses
    return (
    <div>
      <center><h1>Campuses</h1></center>
      <form>{<NewCampusForm addCampus= {this.addCampus} />}</form>
      <table>
      <tbody>
        {
            this.state.campuses
            .map(campus =>
                (
                    <tr key={campus.id}>
                      
                        <Link to={`campuses/${campus.id}`}>
                        <td>{campus.name}</td>
                        <div className="imagecontainer"><img src={campus.image} /></div>
                        </Link>

                        <button type="button" onClick= {() => this.removeCampus(campus.id)}>x</button>
                      
                    </tr>
                )
            )
        }
      </tbody>
      </table>
      {/* <NewStudentForm myCampuses={myCampuses} />  */}
      {console.log("CHECKITOUT", this.state.campuses)}
    </div>
    )
  }
}
