const mongoose = require("mongoose");

const IngressoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  local: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  horario: {
    type: Date,
    required: true,
    default: Date.now, // Valor padrão é a data e hora atual
  },
});

const Ingresso =
  mongoose.models.Ingresso || mongoose.model("Ingresso", IngressoSchema);
module.exports = Ingresso;
