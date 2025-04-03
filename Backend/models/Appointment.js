const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'scheduled' }, // Status für den Termin (z.B. 'scheduled', 'cancelled')
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
