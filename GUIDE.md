# PORTFOLIO

## Kiến trúc thư mục (monorepo)

```
portfolio-blog/
├─ client/                 # React SPA (Vite + React Router)
│  ├─ public/
│  └─ src/
│     ├─ components/       # Navbar, Footer, Card, Loader...
│     ├─ pages/            # About, Projects, Blog, PostEditor, Admin, Login...
│     ├─ lib/              # api.js (axios instance), auth.js
│     ├─ App.jsx
│     └─ main.jsx
├─ server/                 # Node.js + Express + Prisma (MySQL)
│  ├─ src/
│  │  ├─ routes/           # auth.js, posts.js, projects.js
│  │  ├─ middleware/       # auth.js (JWT guard)
│  │  ├─ index.js          # bootstrap app
│  │  └─ app.js (optional)
│  ├─ prisma/
│  │  └─ schema.prisma
│  └─ .env                 # DATABASE_URL, JWT_SECRET, CLIENT_ORIGIN
├─ package.json            # (tuỳ, có thể để riêng ở client/server)
└─ README.md

```

---

## Backend

```
mkdir -p server && cd server

```

---

## Frontend

```
mkdir -p server && cd server

```
