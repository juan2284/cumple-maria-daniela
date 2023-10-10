document.addEventListener('DOMContentLoaded', () => {

  const seccion1 = document.querySelector('.seccion-1');
  const seccion2 = document.querySelector('.seccion-2');
  const btnVoltear = document.querySelectorAll('.btn-voltear');


  btnVoltear.forEach(btn => {
    btn.addEventListener('click', () => {
      seccion1.classList.toggle('d-none');
      seccion2.classList.toggle('d-none');
    });
  });
  
  const imagenPrincipal = document.querySelector('.imagen-principal');
  const imagenesGaleria = document.querySelectorAll('.imagen-galeria');

  imagenesGaleria.forEach(imagen => {    
    imagen.addEventListener('click', (e) => {
      imagenPrincipal.src = e.target.src;
    });
  });
  
  
});