const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const helpers = require('../db/helpers/');

const SALT_ROUNDS = 8;

function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRET || 'secret', {
    expiresIn: '3h',
  });
}

//Registers a new user
router.post('/register', function(req, res) {
  let { username, first_name, last_name, password, email } = req.body;
  if (!username || !first_name || !last_name || !password || !email) {
    return res.json({
      error: true,
      message: 'Please provide valid registration information',
    });
  }
  password = bcrypt.hashSync(password, SALT_ROUNDS);

  helpers
    .addUser({ username, first_name, last_name, password, email })
    .then(user => {
      let token = generateToken({ user: { username, id: user.id } });

      return res.json({
        error: false,
        message: user,
        token,
      });
    })
    .catch(err =>
      res.json({
        error: true,
        message: err,
      }),
    );
});

//Logs in an existing user
router.post('/login', function(req, res) {
  let { username, password } = req.body;

  if (!username || !password)
    return res.json({
      error: true,
      message: 'Please provide a Username and Password',
    });

  helpers
    .login(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        let token = generateToken({ user });

        res.json({
          user,
          token,
        });
      } else {
        return res.json({
          error: true,
          message: 'Invalid Login Info',
        });
      }
    })
    .catch(err =>
      res.json({
        error: true,
        message: err,
      }),
    );
});

module.exports = router;
