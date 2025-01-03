
import React from 'react';
import './App.css';
import NAvbar from './Components/NAvbar';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './Components/Service';
import Erp from './Components/Erp';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div>
      <Router> 
            <NAvbar />
            <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/service" element={<Service />} />
            <Route path="/erp" element={<Erp />} />
            <Route path="/pricing" element={<Pricing />} />
            </Routes>
            <Footer />
        </Router>
     
      
    </div>
  );
}

export default App;
