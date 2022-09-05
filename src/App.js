import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import InnerPage from './components/pages/inner';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<InnerPage />} />
      </Routes>
    </>
  );
}

export default App;