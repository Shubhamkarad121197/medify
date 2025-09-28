import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Medify</h2>
      <ul>
        <li><Link to="/">Find Doctors</Link></li>
        <li><Link to="/search">Hospitals</Link></li>
        <li><Link to="/src/pages/MyBookings.jsx">My Bookings</Link></li>
      </ul>
    </nav>
  );
}
