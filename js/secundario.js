const frases = [
  { imagem: "/../img/falar.png", frase: "MEU NOME É X", categoria: "falar" },
  { imagem: "/../img/idade.png", frase: "EU TENHO X ANOS", categoria: "falar" },
  { imagem: "../img/tudo-bem.png", frase: "TUDO BEM?", categoria: "falar" },
  { imagem: "../img/sim.png", frase: "SIM", categoria: "falar" },
  { imagem: "../img/não.png", frase: "NÃO", categoria: "falar" },
  { imagem: "../img/por-favor.png", frase: "POR FAVOR", categoria: "falar" },
  { imagem: "../img/obrigado.png", frase: "OBRIGADO", categoria: "falar" },
  { imagem: "../img/nao-entendi.png", frase: "NÃO ENTENDI", categoria: "falar" },

  { imagem: "../img/podxe-me-ajudar.png", frase: "PODE ME AJUDAR?", categoria: "ajuda" },
  { imagem: "../img/como-faco.png", frase: "COMO FAÇO ISSO?", categoria: "ajuda" },
  { imagem: "../img/preciso-de-ajuda.png", frase: "PRECISO DE AJUDA", categoria: "ajuda" },
  { imagem: "../img/nao-estou-conseguindo.png", frase: "NÃO ESTOU CONSEGUINDO", categoria: "ajuda" },
  { imagem: "../img/repetir.png", frase: "PODE REPETIR?", categoria: "ajuda" },
  { imagem: "../img/como-faz.png", frase: "ME MOSTRA COMO FAZ", categoria: "ajuda" },
  { imagem: "../img/esta-dificil.png", frase: "ESTÁ DIFICIL", categoria: "ajuda" },
  { imagem: "../img/nao-sei.png", frase: "NÃO SEI", categoria: "ajuda" },

  { imagem: "../img/mae.png", frase: "QUERO FALAR COM A MINHA MÃE", categoria: "pessoas" },
  { imagem: "../img/pai.png", frase: "QUERO FALAR COM O MEU PAI", categoria: "pessoas" },
  { imagem: "../img/amigo.png", frase: "QUERO FALAR COM O MEU AMIGO", categoria: "pessoas" },
  { imagem: "../img/mensagem.png", frase: "QUERO MANDAR UMA MENSAGEM", categoria: "pessoas" },
  { imagem: "../img/saudade.png", frase: "ESTOU COM SAUDADE", categoria: "pessoas" },
  { imagem: "../img/posso-ligar.png", frase: "POSSO TE LIGAR?", categoria: "pessoas" },
  { imagem: "../img/gosto-de-voce.png", frase: "EU GOSTO DE VOCÊ", categoria: "pessoas" },
  { imagem: "../img/te-amo.png", frase: "EU TE AMO", categoria: "pessoas" },

  { imagem: "../img/feliz.png", frase: "ESTOU FELIZ", categoria: "emocoes" },
  { imagem: "../img/triste.png", frase: "ESTOU TRISTE", categoria: "emocoes" },
  { imagem: "../img/raiva.png", frase: "ESTOU COM RAIVA", categoria: "emocoes" },
  { imagem: "../img/estou-com-medo.png", frase: "ESTOU COM MEDO", categoria: "emocoes" },
  { imagem: "../img/cansado.png", frase: "ESTOU CANSADO", categoria: "emocoes" },
  { imagem: "../img/animado.png", frase: "ESTOU ANIMADO", categoria: "emocoes" },
  { imagem: "../img/nervoso.png", frase: "ESTOU NERVOSO", categoria: "emocoes" },
  { imagem: "../img/vergonha.png", frase: "ESTOU COM VERGONHA", categoria: "emocoes" },

  { imagem: "../img/acordar.png", frase: "PRECISO ACORDAR CEDO", categoria: "rotina" },
  { imagem: "../img/escola.png", frase: "TENHO QUE IR À ESCOLA", categoria: "rotina" },
  { imagem: "../img/almoço.png", frase: "É HORA DO ALMOÇO", categoria: "rotina" },
  { imagem: "../img/remedio.png", frase: "TENHO QUE TOMAR REMÉDIO", categoria: "rotina" },
  { imagem: "../img/tomando-banho.png", frase: "É HORA DO BANHO", categoria: "rotina" },
  { imagem: "../img/dormir.png", frase: "PRECISO DORMIR CEDO", categoria: "rotina" },
  { imagem: "../img/hospital.png", frase: "TENHO UMA CONSULTA HOJE", categoria: "rotina" },
  { imagem: "../img/tarefa.png", frase: "JÁ TERMINEI MINHA TAREFA", categoria: "rotina" },

  { imagem: "../img/casa.png", frase: "QUERO IR PARA CASA", categoria: "lugares" },
  { imagem: "../img/escola.png", frase: "QUERO IR PARA A ESCOLA", categoria: "lugares" },
  { imagem: "../img/parque.png", frase: "QUERO IR AO PARQUE", categoria: "lugares" },
  { imagem: "../img/hospital.png", frase: "QUERO IR AO HOSPITAL", categoria: "lugares" },
  { imagem: "../img/mercado.png", frase: "QUERO IR AO MERCADO", categoria: "lugares" },
  { imagem: "../img/caminhar.png", frase: "QUERO SAIR PARA PASSEAR", categoria: "lugares" },
  { imagem: "../img/igreja.png", frase: "QUERO IR À IGREJA", categoria: "lugares" },
  { imagem: "../img/mapa.png", frase: "ONDE ESTAMOS AGORA?", categoria: "lugares" },

  { imagem: "../img/com-fome.png", frase: "ESTOU COM FOME", categoria: "comer-beber" },
  { imagem: "../img/desidratacao.png", frase: "ESTOU COM SEDE", categoria: "comer-beber" },
  { imagem: "../img/almoço.png", frase: "QUERO COMER", categoria: "comer-beber" },
  { imagem: "../img/sede.png", frase: "QUERO BEBER", categoria: "comer-beber" },
  { imagem: "../img/comida-ruim.png", frase: "NÃO GOSTEI DA COMIDA", categoria: "comer-beber" },
  { imagem: "../img/.png", frase: "QUERO MAIS, POR FAVOR", categoria: "comer-beber" },
  { imagem: "../img/comi-suficiente.png", frase: "JÁ COMI O SUFICIENTE", categoria: "comer-beber" },
  { imagem: "../img/sobremesa.png", frase: "QUERO UMA SOBREMESA", categoria: "comer-beber" },

  { imagem: "../img/dor.png", frase: "ESTOU COM DOR", categoria: "saude" },
  { imagem: "../img/febre.png", frase: "ESTOU COM FEBRE", categoria: "saude" },
  { imagem: "../img/enjoado.png", frase: "ESTOU ENJOADO", categoria: "saude" },
  { imagem: "../img/medico.png", frase: "PRECISO IR AO MÉDICO", categoria: "saude" },
  { imagem: "../img/remedio.png", frase: "PRECISO TOMAR REMÉDIO", categoria: "saude" },
  { imagem: "../img/sentindo-bem.png", frase: "ESTOU ME SENTINDO BEM", categoria: "saude" },
  { imagem: "../img/sentindo-mal.png", frase: "ESTOU ME SENTINDO MAL", categoria: "saude" },
  { imagem: "../img/alergia.png", frase: "TENHO ALERGIA", categoria: "saude" },

  { imagem: "../img/brincar.png", frase: "QUERO BRINCAR", categoria: "lazer" },
  { imagem: "../img/jogar-bola.png", frase: "QUERO JOGAR BOLA", categoria: "lazer" },
  { imagem: "../img/ver-tv.png", frase: "QUERO VER TV", categoria: "lazer" },
  { imagem: "../img/ouvir-musica.png", frase: "QUERO OUVIR MÚSICA", categoria: "lazer" },
  { imagem: "../img/desenhando.png", frase: "QUERO DESENHAR", categoria: "lazer" },
  { imagem: "../img/sair-com-amigos.png", frase: "QUERO SAIR COM MEUS AMIGOS", categoria: "lazer" },
  { imagem: "../img/passear.png", frase: "QUERO PASSEAR", categoria: "lazer" },
  { imagem: "../img/descanso.png", frase: "QUERO DESCANSAR", categoria: "lazer" },

  { imagem: "../img/estude.png", frase: "PRECISO ESTUDAR", categoria: "estudar" },
  { imagem: "../img/nao-entendi-atividade.png", frase: "NÃO ENTENDI A ATIVIDADE", categoria: "estudar" },
  { imagem: "../img/fazer-dnv-atividade.png", frase: "POSSO FAZER DE NOVO A ATIVIDADE?", categoria: "estudar" },
  { imagem: "../img/ja-terminei-atv.png", frase: "JÁ TERMINEI O EXERCÍCIO", categoria: "estudar" },
  { imagem: "../img/ajude-atividade.png", frase: "PRECISO DE AJUDA COM A ATIVIDADE", categoria: "estudar" },
  { imagem: "../img/computador.png", frase: "POSSO USAR O COMPUTADOR?", categoria: "estudar" },
  { imagem: "../img/prova.png", frase: "TENHO PROVA HOJE", categoria: "estudar" },
  { imagem: "../img/material-escolar.png", frase: "ESQUECI MEU MATERIAL", categoria: "estudar" },

  { imagem: "../img/toalete.png", frase: "PRECISO IR AO BANHEIRO", categoria: "necessidades" },
  { imagem: "../img/frio.png", frase: "ESTOU COM FRIO", categoria: "necessidades" },
  { imagem: "../img/calor.png", frase: "ESTOU COM CALOR", categoria: "necessidades" },
  { imagem: "../img/com-sono.png", frase: "ESTOU COM SONO", categoria: "necessidades" },
  { imagem: "../img/descanso.png", frase: "PRECISO DESCANSAR", categoria: "necessidades" },
  { imagem: "../img/tomando-banho.png", frase: "QUERO TOMAR BANHO", categoria: "necessidades" },
  { imagem: "../img/trocar-roupa.png", frase: "QUERO TROCAR DE ROUPA", categoria: "necessidades" },
  { imagem: "../img/privacidade.png", frase: "QUERO PRIVACIDADE", categoria: "necessidades" },

  { imagem: "../img/trabalhar.png", frase: "ESTOU INDO TRABALHAR", categoria: "trabalho" },
  { imagem: "../img/tarefa.png", frase: "JA TERMINEI MINHA TAREFA", categoria: "trabalho" },
  { imagem: "../img/como-faco.png", frase: "PRECISO DE AJUDA COM O SERVIÇO", categoria: "trabalho" },
  { imagem: "../img/pausa.png", frase: "POSSO FAZER UMA PAUSA?", categoria: "trabalho" },
  { imagem: "../img/reuniao.png", frase: "TENHO REUNIÃO HOJE", categoria: "trabalho" },
  { imagem: "../img/dirigir.png", frase: "ESTOU SAINDO DO TRABALHO", categoria: "trabalho" },
  { imagem: "../img/como-posso-ajudar.png", frase: "COM O QUE POSSO AJUDAR?", categoria: "trabalho" },
  { imagem: "../img/mostrar.png", frase: "QUERO TE MOSTRAR O QUE EU FIZ", categoria: "trabalho" },
];


// Captura o parâmetro "categoria" da URL
const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('categoria');

// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Verifica se a categoria foi encontrada na URL
if (categoria) {
  // Filtra os cards com base na categoria
  cards.forEach(card => {
    if (card.dataset.categoria === categoria) {
      card.style.display = 'block'; // Mostra o card correspondente
    } else {
      card.style.display = 'none'; // Esconde os outros cards
    }
  });
} else {
  // Se nenhuma categoria for encontrada, exibe todos os cards
  cards.forEach(card => {
    card.style.display = 'block';
  });
}
