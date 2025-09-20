// src/components/SearchResultsPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMedicalCenters } from '../../services/api';


const SearchResultsPage = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [error, setError] = useState(null);
  
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
        // The API response structure has `medicalCenters` key
        setCenters(data.medicalCenters || []);
      } catch (err) {
        setError("Failed to fetch medical centers.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCenters();
  }, [state, city]); // Re-run effect whenever state or city changes

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
              <button className="book-btn">Book FREE Center Visit</button>
            </div>
          ))
        ) : (
          <p>No medical centers found for {city}, {state}.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;