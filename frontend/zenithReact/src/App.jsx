import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';


function App() {
  function BuscaTema() {
    const buscarTema = localStorage.getItem('tema');

    if (buscarTema === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  
  useEffect(() => {
    BuscaTema();
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
