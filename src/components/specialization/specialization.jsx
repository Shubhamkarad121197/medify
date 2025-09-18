import React from 'react';
import './specialization.css';

// Use Lucide React icons for the visual appeal
// We'll use inline SVGs since we are not loading any external libraries.
// NOTE: I'm making up the names for these icons based on the image provided.
const IconHospital = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L12 22"/><path d="M5 22V12h14v10M5 16h14m-7-4v4m-7-4h14"/></svg>
);

const IconStethoscope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20L11 22"/><path d="M13 20L13 22"/><path d="M12 20a4 4 0 0 0-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v11a4 4 0 0 0-4 4z"/><path d="M17 12L22 12"/><path d="M2 12L7 12"/></svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const IconWaveform = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h3l2-8 4 16 3-10 3 6 3-8 2 8h2"/></svg>
);

const IconBloodTest = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2c3.314 0 6 2.686 6 6s-2.686 6-6 6c-.302 0-.597-.03-1.127-.132C10.66 16.517 7.57 18.06 6.136 21.018c-.808 1.69-.974 2.89-.974 2.89s1.192-.162 2.882-.962C12.333 19.336 15.485 16.242 16.99 12.87c.214-1.13.197-2.22.197-2.22A5.96 5.96 0 0 0 14 2zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const IconXray = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19l14-14m-10 0l-5 5m14-5l-5 5"/><circle cx="12" cy="12" r="10"/></svg>
);

const specializations = [
  { name: 'Dentistry', icon: <IconHospital /> },
  { name: 'Primary Care', icon: <IconStethoscope /> },
  { name: 'Cardiology', icon: <IconHeart /> },
  { name: 'MRI Resonance', icon: <IconWaveform /> },
  { name: 'Blood Test', icon: <IconBloodTest /> },
  { name: 'Piscologist', icon: <IconShield /> },
  { name: 'Laboratory', icon: <IconHospital /> },
  { name: 'X-Ray', icon: <IconXray /> },
];

const SpecialisationComponent = () => {
  return (
    <div className="specialization-container">
      <style>
        {`
          /* Base container for the whole component */
         
        `}
      </style>
      <div className="specialization-card">
        <h2 className="specialization-title">
          Find By Specialisation
        </h2>
        <div className="specialization-grid">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="specialization-item"
            >
              <div style={{ marginBottom: '1rem' }}>
                {spec.icon}
              </div>
              <span className="specialization-name">
                {spec.name}
              </span>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="view-all-button">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialisationComponent;