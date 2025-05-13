import React from "react";
import "./HomeAluno.css";
import Menu from "../../../components/Menu/menu";
import { Link, useNavigate } from 'react-router-dom';

function HomeAluno() {
  const navigate = useNavigate();

  const linksAluno = [
    { href: '/homeAluno', label: 'Home' },
    { href: '/aulasAluno', label: 'Aulas' },
    { href: '/treinoAluno', label: 'Treino' },
    { href: '/dietaAluno', label: 'Dieta' },
    { href: '/perfilAluno', label: 'Perfil' },
    { href: '/', label: 'Sair' },
  ];
  return (
    <div className="homeAluno">
      <div className="header">
        <Menu links={linksAluno} />
      </div>

      <div className="img-container">

                <div className="homeAluno-body">
                    <h1 className="slogan-homePage">Bem vinda, Julia!</h1>
                        <div className="botoes">
                            <button>Inicial Treino</button>
                            <button>Visualizar Dieta</button>
                            <button onClick={() =>navigate("/aulasAluno")}>Agendar Aula</button>
                        </div>
                </div>
                <div className="img">
                <img src={require('./fotoAluno.png')} alt="fotoAluno" />
            </div>
        </div>
    </div>
  );
}

export default HomeAluno;
