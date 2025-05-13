import React, { useState } from 'react';
import './DietaAluno.css';
import Menu from '../../../components/Menu/menu';
import { MdFoodBank } from "react-icons/md";

const dieta = [
  {
    nomeRefeicao: 'Café da Manhã',
    calorias: '350kcal',
    dataCriacao: '2024-05-11',
    alimentos: [
      { alimento: "2 pães integrais" },
      { alimento: "100g de ovo" },
      { alimento: "100g de mamão/melancia/morango/melão" }
    ]
  },
  {
    nomeRefeicao: 'Almoço',
    calorias: '450kcal',
    dataCriacao: '2024-05-11',
    alimentos: [
      { alimento: "100g de arroz" },
      { alimento: "80g de feijão" },
      { alimento: "100g de proteína (frango, patinho, tilápia)" },
      { alimento: "salada à vontade" }
    ]
  }
];

function DietaAluno() {
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
    <div className="plano-dieta-container">
      <div className="header">
        <Menu links={linksAluno} />
      </div>

      <h1>Plano Alimentar da Julia</h1>

      {dieta.map((refeicao, index) => (
        <div key={index} className="card-dieta">
          <div className="topo-card">
            <div>
              <strong><MdFoodBank className='icon' /> {refeicao.nomeRefeicao}</strong>
              <p>Calorias: {refeicao.calorias}</p>
            </div>
            <button onClick={() => toggleDetalhes(index)}>
              {detalheAberto === index ? 'Fechar' : 'Ver detalhes'}
            </button>
          </div>

          {detalheAberto === index && (
            <div className="detalhes-dieta">
              <table>
                <thead>
                  <tr>
                    <th>Alimentos</th>
                  </tr>
                </thead>
                <tbody>
                  {refeicao.alimentos.map((item, i) => (
                    <tr key={i}>
                      <td>{item.alimento}</td>
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

export default DietaAluno;
