document.querySelectorAll(".headerlist a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // impede o comportamento padrão do link

    const targetId = this.getAttribute("href").slice(1); // remove o #
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "center", // centraliza verticalmente na tela
      });
    }
  });
});
