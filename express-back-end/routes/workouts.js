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
    const {user_id, day_at, exercise_id, reps, weight} = req.body
     if (day_at){
      db.query(`INSERT INTO workouts (user_id, day_at, exercise_id, reps, weight) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [user_id, day_at, exercise_id, reps, weight])
        .then(data => {
          const regWorkout = data.rows;
          console.log("created workout", regWorkout);
          res.status(204).json({});
        });
     } else {
      db.query(`INSERT INTO workouts (user_id, exercise_id, reps, weight) VALUES ($1, $2, $3, $4) RETURNING *;`, [user_id, exercise_id, reps, weight])
      .then(data => {
        const regWorkout = data.rows;
        console.log("created workout", regWorkout);
        res.status(204).json({});
      });
     }
    

  });

  router.post("/update", (req, res) => {
    const {user_id, day_at, exercise_id, reps, weight} = req.body
     if (day_at){
      db.query(`UPDATE workouts SET exercise_id = $1, reps = $2, weight = $3 WHERE user_id = $4 AND day_at = $5`, [exercise_id, reps, weight,user_id, day_at])
        .then(data => {
          const regWorkout = data.rows;
          console.log("updated workout", regWorkout);
          res.status(204).json({});
        });
     }

  });
  return router;
};