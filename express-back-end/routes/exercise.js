const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    
    db.query(`SELECT * FROM exercises`)
      .then(data => {
        const allExercises = data.rows;
        console.log("all Exercsies", allExercises);
        res.json({ allExercises: allExercises });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const exerciseID = req.params.id
    db.query(`SELECT * FROM exercises WHERE id = $1`,[exerciseID])
      .then(data => {
        const currentExercise = data.rows;
        console.log("currentExercise: ", currentExercise);
        res.json({ currentExercise: currentExercise });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/add", (req, res) => {
    const {type, description ,reps, weight} = req.body
    if(description) {
      db.query(`INSERT INTO exercises (type, description ,reps, weight) VALUES ($1, $2, $3, $4) RETURNING *;`, [type, description ,reps, weight])
        .then(data => {
          const regExercise = data.rows;
          console.log("created exercise", regExercise);
          res.status(204).json({});
        });
    } else {
      db.query(`INSERT INTO exercises (type, reps, weight) VALUES ($1, $2, $3) RETURNING *;`, [type, reps, weight])
      .then(data => {
        const regExercise = data.rows;
        console.log("created exercise", regExercise);
        res.status(204).json({});
      });
    }

  });

  router.post("/update", (req, res) => {
    const {type, description ,reps, weight} = req.body
    if(description) {
      db.query(`INSERT INTO exercises (type, description ,reps, weight) VALUES ($1, $2, $3, $4) RETURNING *;`, [type, description ,reps, weight])
        .then(data => {
          const regExercise = data.rows;
          console.log("updated exercise", regExercise);
          res.status(204).json({});
        });
    } else {
      db.query(`INSERT INTO exercises (type, reps, weight) VALUES ($1, $2, $3) RETURNING *;`, [type, reps, weight])
      .then(data => {
        const regExercise = data.rows;
        console.log("updated exercise", regExercise);
        res.status(204).json({});
      });
    }

  });
  return router;
};