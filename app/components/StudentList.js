import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SingleStudent from './SingleStudent';
import NewStudentForm from './NewStudentForm';

export default class StudentList extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: []
    }
    
    this.addStudent = this.addStudent.bind(this)

  }
  componentDidMount(){
    this.getStudents()
  }

  async getStudents(){
    console.log('fetching students')
  
  try {
    const {data} = await axios.get('api/students')
    console.log("DATASTUDENTS", {data})
    this.setState({students: data})
  } catch (err){
    console.error(err)
  }
}

addStudent(student){

  this.setState({
    students: [...this.state.students, student]
  });

}

//delete 
async removeStudent(id){
  try {
    // if (this.state.students.length){
    //   alert(`Goodbye ${this.state.student.firstName}`)
    // }
    await axios.delete(`api/students/${id}`)
    this.setState({
      students: this.state.students.filter(student => student.id !== id)
    })
  }
  catch (err){
    console.log(err)
  }
}

  render(){
    console.log("TESTFORCAMPUSID", this.state.students)
    return (  
    <div>
      <center><h1>All Students</h1></center>
      <form>{<NewStudentForm addStudent= {this.addStudent} planetId={this.state.students} />}</form>
      <main>
      <table>
      <tbody> 
      {console.log("STUDENTS2", this.state.students)}
        {
          
            this.state.students
            .map(student =>
                (
                    <tr key={student.id}>

                        <td>
                          
                            <Link to={`students/${student.id}`}>
                            {student.firstName + ' ' + student.lastName}
                            </Link>
      
                            <button type="button" onClick= {() => this.removeStudent(student.id)}>x</button> 
                        </td>
                    </tr>
                )
            )
        }
      </tbody>
      </table>
      </main>
    </div>
    )
  }
}



//Dumb Component
// const StudentList = (props) => {
//     console.log("p", props)
//     return (
//         <tbody>
//         {
//             props.students
//             .map(student =>
//                 (
//                     <tr key={student.id}>
//                         <td>
//                             {student.firstName && student.lastName}
//                         </td>
//                         <td>
//                             {student.campus.name}
//                         </td>
//                     </tr>
//                 )
//             )
//         }
//         </tbody>
//     )
// }

// export default StudentList
