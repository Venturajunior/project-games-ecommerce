import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderBackground from './components/HeaderBackground';
import { Home } from './pages/Home';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="container-main">
        <HeaderBackground />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<h1>products</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
