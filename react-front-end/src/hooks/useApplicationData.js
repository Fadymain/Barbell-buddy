import axios from "axios";
import { useState, useEffect } from "react";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: [],
    workouts: {},
    exercises: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/api/users"),
      axios.get("http://localhost:3000/api/wporkouts"),
      axios.get("http://localhost:3000/api/exercise"),
    ]).then((all) => {
      console.log("all:", all.data)
      // setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);
}