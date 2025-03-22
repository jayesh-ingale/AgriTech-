
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ResponseHandler = require('../utils/responseHandler');

class AuthController {
  static async signup(req, res) {
    const { email, password, name } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return ResponseHandler.error(res, 'User already exists', 400);
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new User({ email, password: hashedPassword, name });
      await user.save();

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      ResponseHandler.success(res, { token }, 'User registered', 201);
    } catch (error) {
      ResponseHandler.error(res, error.message);
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return ResponseHandler.error(res, 'Invalid credentials', 400);
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return ResponseHandler.error(res, 'Invalid credentials', 400);
      }

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      ResponseHandler.success(res, { token }, 'Login successful');
    } catch (error) {
      ResponseHandler.error(res, error.message);
    }
  }
}

module.exports = AuthController;