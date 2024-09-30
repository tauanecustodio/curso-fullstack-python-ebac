const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if(number1 > number2) {
        message.textContent = 'Erro: o segundo número deve ser maior que o primeiro';
        message.className = "message error";
        return;
    }

    message.textContent = 'Formulário enviado!';
    message.className = "message success";
})