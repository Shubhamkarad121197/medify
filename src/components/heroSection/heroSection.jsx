// src/components/HeroSection.js
import "./heroSection.css";
import React from "react";

import DoctorImage from "../../assets/home.png";
import DoctorVector from "../../assets/Doctor.png";
import LabVector from "../../assets/labs_Vector.png";
import AmbulanceVector from "../../assets/Ambulance_vector.png";
import HospitalVector from "../../assets/Hospital_vector.png";
import MedicineVector from "../../assets/medicine_Vector.png";
import SwiperCarausel from "../carauselSlide";
import SpecialisationComponent from "../specialization/specialization";
import MedicalSpecialist from "../medicalSpecialist/medicalSpecialist";
import ParentCaring from "../patient_caring/patient_caring";
import LatestNews from "../latestNews/latestNews";

import ServiceCard from "../serviceCard/serviceCard";

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
                        <button className="findCentersBtn">
                            Find Centers
                        </button>
                    </div>
                </div>
                <div>
                    <img src={DoctorImage} alt="doctor" />
                </div>
            </div>
            <div >
                <ServiceCard/>
            </div>
            <div style={{ marginTop: '17em', backgroundColor: '#FFF', padding: '2em', width: '98.5vw', height: '430px', boxSizing: 'border-box', marginLeft: '-4.15em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SwiperCarausel />
            </div>
            <div>
                <SpecialisationComponent />
            </div>
            <div>
                <MedicalSpecialist />
            </div>
            <div>
                <ParentCaring />
            </div>
            <div>
                <LatestNews />
            </div>
        </div>
    );
};

export default HeroSection;