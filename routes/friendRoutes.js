const express = require('express');
const router = express.Router();
const helpers = require('../db/helpers/index');

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  helpers
    .getUserFriends(req.params.id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  let { friend_id } = req.body;
  helpers
    .addFriend(req.params.id, friend_id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

router.delete('/', (req, res) => {
  let { friend_id } = req.body;
  helpers
    .removeFriend(req.params.id, friend_id)
    .then(response => res.json(response))
    .catch(err => console.log(err));
});

module.exports = router;
