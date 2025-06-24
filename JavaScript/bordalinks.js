// Seleciona todos os links do menu
const links = document.querySelectorAll(".headerlist a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove a classe 'aativo' de todos os links
    links.forEach((l) => l.classList.remove("aativo"));

    // Adiciona a classe 'aativo' apenas no link clicado
    this.classList.add("aativo");
  });
});
