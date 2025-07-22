document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario-registro');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Display thank-you message
      alert("Gracias por formar parte de Emprendedores VetCard! Analizaremos tus datos y te daremos de alta lo antes posible.");
      form.reset();
    });
  }
});
