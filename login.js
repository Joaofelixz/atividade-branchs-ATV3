function login(usuario, senha) {
  if (usuario && senha) {
    console.log("Login iniciado para:", usuario);
  } else {
    console.log("Usuário ou senha inválidos");
  }
}
// Correção de bug urgente - exemplo de mensagem errada
console.log("Correção de bug no login");

function login(usuario, senha) {
  if (!usuario || !senha) {
    console.log("Preencha todos os campos");
    return;
  }
  console.log(`Usuário ${usuario} logado com sucesso!`);
}
