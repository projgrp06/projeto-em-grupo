function carrinho(){
    alert("Item adicionado ao carrinho!");
}

function validacao(){
    if (document.getElementById('nome').value == ''){
        alert('Por favor, informe o seu nome.');
        document.getElementById('nome').focus();
        return false;
    }
    else if (document.getElementById('nome').value.length < 2){
        alert('Por favor, informe um nome com no mínimo 2 caracteres.');
        document.getElementById('nome').focus();
        return false;
    }

    if (document.getElementById('email').value == ''){
        alert('Por favor, informe o seu e-mail.');
        document.getElementById('email').focus();
        return false; 
    }

    if (document.getElementById('mensagem').value == ''){
        alert('Por favor, preencha o campo com a sua mensagem.');
        document.getElementById('mensagem').focus();
        return false; 
    }

    else {
        alert('O formulário de contato foi enviado com sucesso.');
        return true;
    }
}
