import LogoImg from '../../assets/logo.png'
import './NavBar.css'
const NavBar=()=>{
    return (
        <>
            <div style={{display:'flex',justifyContent:'space-between',paddingRight:'10px'}}>
                <div className="logoIcon">
                    <img src={LogoImg} alt="logo"  />
                </div>
                <div style={{display:'flex',justifyContent:'space-between',gap:'1em',alignItems:'center'}}>
                    <span className='menuName'>Find Doctors</span>
                    <span className='menuName'>Hospitals</span>
                    <span className='menuName'>Medicines</span>
                    <span className='menuName'>Surgeries</span>
                    <span className='menuName'>Software Providers</span>
                    <span className='menuName'>Facilities</span>
                    <button className='myBookingBtn'>My Bookings</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;