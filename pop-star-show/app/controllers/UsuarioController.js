import connectMongo from "../utils/dbConnect";
import Compra from "../models/Compra";

// Listar compras
export const getCompras = async (req, res) => {
    await connectMongo();
    try {
        const todos = await Compra.find({ UserId: req.user.userId });
        res.status(200).json({ todos });
    } catch (error) {
        res.status(500).json({ error });
    }
}

//Comprar ingresso
export const comprarIngresso = async (req, res) => {
    const { nomeUser, nomeIngresso } = req.body;
    await connectMongo();
    try {
        const newCompra = new Compra({
            nomeUser,
            nomeIngresso,
            userId: req.user.userId, // Associa a tarefa ao usuário logado
        });
        await newCompra.save();
        res.status(201).json({ todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar tarefa' });
    }
};
