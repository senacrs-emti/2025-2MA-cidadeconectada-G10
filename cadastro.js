document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const idade = document.getElementById("idade").value;
  const necessidades = [...document.querySelectorAll("input[name='necessidades']:checked")].map(n => n.value);

  const nomeResp = document.getElementById("nomeResp").value.trim();
  const telResp = document.getElementById("telResp").value.trim();
  const emailResp = document.getElementById("emailResp").value.trim();

  // Se tiver qualquer necessidade OU se quiser cadastrar responsável mesmo maior de idade
  const precisaResponsavel = necessidades.length > 0 && !necessidades.includes("nenhuma");

  if (precisaResponsavel && nomeResp === "") {
      alert("Você selecionou uma necessidade. Informe o responsável.");
      return;
  }

  alert("Cadastro concluído com sucesso!");
});
