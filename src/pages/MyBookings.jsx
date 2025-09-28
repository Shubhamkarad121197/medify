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
      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="booking-card">
            <h3>{b.hospitalName || b["Hospital Name"]}</h3>
            <p>{b.address || b["Address"]}, {b.city || b["City"]}, {b.state || b["State"]} {b.zip || b["ZIP Code"]}</p>
            <p>Rating: {b.rating || b["Hospital overall rating"]}</p>
            <p>Date: {b.date || b.bookingDate}</p>
            <p>Slot: {b.slot || b.bookingTime}</p>
          </div>
        ))
      )}
    </div>
  );
}
