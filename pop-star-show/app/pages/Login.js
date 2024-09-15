import "./styles/Login.css";

const Login = () => {
  return (
    <div className="container-login">
      <div className="container-formulario">
        <form className="formulario">
        <img src="/img/logo.png" alt="Logo site" />  
            <input type="email" placeholder="Email" className="inputs"/>
            <input type="password" placeholder="Senha" className="inputs"/>

            <div className="links">
                <button id="btn-entrar">Entrar</button>
                <a href="/cadastro">Cadastrar</a>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
