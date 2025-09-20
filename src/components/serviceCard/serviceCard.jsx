// src/components/ServiceCard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import DoctorVector from "../../assets/Doctor.png";
import LabVector from "../../assets/labs_Vector.png";
import AmbulanceVector from "../../assets/Ambulance_vector.png";
import HospitalVector from "../../assets/Hospital_vector.png";
import MedicineVector from "../../assets/medicine_Vector.png";
import { getStates, getCitiesByState } from '../../services/api';
import './ServiceCard.css'; // Link to the new CSS file

const ServiceCard = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStates = async () => {
            const allStates = await getStates();
            setStates(allStates);
        };
        fetchStates();
    }, []);

    useEffect(() => {
        if (selectedState) {
            const fetchCities = async () => {
                const allCities = await getCitiesByState(selectedState);
                setCities(allCities);
            };
            fetchCities();
        } else {
            setCities([]);
            setSelectedCity('');
        }
    }, [selectedState]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (selectedState && selectedCity) {
            navigate(`/search-results?state=${selectedState}&city=${selectedCity}`);
        }
    };

    return (
        <div className="serviceCard">
            <form onSubmit={handleSearch}>
                <div className="searchFeildContainer">
                    <div id="state" className="dropdown-wrapper">
                        <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            required
                        >
                            <option value="">State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div id="city" className="dropdown-wrapper">
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            disabled={!selectedState}
                            required
                        >
                            <option value="">City</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <button type="submit" id="searchBtn" className="searchButton">
                        <span className="searchButtonText">Search</span>
                    </button>
                </div>
            </form>

            <div className="lookingForSection">
                <span className="lookingForTitle">You may be looking for</span>
                <div className="serviceIconsContainer">
                    <div className='cardService'>
                        <img src={DoctorVector} alt="doctor" />
                        <span>Doctor</span>
                    </div>
                    <div className='cardService'>
                        <img src={LabVector} alt="lab" />
                        <span>Labs</span>
                    </div>
                    <div className='cardService'>
                        <img src={HospitalVector} alt="hospital" />
                        <span>Hospital</span>
                    </div>
                    <div className='cardService'>
                        <img src={MedicineVector} alt="medicine" />
                        <span>Medicine</span>
                    </div>
                    <div className='cardService'>
                        <img src={AmbulanceVector} alt="ambulance" />
                        <span>Ambulance</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;