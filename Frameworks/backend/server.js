import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((erro) => {
    console.error("Erro ao conectar ao MongoDB:", erro);
  });


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    projeto: "SobrouVendi",
    status: "API funcionando",
    desafio: "TODO - ALUNO: conectar MongoDB e implementar regras."
  });
});

/*app.get("/api/produtos", async (req, res) => {
  // TODO - ALUNO: trocar resposta temporária por consulta no MongoDB.
  res.json([
    { id: 1, nome: "Notebook Pro 15", categoria: "Informática", preco: 2499.90, estoque: 8 },
    { id: 2, nome: "Mouse sem fio", categoria: "Informática", preco: 89.90, estoque: 25 }
  ]);
});*/

app.get("/api/produtos", async (req, res) => {
  try {
    const produtos = await Product.find({ ativo: true });

    res.json(produtos);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: "Erro ao buscar produtos."
    });
  }
});


app.post("/api/auth/login", async (req, res) => {
  // TODO - ALUNO: buscar usuário, comparar senha com bcrypt e emitir JWT.
  res.status(501).json({ erro: "Login ainda não implementado pelo aluno." });
});

app.post("/api/auth/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (
      typeof nome !== "string" || !nome.trim() ||
      typeof email !== "string" || !email.trim() ||
      typeof senha !== "string" || !senha
    ) {
      return res.status(400).json({ erro: "Preencha nome, e-mail e senha." });
    }

    if (senha.length < 6) {
      return res.status(400).json({ erro: "A senha deve ter pelo menos 6 caracteres." });
    }

    const emailNormalizado = email.trim().toLowerCase();

    const existente = await User.findOne({
      email: emailNormalizado
    });

    if (existente) {
      return res.status(409).json({
        erro: "Este e-mail ja esta cadastrado."
      });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await User.create({
      nome: nome.trim(),
      email: emailNormalizado,
      senha: senhaHash,
      perfil: "cliente"
    });

    return res.status(201).json({
      mensagem: "Cadastro realizado com sucesso!",
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email
      }
    });
  } catch (erro) {
    if (erro.code === 11000) {
      return res.status(409).json({
        erro: "Este e-mail ja esta cadastrado."
      });
    }

    console.error(erro);
    return res.status(500).json({ erro: "Erro ao cadastrar usuário." });
  }
});

app.post("/api/pedidos", async (req, res) => {
  // TODO - ALUNO: criar pedido, validar estoque e atualizar produtos.
  res.status(501).json({ erro: "Pedidos ainda não implementados." });
});

app.listen(PORT, () => {
  console.log(`SobrouVendi API: http://localhost:${PORT}`);
});

// TODO - ALUNO: conectar MongoDB com mongoose.connect(process.env.MONGODB_URI).
