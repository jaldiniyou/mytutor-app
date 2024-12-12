import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindTutor from './pages/FindTutor';
import BecomeTutor from './pages/BecomeTutor';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-tutor" element={<FindTutor />} />
          <Route path="/become-tutor" element={<BecomeTutor />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;