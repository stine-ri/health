import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Service from './components/Service';
import ChatbotAI from './components/ChatBotAI';
import CaseStudies from './components/CaseStudies';
import Diagnostics from './components/Diagnostics';
import Doctors from './components/Doctors';
import ClientFeedback from './components/ClientFeedBack';
import TrainWithUs from './components/TrainWithUs';
import './App.css'
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Service />} />
        <Route path="/chatbot" element={<ChatbotAI />} /> {/* Add the chatbot route */}
        <Route path="/case-studies" element={<CaseStudies />} /> {/* Add the case studies route */}
        <Route path="/diagnostics" element={<Diagnostics/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/feedback" element={<ClientFeedback/>}/> {/* Add the client feedback route */}
        <Route path="/train" element={<TrainWithUs/>}/> 
        {/* Add other routes for diagnostics, profile, etc. */}
      </Routes>
    </Router>
  );
};

export default App;
