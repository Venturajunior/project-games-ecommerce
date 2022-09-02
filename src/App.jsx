import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';
import './Styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-main">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
