const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jokeSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
    },
    dislike: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const JokeModel = mongoose.model('joke', jokeSchema);

module.exports = JokeModel;
