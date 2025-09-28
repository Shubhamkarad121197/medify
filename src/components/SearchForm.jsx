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
  <ul>
    {states.map((s, i) => (
      <li key={i} onClick={() => setSelectedState(s)}>{s}</li>
    ))}
  </ul>
</div>

<div id="city">
  <ul>
    {cities.map((c, i) => (
      <li key={i} onClick={() => setSelectedCity(c)}>{c}</li>
    ))}
  </ul>
</div>


      <button id="searchBtn" type="submit">Search</button>
    </form>
  );
}
