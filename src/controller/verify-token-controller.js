var jwt = require('jsonwebtoken');
exports.verifyToken = async (req, res) => {
  try {
    if (!req.headers['authorization']) {
      res.json({
        isSuccess: false,
        message: 'you are not login.',
      });
      return;
    }
    const token = req.headers.authorization.split(' ')[1];
    await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, token) => {
      if (err) {
        res.json({
          isSuccess: false,
          message: 'token inValid',
        });
      }
    });
  } catch (err) {
    throw err;
  }
};
