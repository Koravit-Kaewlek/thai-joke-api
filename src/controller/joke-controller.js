const Joke = require('../model/joke-model');
const { verifyToken } = require('./verify-token-controller');
exports.getAllJokes = async (req, res) => {
  try {
    const data = await Joke.find({});
    res.json({
      isSuccess: true,
      message: 'success',
      result: data,
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      message: 'server error',
    });
  }
};
exports.getJokeById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Joke.findOne({ _id: id });
    res.json({
      isSuccess: true,
      message: 'success',
      result: data,
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      message: 'server error',
    });
  }
};
exports.addNewJoke = async (req, res, next) => {
  try {
    verifyToken(req, res);
    const { text } = req.body;
    const joke = new Joke({ like: 0, dislike: 0, text });
    await joke.save();
    res.json({
      isSuccess: true,
      message: 'success',
      result: joke,
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      message: 'server error',
    });
  }
};
exports.deleteJoke = async (req, res) => {
  try {
    verifyToken(req, res);
    const id = req.params.id;
    const data = await Joke.findByIdAndDelete({ _id: id });
    if (data) {
      res.json({
        isSuccess: true,
        message: 'success',
        result: data,
      });
    } else {
      res.json({
        isSuccess: false,
        message: 'not found joke',
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      message: 'server error',
    });
  }
};
exports.likeJoke = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Joke.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $inc: { like: 1 },
      }
    );
    res.json({
      isSuccess: true,
      message: 'success',
      result: data,
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      message: 'server error',
    });
  }
};
exports.dislikeJoke = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Joke.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $inc: { dislike: 1 },
      }
    );
    res.json({
      isSuccess: true,
      message: 'success',
      result: data,
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      message: 'server error',
    });
  }
};
