const express = require('express');
const mongoose = require('mongoose');
const appointmentRoutes = require('./routes/appointments'); // Verweis auf Routen

const app = express();
const port = 5000;

// Body-Parser Middleware für JSON
app.use(express.json());

// Routen für Termine
app.use('/api/appointments', appointmentRoutes);

// Verbinde mit der MongoDB-Datenbank
mongoose.connect('mongodb://localhost/appointment-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.log(err));

// Starte den Server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
