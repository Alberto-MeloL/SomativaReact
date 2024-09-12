import "../styles/adm/CadastroING.css";

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
        <h1>Adionar Evento</h1>
      </div>
      <div>
        <div className="formularioCa">
          <form className="formularioC">
            <input placeholder="Nome" />
            <input placeholder="Local" />
            <input placeholder="Preço" />
            <input placeholder="Data" />
            <input placeholder="Horario" />
          </form>
        </div>
        <div className="bntADD">
          <button>Adionar</button>
        </div>
      </div>
    </div>
  );
};

export default Listagem;
