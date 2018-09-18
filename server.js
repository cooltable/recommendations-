const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const helpers = require('./db/helpers');

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.get('/api/users', function(req, res) {
  helpers
    .getUsers()
    .then(users => {
      return res.json({
        error: false,
        message: users,
      });
    })
    .catch(err => res.status(500).send(err));
});

server.get('/api/users/:id', function(req, res) {
  helpers
    .getUser(req.params.id)
    .then(user => {
      return res.json({
        error: false,
        message: user,
      });
    })
    .catch(err => res.status(500).send(err));
});

server.post('/api/users', function(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      error: true,
      message: 'Please provide a username and/or password',
    });
  } else {
    helpers
      .addUser({ username, password })
      .then(user => {
        return res.json({
          error: false,
          message: user,
        });
      })
      .catch(err =>
        res.json({
          error: true,
          message: err,
        }),
      );
  }
});

server.put('/api/users/:id', function(req, res) {
  const { password } = req.body;
  if (!password) {
    return res.json({
      error: true,
      message: 'Please provide your new password',
    });
  } else {
    helpers
      .updatePassword(req.params.id, password)
      .then(update => {
        return res.json({
          error: false,
          message: update,
        });
      })
      .catch(err =>
        res.json({
          error: true,
          message: err,
        }),
      );
  }
});

server.post('/api/content', function(req, res) {
  const { title, description, type, rating, from_id, to_idARR } = req.body;
  if (!title || !description || !type || !rating || !from_id || !to_idARR) {
    return res.json({
      error: true,
      message: 'Please provide information for all fields',
    });
  } else {
    helpers
      .addContent(req.body)
      .then(content => {
        return res.json({
          error: false,
          message: content,
        });
      })
      .catch(err =>
        res.json({
          error: true,
          message: err,
        }),
      );
  }
});

server.post('/api/content/:id/to', (req, res) => {
  const { to_id } = req.body;
  helpers
    .addRecipients(to_id, req.params.id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

server.delete('/api/content/:id/to', (req, res) => {
  const { to_id } = req.body;
  helpers
    .removeRecipients(to_id, req.params.id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

server.get('/api/content/:id', (req, res) => {
  helpers
    .getContent(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

server.get('/api/friends', (req, res) => {
  helpers
    .getUserFriends(req.query.id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

server.post('/api/friends', (req, res) => {
  let { friend_id } = req.body;
  helpers
    .addFriend(req.query.id, friend_id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

server.delete('/api/friends', (req, res) => {
  let { friend_id } = req.body;
  helpers
    .removeFriend(req.query.id, friend_id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

const port = 8000;
server.listen(port, function() {
  console.log(`\n === Web API Listening on http://localhost:${port}===`);
});
