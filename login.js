function login(usuario, senha) {
  if (usuario && senha) {
    console.log("Login iniciado para:", usuario);
  } else {
    console.log("Usuário ou senha inválidos");
  }
}
