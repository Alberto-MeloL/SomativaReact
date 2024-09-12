const connectMongo = require( "../utils/dbConnect");
const Compra = require( "../models/Compra");
const Usuario = require( "../models/Usuario");
const Ingresso = require("../models/Ingresso");

// Listar compras(ingressos)
 const getCompras = async (req, res) => {
  await connectMongo();
  try {
    const todos = await Compra.find({ UserId: req.user.userId });
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//Comprar ingresso
 const comprarIngresso = async (req, res) => {
  const { nomeUser, nomeIngresso } = req.body;
  await connectMongo();
  try {
    const newCompra = new Compra({
      nomeUser,
      nomeIngresso,
      userId: req.user.userId, // Associa a tarefa ao usuário logado
    });
    await newCompra.save();
    res.status(201).json({ todo: newTodo });
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar tarefa" });
  }
};

// método para cadastrar usuário
 const cadUsuario = async (req, res) => {
  const { nome, email, cpf, senha, tipo } = req.body;

  await connectMongo();

  try {
    const newUsuario = new Usuario({
      nome,
      email,
      cpf,
      senha,
      tipo,
    });
    await newUsuario.save();
    res.status(201).json({message: `Usuário criado com sucesso ${res}`});
  } catch (err) {
    res.status(500).json({message: `Erro ao criar o usuário ${err}`})
  }
};

// método para comprar criar ingresso(adm)
 const addIngresso = async (req, res) => {
  const {nome, valor, local, horario, data } =
    req.body;
  await connectMongo();
  try {
    const newIngresso = new Ingresso({
      nome,
      valor,
      local,
      horario,
      data,
      // userId: req.user.userId, // Associa a tarefa ao usuário logado
    });
    await newIngresso.save();
    res.status(201).json({ todo: newTodo });
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar ingresso" });
  }
};

module.exports = {getCompras, comprarIngresso,cadUsuario, addIngresso};
