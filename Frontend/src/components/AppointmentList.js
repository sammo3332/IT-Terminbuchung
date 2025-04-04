// src/components/AppointmentList.js

import React, { useEffect, useState } from 'react';
import { getAppointments, cancelAppointment } from '../api'; // Importiere die API-Funktionen

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsData = await getAppointments();
        setAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    try {
      await cancelAppointment(id);
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
    } catch (error) {
      console.error('Error canceling appointment:', error);
    }
  };

  return (
    <div>
      <h2>Terminübersicht</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.name} ({appointment.date})
            <button onClick={() => handleCancel(appointment._id)}>Stornieren</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
