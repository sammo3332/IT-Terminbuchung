const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Termin erstellen
router.post('/create', async (req, res) => {
  try {
    const { name, email, date } = req.body;
    const newAppointment = new Appointment({ name, email, date });
    await newAppointment.save();
    res.status(201).json({ message: 'Termin erstellt', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Erstellen des Termins', error });
  }
});

// Alle Termine anzeigen
router.get('/all', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Termine', error });
  }
});

// Termin stornieren
router.put('/cancel/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status: 'cancelled' });
    res.status(200).json({ message: 'Termin storniert', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Stornieren des Termins', error });
  }
});

module.exports = router;
