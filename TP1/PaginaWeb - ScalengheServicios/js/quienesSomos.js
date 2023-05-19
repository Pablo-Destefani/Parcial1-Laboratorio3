
const fotos = document.querySelectorAll(".imagenQuienesSomos");

fotos.forEach(foto => {
    foto.addEventListener("click", function() {
      // Obtener la URL de la imagen
      const imgUrl = foto.getAttribute("src");
      
      // Actualizar la imagen del modal con la URL
      const modalImg = document.getElementById("modalImg");
      modalImg.setAttribute("src", imgUrl);
      
      // Mostrar el modal
      const modal = document.getElementById("myModal2");
      modal.style.display = "flex";
    });
  });

function cerrarModal(){

    const myModal = document.getElementById("myModal2");
    myModal.style.display = "none";
}