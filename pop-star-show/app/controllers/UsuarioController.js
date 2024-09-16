const connectMongo = require("../utils/dbConnect");
const bcrypt = require("bcrypt");
const Compra = require("../models/Compra");
const Usuario = require("../models/Usuario");
const Ingresso = require("../models/Ingresso");
// porque tem que reiniciar o node

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
    } catch (err) {
      res.status(500).json({ message: "Erro ao adicionar ingresso" });
      console.error(err);
    }
  }
};

// Deletar ingresso (método do administrador)
const deletarIngresso = async (req, res) => {
  const { ingressoId } = req.body;
  await connectMongo();
  console.log(ingressoId);
  try {
    const deletarIngresso = await Ingresso.findByIdAndDelete(ingressoId);
    if (!deletarIngresso) {
      return res.status(404).json({ message: "Ingresso não encontrado." });
    }

 res.status(200).json({ message: "Ingresso deletado com sucesso." });
  } catch (err) {
    res.status(500).json({ message: "Não foi possível deletar o ingresso." });
    console.error(err);
  }
};

// Método para atualizar o ingresso (método do administrador)
const atualizarIngresso = async (req, res) => {
  const { ingressoId, nome, valor, local, data, horario } = req.body;

  await connectMongo();
// console.log(novosDados);
  try {
    const ingressoAtualizado = await Ingresso.findByIdAndUpdate(
      ingressoId,
      { nome, valor, local, data, horario},
      { new: true , runValidators:true}
    );

    if (!ingressoAtualizado) {
      return res.status(404).json({ message: "Ingresso não encontrado." });
    }

    return res.status(200).json(ingressoAtualizado);
  } catch (err) {
    res.status(500).json({ message: "Não foi possível atualizar o ingresso." });
    console.error(err);
  }
  console.log(ingressoId);
};

// Listar compras(método do usuário)
const getCompras = async (req, res) => {
  const { usuarioId } = req.body;
  await connectMongo();
  try {
    const compra = await Compra.find({ usuarioId });
    console.log(usuarioId);
    res.status(200).json({ compra });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Listar todos os ingressos disponíveis (método para usuário/administrador)
const getIngresso = async (req, res) => {
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

const comprarIngresso = async (req, res) => {
  const { usuarioId, ingressoId } = req.body;

  // Conectar ao MongoDB
  await connectMongo();

  try {
    // Buscar usuário e ingresso
    const usuario = await Usuario.findOne({ _id: usuarioId }).exec();
    const ingresso = await Ingresso.findOne({ _id: ingressoId }).exec();
    
    // Verificar se usuário e ingresso foram encontrados
    if (!usuario || !ingresso) {
      return res.status(404).json({ message: "Usuário ou ingresso não encontrado." });
    }

    // Criar nova compra
    const newCompra = new Compra({
      nomeUsuario: usuario.nome, // Extrair o nome do usuário
      nomeIngresso: ingresso.nome, // Extrair o nome do ingresso
      usuarioId: usuario._id, // Usar o ID do usuário
      ingressoId: ingresso._id // Usar o ID do ingresso
    });

    // Salvar nova compra
    await newCompra.save();
    
    // Responder com status 201 e dados da compra
    res.status(201).json({ compra: newCompra });
  } catch (err) {
    // Responder com status 500 e mensagem de erro
    res.status(500).json({ message: "Erro ao finalizar a compra." });
    console.error(err);
  }
};

// Método para cadastrar usuário (método do usuário)
const cadUsuario = async (req, res) => {
  const { nome, email, cpf, senha, tipo } = req.body;

  await connectMongo();
const hashedPassword = await bcrypt.hash(senha, 10);
  try {
    const newUsuario = new Usuario({
      nome,
      email,
      cpf,
      senha: hashedPassword,
      tipo,
    });
    await newUsuario.save();
    res.status(201).json({newUsuario});
  } catch (err) {
    res.status(500).json({ message: `Erro ao criar o usuário ${err}` });
  }
};


// método para comprar criar ingresso(adm)
// const addIngresso = async (req, res) => {
//   const { nome, valor, local, horario, data, userId } = req.body;
//   await connectMongo();
//   try {
//     const newIngresso = new Ingresso({
//       nome,
//       valor,
//       local,
//       horario,
//       data,
//       userId
//     });
//     await newIngresso.save();
//     res.status(201).json({ ingresso: newIngresso });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: `Erro ao adicionar ingresso: ${error.message}` }); // Use error.message
//   }
// };


module.exports = {getCompras, comprarIngresso,cadUsuario, addIngresso};

// Exportar as funções para outros arquivos
module.exports = {
  getCompras,
  comprarIngresso,
  cadUsuario,
  addIngresso,
  getIngresso,
  deletarIngresso,
  atualizarIngresso,
};

