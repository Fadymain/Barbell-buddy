const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    
    db.query(`SELECT * FROM users`)
      .then(data => {
        const allUsers = data.rows;
        console.log("users", allUsers);
        res.json({allusers: allUsers });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const userID = req.params.id
    db.query(`SELECT * FROM users WHERE users.id = $1`,[userID])
      .then(data => {
        const currentUser = data.rows;
        console.log("currentUsers: ", currentUser);
        res.json({currentUser: currentUser });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/add", (req, res) => {
    const {name, email, password} = req.body

    db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`, [name, email, password])
      .then(data => {
        const regUser = data.rows;
        console.log("created new user", regUser);
        res.status(204).json({});
      });


  });
  return router;
};