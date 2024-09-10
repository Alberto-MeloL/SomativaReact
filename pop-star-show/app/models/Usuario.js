import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nome:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    cpf:{
        type:String,
        required: true,
        match: /^[0-9]{11}$/,
        maxlenght:11
    },
    senha:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        enum: ["comum", "administrador"],
        default: "comum",
    }
});