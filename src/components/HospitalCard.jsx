import { useState } from "react";

export default function HospitalCard({ hospital }) {
  const { Hospital_Name, Address, City, State, ZIP_Code, Hospital_overall_rating } = hospital;
  const [showBooking, setShowBooking] = useState(false);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const saveBooking = () => {
    const booking = {
      hospitalName: Hospital_Name,
      address: Address,
      city: City,
      state: State,
      zip: ZIP_Code,
      rating: Hospital_overall_rating,
      date,
      slot
    };

    let existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
    alert("Booking Confirmed!");
    setShowBooking(false);
  };

  return (
    <div className="hospital-card">
      <h3 onClick={() => setShowBooking(!showBooking)}>{Hospital_Name}</h3>
      <p>{Address}, {City}, {State} {ZIP_Code}</p>
      <p>Rating: {Hospital_overall_rating}</p>

      {showBooking && (
        <div className="booking-section">
          <label>Select Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <p>Today</p>
          <div className="slots">
            {["Morning", "Afternoon", "Evening"].map((s) => (
              <button key={s} onClick={() => setSlot(s)}>{s}</button>
            ))}
          </div>

          <button onClick={saveBooking}>Book FREE Center Visit</button>
        </div>
      )}
    </div>
  );
}
