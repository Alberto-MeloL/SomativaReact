import "./styles/Cadastro.css";

const Cadastro = () => {
  return (
    <div className="container-cadastro">
      <div className="container-formulario">
        <form className="formulario">
          <img src="/img/logo.png" alt="Logo site" />
          <input type="text" placeholder="Nome" className="inputs" />
          <input type="email" placeholder="Email" className="inputs" />
          <input type="text" placeholder="Cpf" className="inputs" />
          <input type="password" placeholder="Senha" className="inputs" />

          <div className="links">
            <button id="btn-cadastrar">Cadastrar</button>
            <a href="/login">Entrar</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
