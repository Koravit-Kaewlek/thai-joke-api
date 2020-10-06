const User = require('../model/user-model');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.json({
      isSuccess: true,
      message: 'success',
      result: { username, password: null },
    });
  } catch (err) {
    console.log(err);
    res.json({
      isSuccess: false,
      message: 'server error',
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await User.findOne({ username });
    if (password !== data.password) {
      res.json({
        isSuccess: false,
        message: 'username or password inValid',
      });
    } else {
      res.json({
        isSuccess: true,
        message: 'success',
        result: { username, password: null },
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
