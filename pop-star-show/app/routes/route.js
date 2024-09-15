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

// Definir as rotas e associá-las aos controladores
router.post("/ingresso", addIngresso);
router.get("/ingresso", getIngresso)
router.get("/ingresso", getCompras); 
router.delete("/ingresso", deletarIngresso);
router.patch("/ingresso", atualizarIngresso);
router.post("/comprar-ingresso", comprarIngresso); 
router.post("/cad-usuario", cadUsuario);

module.exports = router;
