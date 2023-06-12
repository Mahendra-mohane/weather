const User = require('../models/user');

exports.getUserPreferences = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId);

    res.json({ preferredCity: user.preferredCity });
  } catch (err) {
    next(err);
  }
};

exports.updateUserPreferences = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { preferredCity } = req.body;

    await User.findByIdAndUpdate(userId, { preferredCity });

    res.json({ message: 'User preferences updated successfully' });
  } catch (err) {
    next(err);
  }
};