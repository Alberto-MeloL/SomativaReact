import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
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
            <img src="/img/deep-purple.png" alt="Imagem ingresso"/>
            <div className="titulo-ingresso">Deep Purple</div>
            <div className="local">blkalblbla</div>
            <div className="data-local">12121-11</div>
            <div className="comprar-ingresso">
                <button id="btn-comprar">Comprar</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Ingresso;
