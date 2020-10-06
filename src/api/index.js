const express = require('express');
const userApi = require('./user-api');
const {
  getAllJokes,
  getJokeById,
  addNewJoke,
  deleteJoke,
  likeJoke,
  dislikeJoke,
} = require('../controller/joke-controller');

const router = express.Router();

router.get('/', getAllJokes);
router.get('/:id', getJokeById);
router.post('/', addNewJoke);
router.delete('/:id', deleteJoke);
router.post('/:id/like', likeJoke);
router.post('/:id/dislike', dislikeJoke);

router.use('/user', userApi);
module.exports = router;
