import React, { useState } from 'react';
import './TreinoAluno.css';
import Menu from '../../../components/Menu/menu';
import { CgGym } from "react-icons/cg";

const fichas = [
  {
    nomeFicha: 'Segunda-feira – Peito e Tríceps',
    dataCriacao: '2024-05-11',
    exercicios: [
      { nome: 'Supino reto', series: 4, repeticoes: '10', carga: '50kg', descanso: '60s', observacoes: 'Manter controle' },
      { nome: 'Crucifixo inclinado', series: 3, repeticoes: '12', carga: '15kg', descanso: '45s', observacoes: 'Amplitude máxima' },
      { nome: 'Tríceps pulley', series: 4, repeticoes: '12', carga: '25kg', descanso: '60s', observacoes: 'Evitar balanço' }
    ]
  },
  {
    nomeFicha: 'Terça-feira – Costas e Bíceps',
    dataCriacao: '2024-05-11',
    exercicios: [
      { nome: 'Remada curvada', series: 3, repeticoes: '10', carga: '40kg', descanso: '60s', observacoes: 'Postura reta' },
      { nome: 'Puxador frontal', series: 4, repeticoes: '10', carga: '45kg', descanso: '60s', observacoes: 'Pegada aberta' },
      { nome: 'Rosca direta', series: 3, repeticoes: '12', carga: '20kg', descanso: '45s', observacoes: 'Sem impulso' }
    ]
  }
];

function TreinoAluno() {
  const [detalheAberto, setDetalheAberto] = useState(null);

  const toggleDetalhes = (index) => {
    setDetalheAberto(detalheAberto === index ? null : index);
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
    <div className="plano-treino-container">
      <div className="header">
        <Menu links={linksAluno} />
      </div>

      <h1>Plano de Treino da Julia</h1>

      {fichas.map((ficha, index) => (
        <div key={index} className="card-treino">
          <div className="topo-card">
            <div>
              <strong><CgGym className='icon' />{ficha.nomeFicha}</strong>
              <p>Exercícios: {ficha.exercicios.length}</p>
            </div>
            <button onClick={() => toggleDetalhes(index)}>
              {detalheAberto === index ? 'Fechar' : 'Ver detalhes'}
            </button>
          </div>

          {detalheAberto === index && (
            <div className="detalhes-treino">
              <table>
                <thead>
                  <tr>
                    <th>Exercício</th>
                    <th>Séries</th>
                    <th>Repetições</th>
                    <th>Carga</th>
                    <th>Descanso</th>
                    <th>Observações</th>
                  </tr>
                </thead>
                <tbody>
                  {ficha.exercicios.map((ex, i) => (
                    <tr key={i}>
                      <td>{ex.nome}</td>
                      <td>{ex.series}</td>
                      <td>{ex.repeticoes}</td>
                      <td>{ex.carga}</td>
                      <td>{ex.descanso}</td>
                      <td>{ex.observacoes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TreinoAluno;
