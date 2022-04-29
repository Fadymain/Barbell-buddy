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
        exercises: all[2].data.allExercises
      }))
    })
  }, []);

  const addUser = function(name, email, password) {
    
   return axios.post(`http://localhost:8080/api/users/add`,{name, email, password})
   .then((data) => {
     const newUserID = data.data.regUser.id;
     const newUser = {
       id: newUserID,
       name: name,
       email: email,
       password: password,
       created_at: data.data.regUser.created_at,
       active_user: data.data.regUser.active_user
     }
     const users = {
      ...state.users,
      [newUserID]: newUser
     }
     setState(({
      ...state,
      users
    }));

   })
  }

  const addExercise = function(type, description = 'description') {
    
    return axios.post(`http://localhost:8080/api/exercise/add`,{type, description})
    .then((data) => {
      console.log("added exercise",data.data.exercise);
      
      const newExerciseID = data.data.exercise.id;
      const newExercise = {
        id:newExerciseID,
        type: type, 
        description: description,
        active_exercise: true
      }
      const exercises = {
        ...state.exercises,
        [newExerciseID]: newExercise
      }
      console.log("newExercise",newExercise);
      console.log("states", state.exercises);
      
      setState(({
        ...state,
        exercises
      }));
      
    })
   }
  
  const addDateWorkout = function(user_id, day_at, exercise_id, reps, weight) {
    
    return axios.post(`http://localhost:8080/api/workouts/add`,{user_id, day_at, exercise_id, reps, weight})
    .then((data) => {
      const newWorkoutId = data.data.regWorkout.id;
      const newWorkout = {
        id: newWorkoutId,
        user_id: user_id, 
        day_at: data.data.regWorkout.day_at, 
        exercise_id: exercise_id,
        reps: reps,
        weight: weight
      }
      const workouts = {
        ...state.workouts,
        [newWorkoutId]: newWorkout
      }

      setState(({
        ...state,
        workouts
      }));

    })
   }
  const addWorkout = function(user_id, exercise_id, reps, weight) {
    
    return axios.post(`http://localhost:8080/api/workouts/add`,{user_id, exercise_id, reps, weight})
    .then((data) => {
      const newWorkoutId = data.data.regWorkout.id;
      const newWorkout = {
        id: newWorkoutId,
        user_id: user_id, 
        day_at: data.data.regWorkout.day_at, 
        exercise_id: exercise_id,
        reps: reps,
        weight: weight
      }
      const workouts = {
        ...state.workouts,
        [newWorkoutId]: newWorkout
      }

      setState(({
        ...state,
        workouts
      }));
    })
   }
   
   

  return {state,addUser,addExercise,addWorkout,addDateWorkout}
}