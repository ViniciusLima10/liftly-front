import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import Liftly from '../../components/Liftly/liftly';


import './index.css'

const Login = ({ tipoUsuario }) => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        if (usuario.trim() === "" || senha.trim() === "") {
          alert("Preencha todos os campos!");
          return;
        }
    
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.usuario === usuario && u.senha === senha);
    
        if (user) {
          alert(`Login bem-sucedido para ${user.tipo}!`);
          localStorage.setItem("userType", user.tipo);
    
      };
    }

    return(
    <div>
            <Liftly></Liftly>
            <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>Login {tipoUsuario}</h1>

        <div className="input-field">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
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
        <div className="recall-forget">
          <a href="#" onClick={() => navigate("/esqueceuSenha")}>
            Esqueceu a senha?
          </a>
        </div>
        <button type="submit">Entrar</button>
        <div className="register-txt">
          <p className="register-text">Ainda não possui cadastro?</p>
        </div>
        <button
          type="button"
          className="register-btn"
          onClick={() => navigate("/cadastro")}
        >
          Cadastre-se
        </button>
      </form>
    </div>
    </div>
    )

}

export default Login;