import React, { useState} from "react";

function FormularioAluno({ onAdicionarAluno}) {
    // estados locais
    const [nome, setNome] = useState('');
    const [disciplina1, setDisciplina1] = useState('');
    const [disciplina2, setDisciplina2] = useState('');
    const [disciplina3, setDisciplina3] = useState('');
    const [disciplina4, setDisciplina4] = useState('');
    const [disciplina5, setDisciplina5] = useState('');
    const [frequencia, setFrequencia] = useState('');

        const handleSubmit = (ev) => {
            ev.preventDefault();

            // Conversão 0 para que campos vazios virem 0
            const d1 = parseFloat(disciplina1) || 0;
            const d2 = parseFloat(disciplina2) || 0;
            const d3 = parseFloat(disciplina3) || 0;
            const d4 = parseFloat(disciplina4) || 0;
            const d5 = parseFloat(disciplina5) || 0;
            const freq = parseInt(frequencia) || 0;      
        // 2. Validação
        if (nome.trim() === '' || freq < 0 || freq > 100 || 
            [d1, d2, d3, d4, d5].some(d => d < 0 || d > 10)) {
            
       
            alert("Verifique os campos: Nome é obrigatório, notas entre 0-10, frequência entre  0-100.");
            return;
        }
        // cria o objeto novo aluno
        const novoAluno = {
            nome,
            disciplinas: {
                disc1: d1,
                disc2: d2, 
                disc3: d3, 
                disc4: d4, 
                disc5: d5, 
            },
            frequencia: freq,
        };
        // envia os dados para o pai
        onAdicionarAluno(novoAluno);

        // limpa os campos
        setNome(''); setDisciplina1(''); setDisciplina2(''); setDisciplina3(''); setDisciplina4(''); setDisciplina5(''); setFrequencia('');
    }
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px'}}>
            <h3>Adicionar Novo Aluno</h3>
            
            <input type="text" value={nome} onChange={(ev) => setNome(ev.target.value)} placeholder="Nome" required />
            <input type="number" value={frequencia} onChange={(ev) => setFrequencia(ev.target.value)} placeholder="Frequência (%)" min="0" max="100" required />
            
                <p>Notas [0-10]:</p>
                    {/* 5 notas */}
                    <input type="number" value={disciplina1} onChange={(ev) => setDisciplina1(ev.target.value)} placeholder="d1" min='0' max='10' required />
                    <input type="number" value={disciplina2} onChange={(ev) => setDisciplina2(ev.target.value)} placeholder="d2" min='0' max='10' required />
                    <input type="number" value={disciplina3} onChange={(ev) => setDisciplina3(ev.target.value)} placeholder="d3" min='0' max='10' required />
                    <input type="number" value={disciplina4} onChange={(ev) => setDisciplina4(ev.target.value)} placeholder="d4" min='0' max='10' required />
                    <input type="number" value={disciplina5} onChange={(ev) => setDisciplina5(ev.target.value)} placeholder="d5" min='0' max='10' required />
                
                    <button type="submit">Adicionar</button>
        </form>
    );
}

export default FormularioAluno;