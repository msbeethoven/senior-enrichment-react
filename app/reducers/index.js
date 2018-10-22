// // `combineReducers` is not currently being used...but it should!
// // When you're ready to use it, un-comment the line below!

// // import {combineReducers} from 'redux'

const initialState = {
  campuses: []
}

//action types 
const SET_CAMPUSES = 'SET_CAMPUSES'

//action creator 

const campusSet = (campuses) => {

  return {
    type: SET_CAMPUSES,
    campuses
  }
}

//thunk creator 

const fetchCampuses = () => {

  return async function(dispatch){
    try {
      const {data} = await axios.get('api/campuses')
      console.log("DATACAMPUS", {data})
      dispatch(campusSet(data))
    } catch (err){
      console.error(err)
    }
    
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer


// //student and campus reducers 
// import {combineReducers} from 'redux';
// //import campusReducer from './CampusReducer';
// //import studentReducer from './StudentsReducer';

// export default combineReducers({
//    campus: campusReducer,
//    student: studentReducer
// })
