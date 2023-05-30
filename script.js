//Botón menú//
document.querySelector(".button-menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});


//galería//
var im = ["img/H/1.jpg", "img/H/2.jpg", "img/H/3.jpg", "img/H/4.jpg", "img/H/5.jpg", "img/H/6.jpg"]
var currentImageIndex = 0

function updateImage() {
  var imageElement = document.getElementById("imagen");
  imageElement.src = im[currentImageIndex];
}


document.getElementById("anterior").addEventListener("click", function L() {
    currentImageIndex = (currentImageIndex - 1 + im.length) % im.length;
    updateImage();
  });
  
  document.getElementById("siguiente").addEventListener("click", function Lala() {
    currentImageIndex = (currentImageIndex + 1) % im.length;
    updateImage();
  });

document.getElementById("boton").addEventListener("click", function() {
    document.querySelector(".io").classList.toggle("io-responsive");
});

document.getElementById("boton").addEventListener("click", function() {
    document.querySelector(".Hawke").classList.toggle("hawke-responsive");
});

document.getElementById("boton").addEventListener("click", function() {
    document.querySelector(".botones").classList.toggle("botones-responsive");
});

var boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    if (boton.textContent === "Galería") {
      boton.textContent = "Individual";
    } else {
      boton.textContent = "Galería";
    }
  });
