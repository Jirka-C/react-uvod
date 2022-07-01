import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MujSkvelyBlog from './components/MujSkvelyBlog';
import Rozcestnik from './components/Rozcestnik';
import E404 from './components/E404';
import DetailClanku from './components/DetailClanku';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Rozcestnik />} />
        <Route path='blog' element={<MujSkvelyBlog />} />
        <Route path='blog/:id' element={<DetailClanku />} />
        <Route path="*" element={<E404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);