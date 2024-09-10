"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    setTodos(data.data);
  };

  const addTodo = async () => {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    });
    const data = await response.json();
    setTodos([...todos, data.data]);
    setNewTodo("");
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const updateTodo = async (id, newStatus) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: newStatus }),
    });
    const data = await response.json();
    setTodos(todos.map((todo) => (todo._id === id ? data.data : todo)));
  };

  return (
    <div>
      <h1>Ingressos Disponiveis</h1>
      

<div class="container">
        <h1>Ingressos Disponíveis</h1>
        <div class="card-grid">

            <div class="card">
                <img src="plantao-festivel.jpg" alt="Plantão Festivel"/>
                <h2>Plantão Festivel</h2>
                <p>Goiânia - PASSEIO DAS ÁGUAS SHOPPING</p>
                <p><span class="icon">📅</span> 14:00 - 15/09/2024</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="iron-maiden.jpg" alt="Iron Maiden the Future"/>
                <h2>Iron Maiden the Future</h2>
                <p>Goiânia - PASSEIO DAS ÁGUAS SHOPPING</p>
                <p><span class="icon">📅</span> 14:00 - 15/09/2024</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="ghost.jpg" alt="Ghost"/>
                <h2>Ghost</h2>
                <p>Goiânia - PASSEIO DAS ÁGUAS SHOPPING</p>
                <p><span class="icon">📅</span> 14:00 - 15/09/2024</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="grilo-daprte.jpg" alt="O grilo + Daparte"/>
                <h2>O grilo + Daparte</h2>
                <p>Goiânia - PASSEIO DAS ÁGUAS SHOPPING</p>
                <p><span class="icon">📅</span> 14:00 - 15/09/2024</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="knotfest.jpg" alt="KNOTFEST"/>
                <h2>KNOTFEST</h2>
                <p>Goiânia - PASSEIO DAS ÁGUAS SHOPPING</p>
                <p><span class="icon">📅</span> 14:00 - 15/09/2024</p>
                <button>Comprar</button>
            </div>

            <div class="card">
                <img src="deep-purple.jpg" alt="DEEP PURPLE"/>
                <h2>DEEP PURPLE</h2>
                <p>Goiânia - PASSEIO DAS ÁGUAS SHOPPING</p>
                <p><span class="icon">📅</span> 14:00 - 15/09/2024</p>
                <button>Comprar</button>
            </div>

        </div>
    </div>


    </div>
  );
}
