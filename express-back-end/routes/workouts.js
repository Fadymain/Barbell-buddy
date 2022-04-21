const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    
    db.query(`SELECT * FROM workouts`)
      .then(data => {
        const allWorkouts = data.rows;
        console.log("all workouts", allWorkouts);
        res.json({ allWorkouts: allExercises });
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
        res.json({ currentWorkout: currentExercise });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/add", (req, res) => {
    const {user_id, day_at, exercise_id} = req.body
     if (day_at){
      db.query(`INSERT INTO workouts (user_id, day_at, exercise_id) VALUES ($1, $2, $3) RETURNING *;`, [user_id, day_at, exercise_id])
        .then(data => {
          const regWorkout = data.rows;
          console.log("created workout", regWorkout);
          res.status(204).json({});
        });
     } else {
      db.query(`INSERT INTO workouts (user_id, exercise_id) VALUES ($1, $2) RETURNING *;`, [user_id, exercise_id])
      .then(data => {
        const regWorkout = data.rows;
        console.log("created workout", regWorkout);
        res.status(204).json({});
      });
     }
    

  });

  router.post("/update", (req, res) => {
    const {user_id, day_at, exercise_id} = req.body
     if (day_at){
      db.query(`UPDATE workouts SET exercise_id = $1 WHERE user_id = $2 AND day_at = $3`, [exercise_id,user_id, day_at])
        .then(data => {
          const regWorkout = data.rows;
          console.log("updated workout", regWorkout);
          res.status(204).json({});
        });
     }

  });
  return router;
};