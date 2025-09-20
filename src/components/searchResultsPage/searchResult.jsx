// src/components/SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMedicalCenters } from '../../services/api';
import { saveBooking } from '../../services/localStorage';

function SearchResultsPage() {
  const [centers, setCenters] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const state = query.get('state');
  const city = query.get('city');

  useEffect(() => {
    const fetchCenters = async () => {
      const data = await getMedicalCenters(state, city);
      setCenters(data.medicalCenters);
    };
    if (state && city) {
      fetchCenters();
    }
  }, [state, city]);

  const handleBookAppointment = (center) => {
    const newBooking = {
      hospitalName: center['Hospital Name'],
      address: center.Address,
      city: center.City,
      date: '...', // Logic for selected date
      time: '...', // Logic for selected time
    };
    saveBooking(newBooking);
    alert('Appointment booked successfully!');
  };

  return (
    <div className="search-results-page">
      {centers.length > 0 ? (
        <React.Fragment>
          <h1>{centers.length} medical centers available in {city}</h1>
          <div className="centers-list">
            {centers.map((center, index) => (
              <div key={index} className="center-card">
                <h3>{center['Hospital Name']}</h3>
                <p>Address: {center.Address}, {center.City}, {center.State}, {center['ZIP Code']}</p>
                <p>Overall Rating: {center['Overall Rating']}</p>
                {/* Calendar and time slot selection logic goes here */}
                <button onClick={() => handleBookAppointment(center)}>Book FREE Center Visit</button>
              </div>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <p>No medical centers found for {city}, {state}.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;