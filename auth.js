import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPwd, role });
  await newUser.save();
  const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: newUser._id, name, role } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
});

export default router;
