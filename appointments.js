import express from 'express';
import Appointment from '../models/Appointment.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const newApp = new Appointment(req.body);
  await newApp.save();
  res.json({ msg: 'Appointment booked successfully' });
});

router.get('/', async (req, res) => {
  const all = await Appointment.find();
  res.json(all);
});

export default router;
