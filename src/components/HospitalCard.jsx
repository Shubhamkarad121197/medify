export default function HospitalCard({ hospital }) {
  const { Hospital_Name, Address, City, State, ZIP_Code, Hospital_overall_rating } = hospital;

  const handleBooking = () => {
    const booking = {
      hospitalName: Hospital_Name,
      address: Address,
      city: City,
      state: State,
      zip: ZIP_Code,
      rating: Hospital_overall_rating,
      date: new Date().toLocaleDateString(),
    };

    let existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
    alert("Booking Confirmed!");
  };

  return (
    <div className="hospital-card">
      <h3>{Hospital_Name}</h3>
      <p>{Address}, {City}, {State} {ZIP_Code}</p>
      <p>Rating: {Hospital_overall_rating}</p>
      <button onClick={handleBooking}>Book FREE Center Visit</button>
    </div>
  );
}
