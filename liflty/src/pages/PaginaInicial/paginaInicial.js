import React from 'react';
import './index.css'
import { useNavigate } from "react-router-dom";
import Liftly from '../../components/Liftly/liftly';
import Menu from '../../components/Menu/menu';

function PaginaInicial() {
  const navigate = useNavigate();
  
  return (
    <div>
       <div className="pagina-inicial">
        <div className="header-container">
        <Menu />
        </div>
        </div>
               
         <section className="home-container">
        <div>
          <h2 className="slogan">Seu eu do futuro agradece</h2>
       </div>
        <div className="botao">
        <button onClick={() => navigate("/login")}>Aluno</button>
        <button onClick={() => navigate("/login")}>Academia</button>
        <button onClick={() => navigate("/login")}>Personal Trainer</button>
        <button onClick={() => navigate("/login")}>Nutricionista</button>
      </div>

      <footer className="socials">
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Youtube</span>
      </footer>
    </section>
</div>
  );
}

export default PaginaInicial;
