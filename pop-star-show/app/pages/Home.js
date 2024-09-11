import "./styles/Home.css";
const Home =()=> {
  return (
    <div className="container-home">
      <header>
        <div className="header">
          <div className="logo">
            <a href="#">

            <img src="/img/logo.png" alt="Logo site" />
            </a>
          </div>
          <nav>
            <div className="links">
              <a href="#">Sobre nós</a>
              <a href="#">Login/Cadastro</a>
            </div>
          </nav>
        </div>
      </header>

      <div className="sobre-nos">

        <div className="titulo">

        <h1>Sobre nós</h1>
        </div>

        <div className="texto-1">
          <p>
            Bem-vindo ao PopStarShow! Somos o seu destino principal para a
            compra de ingressos para os eventos musicais mais emocionantes e
            memoráveis.
          </p>
        </div>
        <div className="texto-2">
          <p>
            O que nos diferencia? É o nosso compromisso com a satisfação do
            cliente e a facilidade de uso. Nosso site é projetado para tornar a
            compra de ingressos o mais simples possível, com opções de filtro
            para encontrar exatamente o que você está procurando e suporte ao
            cliente dedicado para ajudar com qualquer dúvida ou problema.
          </p>
        </div>
        <div className="texto-3">
          <p>
            Se você está procurando uma maneira confiável e divertida de
            garantir sua presença nos eventos mais badalados, o PopStarShow é o
            lugar certo para você. Acompanhe nossas redes sociais e assine nossa
            newsletter para estar sempre atualizado sobre novos eventos e
            ofertas especiais.
          </p>
        </div>
      </div>

      <footer>
        <p>&Copy; 2024 PopStarShow. Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Home;