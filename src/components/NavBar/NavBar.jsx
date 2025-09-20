
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo.png';
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();

    const handleMyBookingsClick = () => {
        navigate('/my-bookings');
    };

    return (
        <div style={{display:'flex',justifyContent:'space-between',paddingRight:'10px'}}>
            <div className="logoIcon">
                {/* Use Link to navigate to the home page */}
                <Link to="/">
                    <img src={LogoImg} alt="logo" />
                </Link>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',gap:'1em',alignItems:'center'}}>
                <Link to="/find-doctors" className="menuName">Find Doctors</Link>
                <Link to="/hospitals" className="menuName">Hospitals</Link>
                <Link to="/medicines" className="menuName">Medicines</Link>
                <Link to="/surgeries" className="menuName">Surgeries</Link>
                <Link to="/software-providers" className="menuName">Software Providers</Link>
                <Link to="/facilities" className="menuName">Facilities</Link>
                <button className="myBookingBtn" onClick={handleMyBookingsClick}>
                    My Bookings
                </button>
            </div>
        </div>
    );
};

export default NavBar;