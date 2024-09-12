import "../styles/adm/Listagem.css";

const Listagem = () => {
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
              <a href="#">Ver ingressos</a>
            </div>
          </nav>
        </div>
      </header>
      <div className="titulo">
        <h1>Lista de Eventos</h1>
      </div>
      <div className="add">
        <a href="#">Adionar Eventos</a>
      </div>
      <div className="container-ingressos">
        <div className="ingresso">
          <img src="/img/deep-purple.png" alt="Imagem ingresso" />
          <div className="titulo-ingresso">Deep Purple</div>
          <div className="local">blkalblbla</div>
          <div className="data-local">
            <img
              src="/img/location_on.png"
              alt="Icone local"
              className="icones"
            />{" "}
            12121-11
          </div>
          <div className="editar-excluir-ingresso">
            <button id="btn-editar">Editar</button>
            <button id="btn-excluir">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listagem;
