const mongoose = require("mongoose");

const CompraSchema = new mongoose.Schema({
  nomeUsuario: {
    type: String,
    ref: "Usuario",
    required: true,
  },
  nomeIngresso: {
    type: String,
    ref: "Ingresso",
    required: true,
  },
  usuarioId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required:true
  }
});

const Compra = mongoose.models.Compra || mongoose.model("Compra", CompraSchema);

module.exports = Compra;
