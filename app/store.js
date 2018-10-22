// import {createStore, applyMiddleware} from 'redux'
// import axios from 'axios'
// import rootReducer from './reducers'
// import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk



// //Actions
// export const SET_STUDENTS = 'SET_STUDENTS'
// export const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT'
// export const SET_CAMPUSES = 'SET_CAMPUSES'
// export const ADD_STUDENT = 'ADD_STUDENT'
// export const ADD_CAMPUS = 'ADD_CAMPUS'

// //Action Creators
// const setStudents = students => ({
//   type: SET_STUDENTS,
//   students
// })

// export const setSelectedStudent = student => ({
//   type: SET_SELECTED_STUDENT,
//   student
// })

// const setCampuses = campuses => ({
//   type: SET_CAMPUSES,
//   campuses
// })



// //Thunks
// //for fetching the students and campuses from db
// // export const fetchStudents = () => async dispatch => {
// //   try {
// //     const { data } = await axios.get('/student')
// //     dispatch(setStudents(data));
// //   } catch (err) {
// //     console.error(err);
// //   }
// // }

// export const fetchStudents = () => {
//   return async (dispatch) => {
//     const response = await axios.get('/student')
//     const messages = response.data;
//     const ourAction = setStudents(messages)
//     dispatch(ourAction)
//   }
// }


// //Initial State 
// //students is holding all the students in an array 
// //selectStudent is the json object of localhost:1337/students/{:id}
// //campuses is holding all the campuses in an array
// const initialState = {
//   students: [],
//   selectedStudent: {},
//   campuses: []
// }

// // Reducer 

// const reducer = (state = initialState, action) => {
//   console.log("ogACTION", action)
//   console.log("actionType", action.type)
//   switch (action.type){
//     case SET_STUDENTS:
//       return {...state, students: action.students};
//     default:
//       return state;
//   }
// }

// export default createStore(
//   rootReducer,
//   reducer,
//   applyMiddleware(
//     // `withExtraArgument` gives us access to axios in our async action creators!
//     // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
//     thunkMiddleware.withExtraArgument({axios}),
//     loggingMiddleware
//   )
// )
