# Backend — meusitevendas

## 1. Instale as dependências

```bash
npm install
```

## 2. Configure o MongoDB

Copie `.env.example` para `.env` e ajuste `MONGODB_URI`.

Você pode usar MongoDB local ou MongoDB Atlas.

## 3. Popule o banco

```bash
npm run seed
```

Contas de demonstração:
- Admin: `admin@meusitevendas.com` / `123456`
- Cliente: `cliente@meusitevendas.com` / `123456`

## 4. Execute

```bash
npm run dev
```

## Exercícios
As rotas ainda possuem pontos `TODO - ALUNO`. O objetivo é implementar a persistência, autenticação, CRUD, pedidos, estoque, filtros e paginação.
