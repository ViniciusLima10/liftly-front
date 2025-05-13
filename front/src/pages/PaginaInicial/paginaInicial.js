import React from 'react';
import "./paginaInicial.css";
import { useNavigate } from "react-router-dom";
import Menu from '../../components/Menu/menu';


function PaginaInicial() {
  const navigate = useNavigate();
  const linksInicio = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#planos', label: 'Planos' },
    { href: '#aulas', label: 'Aulas' },
    { href: '#contato', label: 'Contato' },
  ];
  
  return (
    <div>
       <div className="pagina-inicial">
          <div className="header-container">
            <Menu links={linksInicio}/>
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
