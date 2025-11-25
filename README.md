Sistema de Controle de Notas e Frequência

Projeto desenvolvido em React.js para o "Carlos", permitindo o cadastro de alunos com notas (5 disciplinas) e frequência, além de calcular médias e gerar listas de atenção especial.

1. Execução do Sistema

O projeto é um aplicativo React básico, sem dependências externas complexas.

Pré-requisitos: Node.js e npm.

Clone o Repositório:

git clone [(https://github.com/lucas-devworks/controle_de_notas.git)]
cd [controle_de_notas]


Instale e Inicie:

npm install
npm start


O sistema estará acessível em http://localhost:3000.

2. Premissas Assumidas

Persistência: Os dados são mantidos apenas no estado do React (useState), sem integração com backend, Firestore ou Local Storage.

Estilização: Utiliza-se estilização CSS mínima (inline e App.css) para focar na lógica principal.

Validação: A validação de limites (0-10 para notas e 0-100 para frequência) é básica, usando atributos HTML5 e um alert() simples para erros.

3. Decisões de Projeto e Arquitetura

O projeto foi arquitetado em React com Hooks, separando responsabilidades para garantir escalabilidade e manutenção.

Estrutura de Componentes

Componente

Responsabilidade

App.jsx (Pai)

Gerencia o estado central (alunos) e a lógica de negócios fundamental.

FormularioAluno.jsx

Entrada de dados e validação. Envia o objeto de novo aluno ao Pai.

TabelaAlunos.jsx

Renderização da lista de alunos e execução de todos os Cálculos Globais da turma.

Lógica de Cálculos e Estabilidade

Média Individual: É calculada em App.jsx e salva junto ao objeto do aluno.

Cálculos da Turma: A média por disciplina e a Média Geral da Turma são calculadas em TabelaAlunos.jsx a cada atualização, permitindo os filtros.

Defensividade: Implementada conversão segura (|| 0 e filtros isNaN) e checks de tipo para evitar que dados não numéricos (NaN ou undefined) causem erros fatais na renderização (tela branca).
