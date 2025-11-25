import React from 'react';

// recebendo lista
function TabelaAlunos({ alunos }) {
    // se tiver aluno
    if (alunos.length === 0) {
        return <p>Nenhum aluno cadastrado. Adicione um aluno a cima.</p>
    }

    // 1 cálculo da média da turma
    const calcularMediaTurma = (alunos) => {
        
        // array com os nomes
        const disciplinas = ['disc1', 'disc2', 'disc3', 'disc4', 'disc5'];
        const totalAlunos = alunos.length;

        // guarda a soma total de notas por disc
        const somaNotas = { disc1: 0, disc2: 0, disc3: 0, disc4: 0, disc5: 0};
            // percorrendo o array e somando notas válidas
            alunos.forEach(aluno => {
                disciplinas.forEach(disc => {
                    const nota = aluno.disciplinas[disc];
                    // só soma se for um número válido
                    if (typeof nota === 'number' && !isNaN(nota)) {
                        somaNotas[disc] += nota;
                    }
                });
            });

        // 2 calcula a média final
        const medias = {};
        disciplinas.forEach(disc => {
            // Garantir que a média é 0 se o totalAlunos for 0, ou se a soma for 0
            const media = (somaNotas[disc] / totalAlunos) || 0;
            medias[disc] = media.toFixed(2);
        });

        return medias; // retorno do objeto "disc1, disc2..."      
    };

    // Usando apenas um nome de variável= mediasTurma
    const mediasTurma = calcularMediaTurma(alunos);

    //  Alunos com frequencia abaixo de 75 
    const alunosAbaixoFrequencia = alunos.filter(a => a.frequencia < 75);

                // Média Geral da Turma
                const somaMediasIndividuais = alunos.reduce((acc, aluno) => {
                    // para garantir que mediaAluno é um número
                    const media = typeof aluno.mediaAluno === 'number' && !isNaN(aluno.mediaAluno) ? aluno.mediaAluno : 0;
                    return acc + media;
                }, 0);
    
    // Calcula a média geral da turma
    const mediaGeralTurma = (somaMediasIndividuais / alunos.length) || 0;

    // Alunos com Média acima
    const alunosAcimaMediaTurma = alunos.filter(a => a.mediaAluno > mediaGeralTurma);


    return (
    <div>
        <h3>Lista de Alunos ({alunos.length} cadastrados)</h3>
        <table>

            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Média Notas</th>
                    <th>Frequência</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
            {alunos.map(aluno => (
            <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                {/* se mediaAluno é NaN, exibe 0.00 */}
                <td>{typeof aluno.mediaAluno === 'number' && !isNaN(aluno.mediaAluno) ? aluno.mediaAluno.toFixed(2) : '0.00'}</td>
                <td>{aluno.frequencia}</td>
                <td style={{ color: aluno.frequencia < 75 ? 'red' : 'green', fontWeight: 'bold'}}>
                    {aluno.frequencia < 75 ? 'ATENÇÃO' : 'OK'}
                </td>
            </tr>
            ))}
            </tbody>
        </table>


    <hr />
        
        <h3>Estatísticas e Alunos de Atenção</h3>
        
        {/* Exibe a média */}
        <p>
            Média da Turma por Disciplina: D1: **{mediasTurma.disc1}** / D2: **{mediasTurma.disc2}** / D3: **{mediasTurma.disc3}** / D4: **{mediasTurma.disc4}** / D5: **{mediasTurma.disc5}**
        </p>
        <p>
            Média Geral da Turma (para referência): **{mediaGeralTurma.toFixed(2)}**
        </p>
        
        <hr />
        
                    {/*  Alunos com Média acima da Média */}
                    <h4>Alunos com Média de Notas acima da Média Geral da Turma ({alunosAcimaMediaTurma.length})</h4>
                    <ul>
                        {alunosAcimaMediaTurma.length > 0 ? (
                            alunosAcimaMediaTurma.map(a => (
                                <li key={a.id}>{a.nome} (Média: {a.mediaAluno.toFixed(2)})</li>
                            ))
                        ) : (
                            <li>(Nenhum aluno se encaixa nesse criitério.)</li>
                        )}
                    </ul>
                    
        {/* Alunos com Frequência abaixo de 75  */}
        <h4>Alunos com Frequência abaixo de 75% (Atenção especial) ({alunosAbaixoFrequencia.length})</h4>
        <ul>
            {alunosAbaixoFrequencia.length > 0 ? (
                alunosAbaixoFrequencia.map(a => (
                    <li key={a.id} style={{ color: 'red', fontWeight: 'bold' }}>{a.nome} ({a.frequencia}%)</li>
                ))
            ) : (
                <li>(Nenhum aluno se encaixa neste critério.)</li>
            )}
        </ul>
    </div>
    );
}

export default TabelaAlunos;