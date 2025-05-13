import React, { useState } from 'react';
import './AulasAlunos.css'; 
import Menu from '../../../components/Menu/menu';
import { CiClock2 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const AgendarAulas = () => {
  const [showDays, setShowDays] = useState(false); // Controla a visibilidade dos dias
  const [selectedDay, setSelectedDay] = useState('Segunda-feira'); // Controla o dia selecionado

  // Função para alternar a visibilidade
  const toggleDays = () => {
    setShowDays(!showDays);
  };

  // Função para selecionar o dia
  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setShowDays(false); // Fecha a lista após selecionar o dia
  };

  const linksAluno = [
    { href: '/homeAluno', label: 'Home' },
    { href: '/aulasAluno', label: 'Aulas' },
    { href: '/treinoAluno', label: 'Treino' },
    { href: '/dietaAluno', label: 'Dieta' },
    { href: '/perfilAluno', label: 'Perfil' },
    { href: '/', label: 'Sair' },
  ];

  return (
    <div className="container">
        <div className='header'>
            <Menu links={linksAluno} />
        </div>
      <h2 className="slogan-aulas">Agendar Aulas</h2>

      <div className="button" onClick={toggleDays}>
        <span className="button-text">{selectedDay}</span>
        <span className={`arrow ${showDays ? 'arrow-rotate' : ''}`}>↓</span>
      </div>

      {showDays && (
        <ul className="day-list">
          {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'].map((day) => (
            <li key={day} onClick={() => handleDaySelect(day)} className="day-list-item">
              {day}
            </li>
          ))}
        </ul>
      )}
             <div className="detalhe-aula">
      <ul className="detalhe-aula-list">
        <li className="detalhe-aula-item">
          <CiClock2 className="icons" /> Horário </li>
        <li className="detalhe-aula-item">
          <FaListUl className="icons" /> Nome aula </li>
        <li className="detalhe-aula-item">
          <FaRegUserCircle className="icons"/> Nome Professor </li>
          <li className="detalhe-aula-item">
          <IoPeopleSharp className="lotacao"/> Lotação</li>
      </ul>
      
      <div> 
        <button className="agendar-btn"> Agendar</button>
      </div>

    </div>

    </div>
  );
};

export default AgendarAulas;
