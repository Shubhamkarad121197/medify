// src/components/MyBookingsPage.js
import React, { useState, useEffect } from 'react';
import { getBookings } from '../../services/localStorage';

function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = getBookings();
    setBookings(savedBookings);
  }, []);

  return (
    <div className="my-bookings-page">
      <h1>My Bookings</h1>
      {bookings.length > 0 ? (
        <div className="bookings-list">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <h3>{booking.hospitalName}</h3>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no current bookings.</p>
      )}
    </div>
  );
}

export default MyBookingsPage;