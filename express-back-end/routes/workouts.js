const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    
    db.query(`SELECT * FROM workouts`)
      .then(data => {
        const allWorkouts = data.rows;
        console.log("all workouts", allWorkouts);
        res.json({ allWorkouts: allWorkouts });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const workoutID = req.params.id
    db.query(`SELECT * FROM workouts WHERE id = $1`,[workoutID])
      .then(data => {
        const currentWorkout = data.rows;
        console.log("currentWorkout: ", currentWorkout);
        res.json({ currentWorkout: currentWorkout });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/add", (req, res) => {
    const {users_id, day_at, exercises_id, reps, weight} = req.body
    console.log("add workout route", req.body);
    
     if (day_at){
      db.query(`INSERT INTO workouts (users_id, day_at, exercises_id, reps, weight) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [users_id, day_at, exercises_id, Number(reps), Number(weight)])
        .then(data => {
          const regWorkout = data.rows[0];
          console.log("created workout", regWorkout);
          res.status(200).json({regWorkout: regWorkout});
        }).catch((err) =>{
          console.log("exercises_id", exercises_id);
          console.log("workoutAdd error", err.message);
        })
     } else {
      db.query(`INSERT INTO workouts (users_id, exercises_id, reps, weight) VALUES ($1, $2, $3, $4) RETURNING *;`, [users_id, exercises_id, Number(reps), Number(weight)])
      .then(data => {
        const regWorkout = data.rows[0];
        console.log("created workout", regWorkout);
        res.status(200).json({regWorkout: regWorkout});
      }).catch((err) =>{
        console.log("workoutAdd error", err.message);
      })
     }
    

  });

  router.post("/update", (req, res) => {
    const {users_id, day_at, exercises_id, reps, weight} = req.body
     if (day_at){
      db.query(`UPDATE workouts SET exercises_id = $1, reps = $2, weight = $3 WHERE users_id = $4 AND day_at = $5`, [exercises_id, reps, weight,users_id, day_at])
        .then(data => {
          const regWorkout = data.rows;
          console.log("updated workout", regWorkout);
          res.status(204).json({});
        });
     }

  });
  return router;
};