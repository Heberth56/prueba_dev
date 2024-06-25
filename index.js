document.querySelector(".btn-menu").addEventListener("click", function () {
  document.getElementById("menuSlide").classList.toggle("open");
  document.getElementById("backdrop").classList.toggle("open");
});

// Opcional: Cerrar el menú al hacer clic en el backdrop
document.getElementById("backdrop").addEventListener("click", function () {
  this.classList.remove("open");
  document.getElementById("menuSlide").classList.remove("open");
});

document.querySelector(".closebtn").addEventListener("click", function (e) {
  e.preventDefault(); // Previene la acción por defecto del enlace.
  document.getElementById("menuSlide").classList.remove("open"); // Cierra el menú deslizante.
  document.getElementById("backdrop").classList.remove("open"); // Oculta el backdrop.
});
