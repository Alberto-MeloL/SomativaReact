// routes/index.js
const express = require("express");
const router = express.Router(); // Correção: chame a função express.Router() corretamente

const {
  getCompras,
  comprarIngresso,
  cadUsuario,
  addIngresso,
  getIngresso,
  deletarIngresso,
  atualizarIngresso,
} = require("../controllers/UsuarioController"); // Ajuste o caminho conforme sua estrutura
const loginUsuario = require("../controllers/LoginUsuario");

// Definir as rotas e associá-las aos controladores
router.post("/cad-usuario", cadUsuario);
router.post("/login", loginUsuario);
router.post("/ingresso", addIngresso);
router.get("/ingresso", getIngresso)
router.patch("/ingresso", atualizarIngresso);
router.delete("/ingresso", deletarIngresso);
router.get("/compras", getCompras); 
router.post("/comprar-ingresso", comprarIngresso); 

module.exports = router;
