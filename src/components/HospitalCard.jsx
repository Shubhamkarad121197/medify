import { useState } from "react";

export default function HospitalCard({ hospital }) {
  const { Hospital_Name, Address, City, State, ZIP_Code, Hospital_overall_rating } = hospital;
  const [showBooking, setShowBooking] = useState(false);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const saveBooking = () => {
    const booking = {
      hospitalName: Hospital_Name,
      city: City,
      state: State,
      address: Address,
      zip: ZIP_Code,
      rating: Hospital_overall_rating,
      date,
      slot
    };
    let existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
  };

  return (
    <div className="hospital-card">
      <h3>{Hospital_Name}</h3>
      <p>{Address}, {City}, {State} {ZIP_Code}</p>
      <p>Rating: {Hospital_overall_rating}</p>

      <button onClick={() => setShowBooking(!showBooking)}>
        Book FREE Center Visit
      </button>

      {showBooking && (
        <div className="booking-section">
          <label>Select Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <p>Today</p>
          <p>Morning</p>
          <p>Afternoon</p>
          <p>Evening</p>

          <button onClick={saveBooking}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
}
