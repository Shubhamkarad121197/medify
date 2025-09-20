// src/components/HeroSection.js
import React from "react";
import "./heroSection.css"; // Ensure this CSS file exists

import DoctorImage from "../../assets/Home.png";
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

            {/* ServiceCard is now its own component */}
            <ServiceCard />

            <div className="carouselSection">
                <SwiperCarausel />
            </div>

            <div className="specializationSection">
                <SpecialisationComponent />
            </div>

            <div className="medicalSpecialistSection">
                <MedicalSpecialist />
            </div>

            <div className="patientCaringSection">
                <ParentCaring />
            </div>

            <div className="latestNewsSection">
                <LatestNews />
            </div>
        </div>
    );
};

export default HeroSection;