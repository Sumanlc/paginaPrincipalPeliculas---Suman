function agregarEfectoZoom(elementoImagen) {
    elementoImagen.addEventListener('click', function () {
        // Crea un div para el efecto de zoom.
        const zoomedContainer = document.createElement('div');
        zoomedContainer.className = 'zoomed';
        // Crea una copia de la imagen para mostrar en el zoom.
        const zoomedImg = new Image();
        zoomedImg.src = elementoImagen.src;
        zoomedImg.alt = elementoImagen.alt;
        // Agrega la imagen al contenedor de zoom.
        zoomedContainer.appendChild(zoomedImg);
        // Agrega el contenedor de zoom al cuerpo del documento.
        document.body.appendChild(zoomedContainer);

        // Maneja el clic en la imagen ampliada para cerrarla.
        zoomedContainer.addEventListener('click', function () {
            document.body.removeChild(zoomedContainer);
        });
    });
}

// Llama a la función en elementos de imagen específicos.
const zoomableImage1 = document.getElementById('zoomableImage1');
agregarEfectoZoom(zoomableImage1);

const zoomableImage2 = document.getElementById('zoomableImage2');
agregarEfectoZoom(zoomableImage2);

const zoomableImage3 = document.getElementById('zoomableImage3');
agregarEfectoZoom(zoomableImage3);

const zoomableImage4 = document.getElementById('zoomableImage4');
agregarEfectoZoom(zoomableImage4);

const zoomableImage5 = document.getElementById('zoomableImage5');
agregarEfectoZoom(zoomableImage5);
// Agrega más llamadas a agregarEfectoZoom para otros elementos de imagen si es necesario.
