import axios from "axios";
import { useState, useEffect } from "react";


export default function useApplicationData() {
  const [state, setState] = useState({
    users: {},
    workouts: {},
    exercises: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/api/users"),
      axios.get("http://localhost:8080/api/workouts"),
      axios.get("http://localhost:8080/api/exercise")
    ]).then((all) => {
      console.log("all:", all)
      setState(prev => ({
        ...prev,
        users: all[0].data.allusers,
        workouts: all[1].data.allWorkouts,
        exercise: all[2].data.allExercises
      }))
    })
  }, []);

  const addUser = function(name, email, password) {
    
   return axios.post(`http://localhost:8080/api/users/add`,{name, email, password})
   .then(() => {

   })
  }

  const addExercise = function(type, description = 'description') {
    
    return axios.post(`http://localhost:8080/api/exercise/add`,{type, description})
    .then(() => {
 
    })
   }
  
  const addDateWorkout = function(user_id, day_at, exercise_id, reps, weight) {
    
    return axios.post(`http://localhost:8080/api/workouts/add`,{user_id, day_at, exercise_id, reps, weight})
    .then(() => {
 
    })
   }
  const addWorkout = function(user_id, exercise_id, reps, weight) {
    
    return axios.post(`http://localhost:8080/api/workouts/add`,{user_id, exercise_id, reps, weight})
    .then(() => {
 
    })
   }
   
   

  return {state}
}