import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard";

export default function SearchResults() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const state = params.get("state");
  const city = params.get("city");

  const [centers, setCenters] = useState([]);

  useEffect(() => {
    fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
      .then(res => res.json())
      .then(data => setCenters(data));
  }, [state, city]);

  return (
    <div>
      <h1>
  {centers.length} medical centers available in {city.toUpperCase()}
</h1>

      {centers.map((c, i) => (
        <HospitalCard key={i} hospital={c} />
      ))}
    </div>
  );
}
