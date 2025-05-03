import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample data for services and doctors
const services = [
  { id: 1, name: 'General Consultation', description: 'Basic health checkups and diagnosis.' },
  { id: 2, name: 'Pediatrics', description: 'Child health care services.' },
  { id: 3, name: 'Surgery', description: 'All major and minor surgeries.' },
  { id: 4, name: 'Emergency Care', description: '24/7 emergency services.' },
];

const doctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrician' },
  { id: 3, name: 'Dr. Alice Williams', specialty: 'Surgeon' },
  { id: 4, name: 'Dr. Bob Johnson', specialty: 'General Physician' },
];

// Routes
app.post('/api/appointments', (req, res) => {
  const appointment = req.body;
  console.log(appointment);
  res.json({ message: 'Appointment received' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact Message from ${name} - ${email}: ${message}`);
  res.json({ message: 'Message received!' });
});

// NEW: Get all services
app.get('/api/services', (req, res) => {
  res.json(services);
});

// NEW: Get all doctors
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
