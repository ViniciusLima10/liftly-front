import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import Liftly from '../../components/Liftly/liftly';


import './index.css'

const Cadastro = ({ tipoUsuario }) => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const navigate = useNavigate();

    const handleCadastro = (e) => {
        e.preventDefault();
    
        if (usuario.trim() === "" || senha.trim() === "" || nome.trim === "" || telefone.trim === "") {
          alert("Preencha todos os campos!");
          return;
        }

    }

    return(
    <div>
            <Liftly></Liftly>
            <div className="login-container">
      <form onSubmit={handleCadastro}>
        <h1>Cadastro {tipoUsuario}</h1>

        <div className="input-field">
            <FaUser className="icon"/>
            <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
        </div>

        <div className="input-field">
        <MdOutlineMailOutline className="icon" />
          <input
            type="text"
            placeholder="Email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className= "input-field">
            <BsTelephone className= "icon" />
            <input 
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            /> 
        </div>

        <div className="input-field">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        
        {erro && <p className="error-message">{erro}</p>}
        <button type="submit" onClick={() => navigate("/login")}>Cadastre-se</button>
      
      </form>
    </div>
    </div>
    )

}

export default Cadastro;