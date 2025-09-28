import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
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
    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <form onSubmit={handleSubmit}>
  <div id="state">
    <select onChange={(e) => setSelectedState(e.target.value)} required>
      <option value="">Select State</option>
      {states.map((s, i) => (
        <option key={i} value={s}>{s}</option>
      ))}
    </select>
  </div>

  <div id="city">
    <select onChange={(e) => setSelectedCity(e.target.value)} required>
      <option value="">Select City</option>
      {cities.map((c, i) => (
        <option key={i} value={c}>{c}</option>
      ))}
    </select>
  </div>

  <button id="searchBtn" type="submit">Search</button>
</form>

  );
}
