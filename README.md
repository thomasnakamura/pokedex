# Pokédex 📘

Uma Pokédex moderna desenvolvida com **React + TypeScript** no frontend e **NestJS** no backend, utilizando a [PokeAPI](https://pokeapi.co/) como fonte de dados. O projeto tem como foco performance, organização e uma UI responsiva com uma experiência fluida para o usuário.

![image](https://github.com/user-attachments/assets/2a93ec6a-dc87-4c80-9165-83865f6f6fb2)

---

## ✨ Funcionalidades

- 🔎 **Busca por nome** com filtragem por substring (ex: `saur` retorna Bulbasaur, Ivysaur...)
- ♾️ **Scroll infinito** para carregamento contínuo dos Pokémon
- 🧠 **Cache inteligente**: Pokémon pesquisados fora da lista inicial são armazenados em memória
- 📋 **Detalhamento completo** ao clicar em um card (nome, altura, peso, tipos, habilidades e som)
- 🎧 **Reprodução de som (cry)** com volume reduzido por padrão

---

## 🚀 Tecnologias

**Frontend:**

- React
- TypeScript
- Tailwind CSS
- Vite

**Backend:**

- NestJS
- Axios
- CORS

---

## 🗂️ Estrutura do Projeto
```bash
├── poke-backend → Backend NestJS
│ └── src
│ └── pokemon → Módulo responsável pela comunicação com a PokeAPI
│
├── poke-frontend → Frontend React
│ ├── components → Componentes visuais (Card, Modal, etc)
│ ├── page → Página principal (Home.tsx)
│ ├── services → Comunicação com o backend
│ └── types → Tipagens TypeScript para os dados
```
## ▶️ Como rodar o projeto

1. Inicie o Backend
```bash
cd poke-backend
yarn install
yarn start:dev
```
3. Inicie o Frontend
```bash
cd poke-frontend
yarn install
yarn dev
```
O backend será servido em `http://localhost:3000` e o frontend em `http://localhost:5173`.
