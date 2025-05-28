# ✒️ Mini Blog com React & Firebase

Bem-vindo ao Mini Blog! Esta é uma aplicação web full-stack desenvolvida com **React.js** para o frontend e **Firebase** para o backend e autenticação. O projeto permite que usuários se registrem, façam login, criem, editem, excluam e pesquisem postagens por tags.

## ✨ Funcionalidades

* **Autenticação de Usuários:**
    * Registro de novos usuários.
    * Login para usuários existentes.
    * Logout.
* **Gerenciamento de Postagens (CRUD):**
    * Criação de novas postagens com título, imagem, conteúdo e tags.
    * Visualização de todas as postagens no feed.
    * Visualização de detalhes de uma postagem específica.
    * Edição de postagens criadas pelo usuário autenticado.
    * Exclusão de postagens criadas pelo usuário autenticado.
* **Busca e Navegação:**
    * Dashboard para visualização das postagens do usuário autenticado.
    * Página "Sobre" com informações do projeto.
    * Busca de postagens por tags.
* **Interface Responsiva:**
    * Adaptada para diferentes tamanhos de tela (verifique os estilos CSS para mais detalhes).

## 🛠️ Tecnologias Utilizadas

* **Frontend:**
    * [React.js](https://reactjs.org/) (v18.2.0)
    * [React Router DOM](https://reactrouter.com/) (v6.8.1) - Para roteamento de páginas.
    * CSS Modules / CSS padrão - Para estilização.
* **Backend & Database:**
    * [Firebase](https://firebase.google.com/)
        * Firebase Authentication - Para gerenciamento de usuários.
        * Firestore Database - Como banco de dados NoSQL para armazenar as postagens.
* **Ferramentas de Desenvolvimento:**
    * [Create React App](https://create-react-app.dev/) - Para a estrutura inicial do projeto.
    * NPM - Gerenciador de pacotes.

## 📂 Estrutura do Projeto (Simplificada)

mini_blog/
├── public/
│   └── index.html
├── src/
│   ├── assets/               # Imagens e outros assets estáticos
│   ├── components/           # Componentes React reutilizáveis (Navbar, Footer, PostDetail, etc.)
│   ├── context/              # Context API para gerenciamento de estado (AuthProvider)
│   ├── hooks/                # Hooks customizados (useAuthValue, useInsertDocument, etc.)
│   ├── pages/                # Componentes de página (Home, Login, CreatePost, Dashboard, etc.)
│   ├── App.js                # Componente principal e configuração de rotas
│   ├── index.js              # Ponto de entrada da aplicação
│   └── firebaseConfig.js     # Configuração da conexão com o Firebase (NÃO versionado com credenciais reais)
├── .env.example              # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## 🚀 Começando

Siga estas instruções para obter uma cópia local do projeto em funcionamento.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão >= 14.x recomendada)
* NPM (geralmente vem com o Node.js)
* Uma conta no [Firebase](https://firebase.google.com/) e um projeto Firebase configurado.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/rafconrado/mini_blog.git](https://github.com/rafconrado/mini_blog.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd mini_blog
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure as Variáveis de Ambiente do Firebase:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Copie o conteúdo do arquivo `.env.example` (se existir) ou adicione as seguintes variáveis com as suas credenciais do Firebase:

        ```env
        REACT_APP_FIREBASE_API_KEY="SUA_API_KEY"
        REACT_APP_FIREBASE_AUTH_DOMAIN="SEU_AUTH_DOMAIN"
        REACT_APP_FIREBASE_PROJECT_ID="SEU_PROJECT_ID"
        REACT_APP_FIREBASE_STORAGE_BUCKET="SEU_STORAGE_BUCKET"
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID="SEU_SENDER_ID"
        REACT_APP_FIREBASE_APP_ID="SEU_APP_ID"
        ```
        > **Importante:** Você pode encontrar essas credenciais nas configurações do seu projeto no console do Firebase.

### Scripts Disponíveis

No diretório do projeto, você pode executar:

* `npm start`
    * Executa o aplicativo no modo de desenvolvimento.
    * Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.
    * A página será recarregada se você fizer edições.

* `npm test`
    * Inicia o executor de testes no modo interativo de observação.

* `npm run build`
    * Cria o aplicativo para produção na pasta `build`.
    * Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

* `npm run eject`
    * **Nota: esta é uma operação unidirecional. Uma vez que você `eject`, não pode mais voltar!**
    * Se você não estiver satisfeito com a ferramenta de compilação e as escolhas de configuração, poderá ejetar a qualquer momento. Este comando removerá a dependência única de compilação do seu projeto.

## 📖 Uso

Após iniciar a aplicação:

1.  **Registre-se** para criar uma nova conta ou faça **Login** se já tiver uma.
2.  Na página inicial (**Home**), você verá as postagens mais recentes de todos os usuários.
3.  Use a barra de **Busca** para encontrar postagens por tags específicas.
4.  No menu, navegue até **Novo Post** para criar sua própria postagem.
5.  Acesse o **Dashboard** para ver e gerenciar suas postagens (editar ou excluir).

## 🤝 Contribuindo

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer serão **muito apreciadas**.

1.  Faça um Fork do Projeto
2.  Crie sua Feature Branch (`git checkout -b feature/NovaFuncionalidade`)
3.  Commit suas mudanças (`git commit -m 'Adiciona NovaFuncionalidade'`)
4.  Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5.  Abra um Pull Request

## 📄 Licença

Este projeto não possui um arquivo de licença especificado no repositório. Recomenda-se adicionar um arquivo `LICENSE` (por exemplo, MIT License) para definir como outros podem usar seu código.

*(Se você adicionar um arquivo LICENSE.md com, por exemplo, a licença MIT, o selo no topo funcionará.)*

## 📧 Contato

Rafael Conrado - [@seu_linkedin](https://www.linkedin.com/in/seu_linkedin_aqui/) *(adicione seu link)* - seu_email@example.com *(adicione seu email)*

Link do Projeto: [https://github.com/rafconrado/mini_blog](https://github.com/rafconrado/mini_blog)

---

Espero que este README esteja completo e do seu agrado! Lembre-se de:
* Adicionar um arquivo `LICENSE` ao seu repositório.
* Atualizar os placeholders (como link do deploy, links de contato, e confirmar se as versões das tecnologias estão corretas se isso for importante para você).
* Criar um arquivo `.env.example` no seu repositório com as chaves `REACT_APP_FIREBASE_...` (sem os valores) para guiar outros usuários.
