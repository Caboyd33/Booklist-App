import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import BookPage from './Pages/BookPage'


function App() {

  return (
   <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/book" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
