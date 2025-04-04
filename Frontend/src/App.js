// src/App.js

import React from 'react';
import CreateAppointment from './components/CreateAppointment'; // Deine Komponente zum Erstellen von Terminen
import AppointmentList from './components/AppointmentList';   // Deine Komponente zur Anzeige der Termine

function App() {
  return (
    <div className="App">
      <h1>IT Terminbuchung</h1>
      <CreateAppointment />  {/* Hier kannst du das Formular zum Erstellen von Terminen anzeigen */}
      <AppointmentList />    {/* Hier zeigst du die Liste der Termine */}
    </div>
  );
}

export default App;
