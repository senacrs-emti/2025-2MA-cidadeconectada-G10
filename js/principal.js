// --- ÁUDIO SEM BOTÃO: sempre ativo ao passar o cursor / tocar ---
(function(){
    // função de fala (sempre ativa)
    const speakAlways = (text) => {
      if (!text) return;
      // cancela fala atual e inicia nova
      try { speechSynthesis.cancel(); } catch(e){/* ignore */ }
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "pt-BR";
      speechSynthesis.speak(msg);
    };
  
    // cooldown por card para evitar spam de eventos
    const COOLDOWN_MS = 1000;
    const lastSpoken = new WeakMap();
  
    // seleciona todos os cards (já gerados pelo seu JS)
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      // função que extrai o texto do card (procura por várias tags)
      const getCardText = () => {
        const sel = card.querySelector(".card-title, h2, h3, p, span");
        return sel ? (sel.innerText || sel.textContent).trim() : card.innerText.trim();
      };
  
      const trySpeak = (evt) => {
        const now = Date.now();
        const last = lastSpoken.get(card) || 0;
        if (now - last < COOLDOWN_MS) return;
        lastSpoken.set(card, now);
  
        const text = getCardText();
        if (text) {
          speakAlways(text);
        }
      };
  
      // desktop: ao entrar com o cursor
      card.addEventListener("mouseenter", trySpeak);
  
      // também responde ao foco por teclado (acessibilidade)
      card.addEventListener("focus", trySpeak, { passive: true });
  
      // mobile: ao tocar (touchstart)
      card.addEventListener("touchstart", (e) => {
        // evita que o touch gere click duplo estranho
        e.stopPropagation();
        trySpeak();
      }, { passive: true });
    });
  })();
  