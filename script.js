document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});


// inicializa o EmailJS
emailjs.init("KGrN1EmfJb2yguvIp"); // substitua pelo seu User ID

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede que a página recarregue

  emailjs.sendForm('service_emz2udl', 'template_h48g67e', this)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.reset(); // limpa os campos
    }, (err) => {
      alert('Erro ao enviar a mensagem: ' + JSON.stringify(err));
    });
});
