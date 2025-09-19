# URL Shortener API

![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg) ![Status](https://img.shields.io/badge/status-complete-brightgreen.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## Sobre

Esta é uma API RESTful projetada para gerenciar encurtamento de URLs, redirecionamento e análise de links.

---

## 🧰ecnologias Utilizadas

- Node.js & Fastify  
- TypeScript  
- MongoDB  

---

## Estrutura do Projeto

```bash
📦 backend
├── 📁 src/
│   ├── 📁 connection/
│   ├── 📁 controllers/
│   ├── 📁 helpers/
│   │   ├── 📁 interfaces/
│   │   ├── 📁 types/
│   │   └── 📁 utils/
│   ├── 📁 models/
│   ├── 📁 routes/
│   └── server.ts
```
---

## Principais Endpoints e Funcionalidades

### UrlController

| Método | Rota                 | Descrição                                             |
| ------ | -------------------- | ----------------------------------------------------- |
| POST   | /api/url/shortUrl    | Gera uma nova URL encurtada                           |
| GET    | /api/url/getAllUrls  | Retorna todas as URLs encurtadas                      |
| GET    | /api/url/\:shortCode | Redireciona para a URL original baseado no short code |

---

## 🖥Rodando o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/Hugolelis/ShortUrlAPI.git
cd ShortUrlAPI
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente (.env)

```bash
DB_URI=mongodb://localhost:27017/shortUrlAPI
PORT=3000
HOST=0.0.0.0
```

### ▶4. Iniciar o Servidor

```bash
npm start
```
