// routes/index.js
const express = require("express");
const router = express.Router(); // Correção: chame a função express.Router() corretamente

const {
  getCompras,
  comprarIngresso,
  cadUsuario,
  addIngresso,
  getIngressos,
} = require("../controllers/UsuarioController"); // Ajuste o caminho conforme sua estrutura

// Definir as rotas e associá-las aos controladores
router.get("/compras", getCompras); 
router.post("/comprar-ingresso", comprarIngresso); 
router.get("/ingressos", getIngressos)
router.post("/cad-usuario", cadUsuario);
router.post("/add-ingresso", addIngresso);

module.exports = router;
