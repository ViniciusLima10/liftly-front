import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial/paginaInicial";
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
import EsqueceuSenha from './pages/EsqueceuSenha/esqueceuSenha';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/esqueceuSenha" element={<EsqueceuSenha/>} />
      </Routes>
    </Router>
  );
}

export default App;
