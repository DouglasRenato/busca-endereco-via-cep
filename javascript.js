let botao = document.querySelector('.entrada #botao');

botao.addEventListener('click', function() {

    let cep = document.querySelector('.entrada input#cep').value;
    
    let api = `https://viacep.com.br/ws/${cep}/json/`;
    
    let request = new XMLHttpRequest();
    
    request.open('GET', api);
    
    request.onload = function() {
            
        let endereco = JSON.parse(request.responseText);
        
        let logradouro = document.querySelector('.logradouro h2');
        logradouro.innerHTML = 'Logradouro: ' + endereco.logradouro;
        
        let bairro = document.querySelector('.bairro h2');
        bairro.innerHTML = 'Bairro: ' + endereco.bairro;
        
        let localidade = document.querySelector('.localidade h2');
        localidade.innerHTML = 'Localidade: ' + endereco.localidade + '/' + endereco.uf;;        

    };
    
    request.send();
    
});

