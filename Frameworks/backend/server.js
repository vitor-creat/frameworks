import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const connectiondb = async () => { await mongoose.connect(process.env.MONGODB_URI); console.log("Banco Conectado")}

app.get("/", async (req, res) => {
  res.json({
    projeto: "SobrouVendi",
    status: "API funcionando",
    desafio: "TODO - ALUNO: conectar MongoDB e implementar regras."
  });
});

app.get("/api/produtos", async (req, res) => {
  try {
    const produtos = await Product.find()
    res.status(200).json(produtos)
  } catch (erro) {
    // console.error(erro);
    res.status(500).json({ mensagem: "Erro ao buscar produtos", error: erro.message })
  }
});

app.post("/api/auth/login", async (req, res) => {
  // TODO - ALUNO: buscar usuário, comparar senha com bcrypt e emitir JWT.
  res.status(501).json({ erro: "Login ainda não implementado pelo aluno." });
});

app.post("/api/auth/register", async (req, res) => {
  // TODO - ALUNO: validar dados, criptografar senha e salvar usuário.
  res.status(501).json({ erro: "Cadastro ainda não implementado pelo aluno." });
});

app.post("/api/pedidos", async (req, res) => {
  // TODO - ALUNO: criar pedido, validar estoque e atualizar produtos.
  res.status(501).json({ erro: "Pedidos ainda não implementados." });
});

app.listen(PORT, () => {
  console.log(`SobrouVendi API: http://localhost:${PORT}`);
  connectiondb()
});

// TODO - ALUNO: conectar MongoDB com mongoose.connect(process.env.MONGODB_URI).