const Joke = require('../model/joke-model');

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
exports.addNewJoke = async (req, res) => {
  try {
    const payload = req.body;
    const joke = new Joke({ like: 0, dislike: 0, ...payload });
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
    const id = req.params.id;
    const data = await Joke.findByIdAndDelete({ _id: id });
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
