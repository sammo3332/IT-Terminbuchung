// src/components/CreateAppointment.js

import React, { useState } from 'react';
import { createAppointment } from '../api'; // Importiere die API-Funktion zum Erstellen von Terminen

const CreateAppointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createAppointment(name, email, date);
      alert('Termin erstellt: ' + data.appointment.name);
    } catch (error) {
      alert('Fehler beim Erstellen des Termins');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Vorname:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>E-Mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Datum:</label>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit">Termin erstellen</button>
    </form>
  );
};

export default CreateAppointment;
