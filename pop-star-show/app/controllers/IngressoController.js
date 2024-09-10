import Ingresso from "../models/Ingresso";
import connectMongo from "../utils/dbConnect";


export const addIngresso = async (req, res) => {
    const {nomeUser, nomeIngresso, nome,valor,local,horario,data } = req.body;
    await connectMongo();
    try {
        const newCompra = new Compra({
            nomeUser,
            nomeIngresso,
            nome,
            valor,
            local,
            horario,
            data,
            userId: req.user.userId, // Associa a tarefa ao usuário logado
        });
        await newCompra.save();
        res.status(201).json({ todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar tarefa' });
    }
};