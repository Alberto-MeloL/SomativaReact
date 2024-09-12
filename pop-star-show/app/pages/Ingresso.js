import "./styles/Ingresso.css";

const Ingresso = () => {
  return (
    <div className="container-ingresso">
      <header>
        <div className="header">
          <div className="logo">
            <a href="#">
              <img src="/img/logo.png" alt="Logo site" />
            </a>
          </div>
          <nav>
            <div className="links">
              <a href="#">Home</a>
              <a href="#">Comprar</a>
              <a href="#">Ver ingressos</a>
            </div>
          </nav>
        </div>
      </header>
      <div className="titulo">
        <h1>Ingressos Disponiveis</h1>
      </div>

      <div className="container-ingressos">
        <div className="ingresso">
          <img src="/img/deep-purple.png" alt="Imagem ingresso" className="imagem-ingresso"/>
          <div className="titulo-ingresso">Deep Purple</div>
          <div className="local">
            <img
              src="/img/location_on.png"
              alt="Icone local"
              className="icones"
            />
            Goiânia - PASSEIO DAS ÁGUAS SHOPPING
          </div>
          <div className="data-local">
            <img src="/img/calendar.png" alt="Icone local" className="icones" />
            14:00 - 15/09/2024
          </div>
          <div className="comprar-ingresso">
            <div className="info-valor">

            <img src="/img/dollar.png" alt="Icone local" className="icones" />
            R$ - 140.00
            </div>
            <div className="btn-comprar">


            <button id="btn-comprar">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingresso;
