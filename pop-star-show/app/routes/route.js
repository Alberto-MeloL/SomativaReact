// routes/index.js
const express = require("express");
const router = express.Router(); // Correção: chame a função express.Router() corretamente

const {
  getCompras,
  comprarIngresso,
  cadUsuario,
  addIngresso,
} = require("../controllers/UsuarioController"); // Ajuste o caminho conforme sua estrutura

// // Definir as rotas e associá-las aos controladores
// router.get("/compras", getCompras); // Descomentado e corrigido
// router.post("/comprar-ingresso", comprarIngresso); // Descomentado e corrigido
router.post("/cad-usuario", cadUsuario);
router.post("/add-ingresso", addIngresso);

module.exports = router;
