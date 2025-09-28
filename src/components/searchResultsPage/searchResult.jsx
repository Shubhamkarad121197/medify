// src/components/SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMedicalCenters } from '../../services/api';

const TIME_SLOTS = [
  { label: "Morning", times: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { label: "Afternoon", times: ["12:00 PM", "01:00 PM", "02:00 PM"] },
  { label: "Evening", times: ["03:00 PM", "04:00 PM", "05:00 PM"] },
];

function getNext7Days() {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({
      label: i === 0 ? "Today" : d.toLocaleDateString('en-US', { weekday: 'long' }),
      value: d.toISOString().split('T')[0],
    });
  }
  return days;
}

const SearchResultsPage = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [bookingCenter, setBookingCenter] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getNext7Days()[0].value);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[0].label);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0].times[0]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const state = query.get('state');
  const city = query.get('city');

  useEffect(() => {
    const fetchCenters = async () => {
      if (!state || !city) {
        setError("State and city parameters are missing.");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const data = await getMedicalCenters(state, city);
        setCenters(data.medicalCenters || []);
      } catch (err) {
        setError("Failed to fetch medical centers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCenters();
  }, [state, city]);

  const handleBookClick = (center) => {
    setBookingCenter(center);
    setSelectedDate(getNext7Days()[0].value);
    setSelectedTimeSlot(TIME_SLOTS[0].label);
    setSelectedTime(TIME_SLOTS[0].times[0]);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const booking = {
      hospitalName: bookingCenter['Hospital Name'],
      address: bookingCenter.Address,
      city: bookingCenter.City,
      state: bookingCenter.State,
      zip: bookingCenter['ZIP Code'],
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      time: selectedTime,
    };
    // Save to localStorage under 'bookings'
    const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
    localStorage.setItem('bookings', JSON.stringify([...existing, booking]));
    setBookingCenter(null);
    alert('Booking confirmed!');
  };

  if (loading) {
    return <div className="loading-message">Loading medical centers...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="search-results-page">
      <h1>{centers.length} medical centers available in {city}</h1>
      <div className="centers-list">
        {centers.length > 0 ? (
          centers.map((center, index) => (
            <div key={index} className="center-card">
              <h3>{center['Hospital Name']}</h3>
              <p>{center.Address}, {center.City}, {center.State}, {center['ZIP Code']}</p>
              <p>Overall Rating: {center['Overall Rating']}</p>
              <button className="book-btn" onClick={() => handleBookClick(center)}>
                Book FREE Center Visit
              </button>
            </div>
          ))
        ) : (
          <p>No medical centers found for {city}, {state}.</p>
        )}
      </div>

      {/* Booking Modal/Section */}
      {bookingCenter && (
        <div className="booking-modal">
          <form onSubmit={handleBookingSubmit}>
            <h3>Book Appointment at {bookingCenter['Hospital Name']}</h3>
            <label>
              Select Date:
              <select
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
              >
                {getNext7Days().map(day => (
                  <option key={day.value} value={day.value}>
                    {day.label} ({day.value})
                  </option>
                ))}
              </select>
            </label>
            <div>
              <p>
                {getNext7Days().find(d => d.value === selectedDate)?.label}
              </p>
              {TIME_SLOTS.map(slot => (
                <div key={slot.label}>
                  <p>{slot.label}</p>
                  {slot.times.map(time => (
                    <label key={time} style={{ marginRight: '10px' }}>
                      <input
                        type="radio"
                        name="time"
                        value={time}
                        checked={selectedTimeSlot === slot.label && selectedTime === time}
                        onChange={() => {
                          setSelectedTimeSlot(slot.label);
                          setSelectedTime(time);
                        }}
                      />
                      {time}
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <button type="submit">Confirm Booking</button>
            <button type="button" onClick={() => setBookingCenter(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;