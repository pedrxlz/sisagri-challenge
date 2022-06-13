import React from "react";

import "../css/Login.css";

function Login() {
  return (
    <div id="login">
      <h1>Acesse sua conta</h1>
      <div>
        <input className="empresa" placeholder="Empresa" />
        <input className="usuario" placeholder="Usuário" />
        <input
          className="senha"
          type="password"
          id="senha"
          placeholder="Senha"
        />
      </div>
      <a className="esqueceu-senha" href="/home">
        Esqueceu sua senha?
      </a>
      <a href="/home" className="login-button">
        Login
      </a>
      <div className="cadastro">
        <h3>
          Não possui uma conta? <br />
          <a href="/cadastro"> Solicitar cadastro</a>
        </h3>
      </div>
    </div>
  );
}

export default Login;
