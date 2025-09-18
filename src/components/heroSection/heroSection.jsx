import "./heroSection.css";
import DoctorImage from "../../assets/home.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import DoctorVector from "../../assets/Doctor.png";
import LabVector from "../../assets/labs_Vector.png";
import AmbulanceVector from "../../assets/Ambulance_vector.png";
import HospitalVector from "../../assets/Hospital_vector.png";
import MedicineVector from "../../assets/medicine_Vector.png";
import SwiperCarausel from "../carauselSlide";
import SpecialisationComponent from "../specialization/specialization";
import MedicalSpecialist from "../medicalSpecialist/medicalSpecialist";



const HeroSection = () => {
  return (
    <div>
      <div className="heroSectionContainer">
      <div className="homeLeftSection">
        <span className="heroSectionTitle">
          <span className="skipTheTravel">Skip the travel! Find Online</span>
          <div>
            <span className="medicalSpan">Medical</span>&nbsp;&nbsp;
            <span className="centerSpan">Centers</span>
          </div>
        </span>
        <span>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </span>
        <div>
          {/* Open Modal on Click */}
          <button
            className="findCentersBtn"
          
          >
            Find Centers
          </button>
        </div>
      </div>
      <div>
        <img src={DoctorImage} alt="doctor" />
      </div>
    </div>
    <div className="serviceCard">
      <div className="searchFeildContainer">
            <TextField
              label="State"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="city"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <button className="searchButton">
              <IconButton>
                <SearchIcon style={{ color: "#fff" }} />
              </IconButton>
              Search
            </button>
          </div>
          <div style={{textAlign:'center'}}>
            <span >You may looking for</span>
            <div style={{display:'flex',justifyContent:'center',gap:'2em'}}>
              <div className='cardService'>
                <img src={DoctorVector} alt="doctor" height={50} width={50}/>
                <span>Doctor</span>
              </div>
              <div className='cardService'>
                  <img src={LabVector} alt="lab" height={50} width={50}/>
                  <span>Labs</span>
              </div>
              <div className='cardService'>
                  <img src={HospitalVector} alt="hospital" height={50} width={50} />
                  <span>Hospital</span>
              </div>
              <div className='cardService'>
                  <img src={MedicineVector} alt="medicine" height={50} width={50}/>
                  <span>Medicine</span>
              </div>
               <div className='cardService'>
                  <img src={AmbulanceVector} alt="ambulance" height={50} width={50} />
                  <span>Ambulance</span>
              </div>

            </div>
          </div>
    </div>
    <div style={{marginTop:'17em',backgroundColor:'#FFF',padding:'2em',width:'98.5vw',height:'430px',boxSizing:'border-box',marginLeft:'-4.15em',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <SwiperCarausel/>
    </div>
    <div>
      <SpecialisationComponent/>
    </div>
    <div>
      <MedicalSpecialist/>
    </div>
  
    </div>
    
    
  );
};

export default HeroSection;
