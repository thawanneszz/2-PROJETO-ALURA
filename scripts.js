document.addEventListener("DOMContentLoaded", () => {
    const passos = document.querySelectorAll(".passo");
    const botoes = document.querySelectorAll(".btn-proximo");
  
    botoes.forEach(botao => {
      botao.addEventListener("click", () => {
        const proximoPassoID = botao.getAttribute("data-proximo");
        const passoAtual = botao.closest(".passo");
        const proximoPasso = document.getElementById(`passo-${proximoPassoID}`);
  
        passoAtual.classList.remove("ativo");
        proximoPasso.classList.add("ativo");
      });
    });
  });