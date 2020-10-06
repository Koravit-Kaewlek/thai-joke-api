const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jokeSchema = new Schema(
  {
    room: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

const JokeModel = mongoose.model('joke', jokeSchema);

module.exports = JokeModel;
