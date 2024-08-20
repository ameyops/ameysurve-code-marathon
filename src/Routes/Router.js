import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from '../pages/Home';
import { Matches } from '../pages/Matches';

import Login  from '../pages/Login';
import { Players } from '../pages/Players';
import { AuthProvider } from '../context/useContext'
import MatchForm from '../models/mform';

export const R = () => {
  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<MatchForm />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/players" element={<Players />} />
      </Routes>
        </AuthProvider>
    </Router>
  );
}
