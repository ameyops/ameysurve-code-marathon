import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PlayerByCountry } from '../pages/PlayerByCountry';
import { Performance } from '../pages/perf';
import Login from '../pages/Login';
import { Players } from '../pages/Players';
import { AuthProvider } from '../context/useContext';
// import MatchForm from '../pages/post';

export const R = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/post" element={<MatchForm />} /> */}
          <Route 
            path="/country" 
            element={<PlayerByCountry year={2024} country="USA" />} 
          />
          <Route path="/perf" element={<Performance />} />
          <Route path="/Players" element={<Players />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
