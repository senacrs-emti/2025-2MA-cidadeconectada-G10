document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();

  const necessidades = [...document.querySelectorAll("input[name='necessidades']:checked")].map(n => n.value);

  const nomeResp = document.getElementById("nomeResp").value.trim();
  const telResp = document.getElementById("telResp").value.trim();
  const emailResp = document.getElementById("emailResp").value.trim();

  const precisaResponsavel = necessidades.length > 0 && !necessidades.includes("nenhuma");

  if (precisaResponsavel && nomeResp === "") {
      alert("Você selecionou uma necessidade. Informe o responsável.");
      return;
  }

  // 🔥 SALVA NOME E IDADE NO LOCALSTORAGE (usado nas páginas secundárias)
  localStorage.setItem("usuarioNome", nome);
  localStorage.setItem("usuarioIdade", idade);

  alert("Cadastro concluído com sucesso!");

  // envia para o salvar.php
  this.submit();
});

