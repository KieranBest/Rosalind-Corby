import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './Pages/Home'
import { Services } from './Pages/Services'
import { Contact } from './Pages/Contact'
import { NotFound } from './Pages/NotFound'

import { Navbar } from './Components/PageDetails/Navbar'

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}
