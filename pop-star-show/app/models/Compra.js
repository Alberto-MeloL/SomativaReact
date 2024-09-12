const mongoose = require("mongoose");

const CompraSchema = new mongoose.Schema({
  nomeUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    requied: true,
  },
  nomeIngresso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ingresso",
    required: true,
  },
});

const Compra = mongoose.models.Compra || mongoose.model("Compra", CompraSchema);

module.exports = Compra;
