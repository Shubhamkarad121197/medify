


// import './App.css'
// import Home from './components/Home/Home'

// function App() {
 

//   return (
//     <>
//       <div>
//         <Home/>
//       </div>
//     </>
//   )
// }

// export default App
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchResultsPage from './components/searchResultsPage/searchResult';
import MyBookingsPage from './components/MyBookings/MyBookings';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/footer/footer';
import './App.css'; // Your main CSS file

function App() {
  return (
    <Router>
      <div className="App">
       
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/my-bookings" element={<MyBookingsPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
