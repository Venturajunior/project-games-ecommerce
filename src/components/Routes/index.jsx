import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Products from '../../Pages/Products';

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
