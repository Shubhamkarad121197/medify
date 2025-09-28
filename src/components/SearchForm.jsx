import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [openState, setOpenState] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then(res => res.json())
      .then(data => setStates(data));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then(res => res.json())
        .then(data => setCities(data));
    }
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate(`/search?state=${selectedState}&city=${selectedCity}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* State Dropdown */}
      <div id="state" onClick={() => setOpenState(!openState)}>
        <span>{selectedState || "Select State"}</span>
        {openState && (
          <ul>
            {states.map((s, i) => (
              <li key={i} onClick={() => { setSelectedState(s); setOpenState(false); }}>
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* City Dropdown */}
      <div id="city" onClick={() => setOpenCity(!openCity)}>
        <span>{selectedCity || "Select City"}</span>
        {openCity && (
          <ul>
            {cities.map((c, i) => (
              <li key={i} onClick={() => { setSelectedCity(c); setOpenCity(false); }}>
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button id="searchBtn" type="submit">Search</button>
    </form>
  );
}
