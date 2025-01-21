# 📝 Gerenciador de Tarefas

![Image](https://github.com/user-attachments/assets/e5a26c27-5c20-4fbc-8df5-461eb322a488)

Um **Gerenciador de Tarefas** simples e eficiente desenvolvido com **React** e **Tailwind CSS**. Este projeto permite gerenciar atividades do dia a dia de forma prática, com funcionalidades de adicionar, visualizar, concluir e excluir tarefas.

---

## 🚀 Demonstração

Confira o projeto em funcionamento:  
👉 [Gerenciador de Tarefas - Deploy Vercel](https://gerenciador-de-tarefas-bkbgob8mz-iagolizieros-projects.vercel.app/)

---

## 🛠️ Funcionalidades

- **Adicionar Tarefa**: Insira um título e uma descrição para criar uma nova tarefa.  
- **Visualizar Detalhes**: Veja mais informações sobre cada tarefa.  
- **Marcar como Concluída**: Atualize o status da tarefa com um clique.  
- **Excluir Tarefa**: Remova tarefas desnecessárias.  
- **Persistência com LocalStorage**: Todas as tarefas são armazenadas localmente para que não sejam perdidas ao recarregar ou sair da página.

---

## 🧪 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **React Router DOM**: Para gerenciar navegação entre páginas.
- **UUID**: Para gerar identificadores únicos para tarefas.
- **LocalStorage**: Para persistir as tarefas no navegador.

---

## 🖥️ Configuração do Ambiente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado em sua máquina.
- Gerenciador de pacotes `npm` ou `yarn`.

### Instalação

1. Clone o repositório:  
   ```bash
   git clone https://github.com/iagoliziero/gerenciador-de-tarefas.git
   cd gerenciador-de-tarefas
   ```

2. Instale as dependências:  
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o projeto:  
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse no navegador:  
   ```
   http://localhost:5173
   ```

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── AddTasks.jsx       # Formulário para adicionar tarefas
│   ├── Button.jsx         # Componente reutilizável de botões
│   ├── Input.jsx          # Componente reutilizável de inputs
│   ├── Tasks.jsx          # Lista de tarefas com ações
│   └── Title.jsx          # Componente para o título
├── pages/
│   └── TaskPage.jsx       # Página para exibição dos detalhes da tarefa
├── App.jsx                # Componente principal do projeto
├── index.css              # Estilização global
└── main.jsx               # Configuração inicial e rotas
```

---

## ⚙️ Principais Funcionalidades

### 1. **Adicionar Tarefa**
- Componente: `AddTasks.jsx`
- A tarefa só é adicionada se os campos de título e descrição forem preenchidos.

### 2. **Visualizar Detalhes**
- Navegação com `React Router DOM` para uma página dedicada aos detalhes.
- As informações são passadas via query string.

### 3. **Marcar como Concluída**
- Alteração do estado `isCompleted` de uma tarefa específica com um clique.

### 4. **Excluir Tarefa**
- Remove a tarefa da lista filtrando pelo `id`.

### 5. **Persistência de Dados**
- Utilização do `localStorage` para salvar as tarefas localmente.
- As tarefas são carregadas automaticamente ao abrir a aplicação.

---

## 🔗 Links Úteis

- **Acesse o Gerenciador**: [Clique Aqui](https://gerenciador-de-tarefas-bkbgob8mz-iagolizieros-projects.vercel.app/)
- **Repositório GitHub**: [Clique Aqui](https://github.com/iagoliziero/gerenciador-de-tarefas)

---

## 📚 Base de Aprendizado

Este projeto foi desenvolvido com base no curso do **Felipe Rocha**, explorando o uso prático de **React** e **Tailwind CSS**.

---

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
