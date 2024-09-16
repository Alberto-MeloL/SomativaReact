const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
const connectMongo = require("../utils/dbConnect");
require("dotenv").config()

const secretKey = process.env.SECRET_KEY;

console.log(secretKey);

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  await connectMongo();

  try {
    // Verificar se o usuário existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Verificar se a senha está correta
    const isMatch = await bcrypt.compare(senha, usuario.senha);
    if (!isMatch) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    // Criar um token JWT
    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      secretKey,
      { expiresIn: "1h" } // O token expira em 1 hora
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor" });
  }
};

module.exports = loginUsuario;