// src/App.js

import React from 'react'
import ChatBot from './components/ChatBot'
import CreateAppointment from './components/CreateAppointment'
import AppointmentList from './components/AppointmentList'

function App () {
  return (
    <div className='App'>
      <h1>IT Terminbuchung</h1>
      <CreateAppointment />
      <AppointmentList />
      <ChatBot /> {/* Chatbot wird hier eingebunden */}
    </div>
  )
}

export default App
