const frases = [
    { frase: "MEU NOME É X", categoria: "falar" },
    { frase: "EU TENHO X ANOS", categoria: "falar" },
    { frase: "TUDO BEM?", categoria: "falar" },
    { frase: "SIM", categoria: "falar" },
    { frase: "NÃO", categoria: "falar" },
    { frase: "POR FAVOR", categoria: "falar" },
    { frase: "OBRIGADO", categoria: "falar" },
    { frase: "NÃO ENTENDI", categoria: "falar" },

    { frase: "PODE ME AJUDAR?", categoria: "ajuda" },
    { frase: "COMO FAÇO ISSO?", categoria: "ajuda" },
    { frase: "PRECISO DE AJUDA", categoria: "ajuda" },
    { frase: "NÃO ESTOU CONSEGUINDO", categoria: "ajuda" },
    { frase: "PODE REPETIR?", categoria: "ajuda" },
    { frase: "ME MOSTRA COMO FAZ", categoria: "ajuda" },
    { frase: "ESTÁ DIFICIL", categoria: "ajuda" },
    { frase: "NÃO SEI", categoria: "ajuda" },

    { frase: "QUERO FALAR COM A MINHA MÃE", categoria: "pessoas" },
    { frase: "QUERO FALAR COM O MEU PAI", categoria: "pessoas" },
    { frase: "QUERO FALAR COM O MEU AMIGO", categoria: "pessoas" },
    { frase: "QUERO MANDAR UMA MENSAGEM", categoria: "pessoas" },
    { frase: "ESTOU COM SAUDADE", categoria: "pessoas" },
    { frase: "POSSO TE LIGAR?", categoria: "pessoas" },
    { frase: "EU GOSTO DE VOCÊ", categoria: "pessoas" },
    { frase: "EU TE AMO", categoria: "pessoas" },

    { frase: "ESTOU FELIZ", categoria: "sentimentos" },
    { frase: "ESTOU TRISTE", categoria: "sentimentos" },
    { frase: "ESTOU COM RAIVA", categoria: "sentimentos" },
    { frase: "ESTOU COM MEDO", categoria: "sentimentos" },
    { frase: "ESTOU CANSADO", categoria: "sentimentos" },
    { frase: "ESTOU ANIMADO", categoria: "sentimentos" },
    { frase: "ESTOU NERVOSO", categoria: "sentimentos" },
    { frase: "ESTOU COM VERGONHA", categoria: "sentimentos" },

    { frase: "PRECISO ACORDAR CEDO", categoria: "rotina" },
    { frase: "TENHO QUE IR À ESCOLA", categoria: "rotina" },
    { frase: "É HORA DO ALMOÇO", categoria: "rotina" },
    { frase: "TENHO QUE TOMAR REMÉDIO", categoria: "rotina" },
    { frase: "É HORA DO BANHO", categoria: "rotina" },
    { frase: "PRECISO DORMIR CEDO", categoria: "rotina" },
    { frase: "TENHO UMA CONSULTA HOJE", categoria: "rotina" },
    { frase: "JÁ TERMINEI MINHA TAREFA", categoria: "rotina" },

    { frase: "QUERO IR PARA CASA", categoria: "lugares" },
    { frase: "QUERO IR PARA A ESCOLA", categoria: "lugares" },
    { frase: "QUERO IR AO PARQUE", categoria: "lugares" },
    { frase: "QUERO IR AO HOSPITAL", categoria: "lugares" },
    { frase: "QUERO IR AO MERCADO", categoria: "lugares" },
    { frase: "QUERO SAIR PARA PASSEAR", categoria: "lugares" },
    { frase: "QUERO IR À IGREJA", categoria: "lugares" },
    { frase: "ONDE ESTAMOS AGORA?", categoria: "lugares" },

    { frase: "ESTOU COM FOME", categoria: "comer-beber" },
    { frase: "ESTOU COM SEDE", categoria: "comer-beber" },
    { frase: "QUERO COMER", categoria: "comer-beber" },
    { frase: "QUERO BEBER", categoria: "comer-beber" },
    { frase: "NÃO GOSTEI DA COMIDA", categoria: "comer-beber" },
    { frase: "QUERO MAIS, POR FAVOR", categoria: "comer-beber" },
    { frase: "JÁ COMI O SUFICIENTE", categoria: "comer-beber" },
    { frase: "QUERO UMA SOBREMESA", categoria: "comer-beber" },

    { frase: "ESTOU COM DOR", categoria: "saude" },
    { frase: "ESTOU COM FEBRE", categoria: "saude" },
    { frase: "ESTOU ENJOADO", categoria: "saude" },
    { frase: "PRECISO IR AO MÉDICO", categoria: "saude" },
    { frase: "PRECISO TOMAR REMÉDIO", categoria: "saude" },
    { frase: "ESTOU ME SENTINDO BEM", categoria: "saude" },
    { frase: "ESTOU ME SENTINDO MAL", categoria: "saude" },
    { frase: "TENHO ALERGIA", categoria: "saude" },

    { frase: "QUERO BRINCAR", categoria: "lazer" },
    { frase: "QUERO JOGAR BOLA", categoria: "lazer" },
    { frase: "QUERO VER TV", categoria: "lazer" },
    { frase: "QUERO OUVIR MÚSICA", categoria: "lazer" },
    { frase: "QUERO DESENHAR", categoria: "lazer" },
    { frase: "QUERO SAIR COM MEUS AMIGOS", categoria: "lazer" },
    { frase: "QUERO PASSEAR", categoria: "lazer" },
    { frase: "QUERO DESCANSAR", categoria: "lazer" },

    { frase: "PRECISO ESTUDAR", categoria: "estudar" },
    { frase: "NÃO ENTENDI A ATIVIDADE", categoria: "estudar" },
    { frase: "POSSO FAZER DE NOVO A ATIVIDADE?", categoria: "estudar" },
    { frase: "JÁ TERMINEI O EXERCÍCIO", categoria: "estudar" },
    { frase: "PRECISO DE AJUDA COM A ATIVIDADE", categoria: "estudar" },
    { frase: "POSSO USAR O COMPUTADOR?", categoria: "estudar" },
    { frase: "TENHO PROVA HOJE", categoria: "estudar" },
    { frase: "ESQUECI MEU MATERIAL", categoria: "estudar" },

    { frase: "PRECISO IR AO BANHEIRO", categoria: "necessidades" },
    { frase: "ESTOU COM FRIO", categoria: "necessidades" },
    { frase: "ESTOU COM CALOR", categoria: "necessidades" },
    { frase: "ESTOU COM SONO", categoria: "necessidades" },
    { frase: "PRECISO DESCANSAR", categoria: "necessidades" },
    { frase: "QUERO TOMAR BANHO", categoria: "necessidades" },
    { frase: "QUERO TROCAR DE ROUPA", categoria: "necessidades" },
    { frase: "QUERO PRIVACIDADE", categoria: "necessidades" },

















  ];