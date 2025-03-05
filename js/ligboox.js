const imagenes = document.querySelectorAll(".img-galeria");
const imageneslight = document.querySelector(".agregar-imagen");
const contenedorligth = document.querySelector(".imagen-light");
const hamburguer1 = document.querySelector(".hamburger");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

contenedorligth.addEventListener("click", (e) => {
  if (e.target !== imageneslight) {
    contenedorligth.classList.toggle("show");
    imageneslight.classList.toggle("showImage");
    hamburguer1.style.opacity = "1";
  }
});

const aparecerImagen = (imagen) => {
  imageneslight.src = imagen;
  contenedorligth.classList.toggle("show");
  imageneslight.classList.toggle("showImage");
  hamburguer1.style.opacity = "0";
};
