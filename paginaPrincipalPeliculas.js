document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let counter = 0;
  const size = images[0].clientWidth;

  nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
      counter = 0; // Si estamos en la última imagen, volvemos a la primera
    } else {
      counter++;
    }
    moveCarousel(0.1); // Duración de la transición: 0.1 segundos
  });

  prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
      counter = images.length - 1;
    } else {
      counter--;
    }
    moveCarousel(0.1); // Duración de la transición: 0.1 segundos
  });

  function moveCarousel(transitionDuration) {
    carouselImages.style.transition = `transform ${transitionDuration}s ease-in-out`;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  setInterval(() => {
    if (counter >= images.length - 1) {
      counter = 0; // Si estamos en la última imagen, volvemos a la primera
    } else {
      counter++;
    }
    moveCarousel(3); // Duración de la transición automática: 3 segundos
  }, 6000);
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
  var avisoCookies = document.getElementById("avisoCookies");
  var cookiesForm = document.getElementById("cookiesForm");

  // Comprobar si el usuario ya aceptó las cookies
  if (!cookiesAceptadas()) {
      mostrarAvisoCookies();
  }

  // Mostrar el aviso de cookies
  function mostrarAvisoCookies() {
      avisoCookies.style.display = "block";
  }

  // Ocultar el aviso de cookies y almacenar las preferencias del usuario
  function aceptarCookies(event) {
      event.preventDefault();
      avisoCookies.style.display = "none";
      almacenarCookiesAceptadas();
  }

  // Función para verificar si el usuario ya aceptó las cookies
  function cookiesAceptadas() {
      return localStorage.getItem("cookiesAceptadas") === "true";
  }

  // Función para almacenar las preferencias del usuario en el almacenamiento local
  function almacenarCookiesAceptadas() {
      var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
      localStorage.setItem("cookiesAceptadas", "true");
      checkboxes.forEach(function(checkbox) {
          localStorage.setItem(checkbox.name, "true");
      });
  }

  // Agregar evento de envío al formulario de cookies
  cookiesForm.addEventListener("submit", aceptarCookies);

  // Ocultar el aviso de cookies si ya han sido aceptadas
  if (cookiesAceptadas()) {
      avisoCookies.style.display = "none";
  }
});
