import { useState } from 'react';
import './App.css';
// Importando os componentes
import FormularioAluno from './components/FormularioAluno';
import TabelaAlunos from './components/TabelaAlunos';


function App() {
  // estado principal
  const [alunos, setAlunos] = useState([]);

  // função que recebe os dados do form
  const adicionarAluno = (dadosDoFormulario) => {

     // 1 calcular a média do aluno
     const notas = Object.values(dadosDoFormulario.disciplinas);
     const soma = notas.reduce((acc, nota) => acc + nota, 0);
     const mediaAluno = (soma / notas.length);

     // 2 criando o objeto final para salvar
     const alunoCompleto = {
      ...dadosDoFormulario,
      id: Date.now(),
      mediaAluno: parseFloat(mediaAluno),
     };

     // 3 salva no estado
     setAlunos(prevAlunos => [...prevAlunos, alunoCompleto]);
  };

  return (
    <div className='container'>
      <h1>Controle de Notas e Frequência <img src={'/icon.png'} /></h1> 

      {/* componente de entrada */}
      <FormularioAluno onAdicionarAluno={adicionarAluno} />

      <hr />

      {/* componente de saída */}
      <TabelaAlunos alunos={alunos} />

    </div>
  );
}

export default App;
