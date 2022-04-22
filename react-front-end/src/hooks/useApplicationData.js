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

  return {state}
}