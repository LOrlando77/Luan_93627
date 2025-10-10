//*Função para validar formulario */
function validateform() {
/*obtem os valores dos campos de imput pelo ID*/

let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let senha = documnt.getElementById('senha').value;
let confirmeSenha = documnt.getElementById('confirmesenha').value;
/*Obtem o elemento para exibir mensagem de erro*/
let errorMensage = document.getElementById('error-massage')

//limpa qualquer mensagem de erro anterior
errorMessage.textContent = "";

if (name ==='') {
     // Exibe uma mensagem de erro e interrompe o envio do formulario
    errorMessage.textContent = 'Por favor, insira seu nome. ';
    return false;
}

if (email ==='') {
   // Exibe uma mensagem de erro e interrompe o envio do formulario
   errorMessage.textContent = 'Por favor, insira seu email. ';
    return false;
}

if (senha ==='') {
     // Exibe uma mensagem de erro e interrompe o envio do formulario
    errorMessage.textContent = 'Por favor, insira sua sennha. ';
    return false;
}

if (confirmesenha ==='') {
    // Exibe uma mensagem de erro e interrompe o envio do formulario
    errorMessage.textContent = 'Por favor, insira novamnete a senha anterior';
    return false; // Retorna Falso para impedir o envio do formulario
}

// Se todas as verificações forem bem sucessidadas, o formulario pode ser enviado
return true; // Permite o envio do formulario
}