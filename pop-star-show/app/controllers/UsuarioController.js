const connectMongo = require("../utils/dbConnect");
const Compra = require("../models/Compra");
const Usuario = require("../models/Usuario");
const Ingresso = require("../models/Ingresso");

// CRUD de ingressos
//Criar ingresso(método do administrador)
const addIngresso = async (req, res) => {
  const { nome, valor, local, horario, data, userId } = req.body;

  await connectMongo();

  const tipoUser = await Usuario.findOne({ _id: userId });
  console.log(tipoUser);
  if (tipoUser.tipo != "administrador") {
    res
      .status(404)
      .json({ message: "O usuario não tem permissão para essa ação" });
    return;
  } else {
    try {
      const newIngresso = new Ingresso({
        userId,
        nome,
        valor,
        local,
        horario,
        data,
        // userId: req.user.userId, // Associa a tarefa ao usuário logado
      });
      await newIngresso.save();
      res.status(201).json({ todo: newIngresso });
    } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar ingresso" });
      console.error(res);
    }
  }
};

// Listar compras(método do usuário)
const getCompras = async (req, res) => {

  const {usuarioId} = req.body;
  await connectMongo();
  try {
    const todos = await Compra.find({ usuarioId });
    console.log(usuarioId);
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Listar todos os ingressos disponíveis (método para usuário/administrador)
const getIngressos = async (req, res) => {
  await connectMongo();
  try {
    const ingressos = await Ingresso.find();
    res.status(200).json({ message: "Ingressos listados." });
    console.log(ingressos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar ingressos." });
    console.error(err);
  }
};

// Deletar ingresso (método do administrador)
const deletarIngressos = async (req, res) => {
  await connectMongo();
  try {
  } catch (err) {}
};

//Comprar ingresso (método do usuário)
const comprarIngresso = async (req, res) => {
  const { usuarioId, nomeIngresso } = req.body;
  await connectMongo();
  const nomeUsuario = Usuario.findOne({nome: usuarioId});
  // const nomeIngresso = Ingresso.findOne({nome: ingressoId});
  console.log(nomeUsuario);
  // console.log(nomeIngresso);
  try {
    const newCompra = new Compra({
      nomeUsuario,
      nomeIngresso,
      usuarioId,
       // Associa a tarefa ao usuário logado
    });
    await newCompra.save();
    res.status(201).json({ todo: newCompra });
  } catch (err) {
    res.status(500).json({ message: "Erro ao finalizar a compra." });
    console.error(err)
  }
};

// Método para cadastrar usuário (método do usuário)
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
    res.status(201).json({ message: `Usuário criado com sucesso ${res}` });
  } catch (err) {
    res.status(500).json({ message: `Erro ao criar o usuário ${err}` });
  }
};

// Exportar as funções para outros arquivos
module.exports = {
  getCompras,
  comprarIngresso,
  cadUsuario,
  addIngresso,
  getIngressos,
};
