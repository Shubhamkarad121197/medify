import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? <p>No bookings yet</p> : (
        bookings.map((b, i) => (
          <div key={i} className="booking-card">
            <h3>{b.hospitalName}</h3>
            <p>{b.address}, {b.city}, {b.state} {b.zip}</p>
            <p>Rating: {b.rating}</p>
            <p>Date: {b.date}</p>
            <p>Slot: {b.slot}</p>
          </div>
        ))
      )}
    </div>
  );
}
