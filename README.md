# DOCUMENTAÇÃO – SISTEMA DE CONTROLE DE ESTUDOS

## 1. Identificação do Projeto
Trabalho Acadêmico da disciplina de Programação Web.

Sistema desenvolvido para controle de horas de estudo, permitindo cadastrar disciplinas e registrar o tempo estudado para cada uma delas.

---

## 2. Objetivo do Sistema
O objetivo do sistema é auxiliar o estudante no gerenciamento de suas disciplinas, possibilitando:

- Cadastro de disciplinas
- Registro de horas estudadas
- Visualização do progresso percentual
- Edição e exclusão de registros
- Armazenamento permanente dos dados no navegador

---

## 3. Tecnologias Utilizadas
O sistema foi desenvolvido utilizando:

- HTML5
- CSS3
- JavaScript puro
- LocalStorage do navegador

Não foi utilizado nenhum framework ou biblioteca externa.

---

## 4. Estrutura do Projeto
O projeto está organizado da seguinte forma:

controle-estudos/
│
├── controle-estudos-index.html
├── style-estudos.css
└── script-estudos.js

---

## 5. Funcionalidades Implementadas

### 5.1 Cadastro de Disciplinas
Cada disciplina possui obrigatoriamente:

- Nome da disciplina
- Professor responsável
- Carga horária total
- Área do conhecimento (Exatas, Humanas, Biológicas ou Tecnologia)

O sistema valida os campos obrigatórios antes de permitir o cadastro.

---

### 5.2 Registro de Horas de Estudo
É possível registrar horas estudadas para cada disciplina.

O sistema:
- Atualiza o total de horas estudadas
- Calcula automaticamente o percentual de progresso
- Exibe uma barra visual representando o avanço

---

### 5.3 Listagem de Disciplinas
Todas as disciplinas cadastradas são exibidas dinamicamente na tela.

Caso não exista nenhuma disciplina cadastrada, o sistema mostra uma mensagem informativa.

---

### 5.4 Edição e Exclusão
O sistema permite:

- Editar dados de uma disciplina
- Excluir disciplinas cadastradas

---

### 5.5 Persistência de Dados
Os dados são armazenados utilizando LocalStorage.

Isso garante que as informações permaneçam salvas mesmo após atualizar a página.

---

## 6. Manipulação do DOM
O sistema utiliza:

- getElementById
- addEventListener
- createElement
- appendChild
- innerHTML

A interface é atualizada dinamicamente sempre que uma disciplina é cadastrada, editada ou excluída.

---

## 7. Responsividade
Foi aplicada media query para garantir melhor adaptação em telas menores, tornando o sistema funcional em dispositivos móveis.

---

## 8. Como Executar o Sistema
1. Abrir a pasta do projeto.
2. Clicar duas vezes no arquivo "controle-estudos-index.html".
3. O sistema será executado diretamente no navegador.

Caso sejam feitas alterações no CSS ou JavaScript, é necessário atualizar a página para visualizar as mudanças.

---

## 9. Considerações Finais
O projeto foi desenvolvido utilizando apenas os conceitos estudados em sala de aula, aplicando:

- Estruturação semântica com HTML5
- Estilização com CSS3
- Manipulação do DOM com JavaScript
- Persistência de dados com LocalStorage

O sistema apresenta interface simples, organizada e funcional, atendendo aos requisitos propostos na atividade.

