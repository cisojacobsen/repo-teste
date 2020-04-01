var minhaImg = document.querySelector('img');
minhaImg.onclick = function() {
    var minhaSrc = minhaImg.getAttribute('src');
    if (minhaSrc === '/imagens/cup-coffee.svg') {
        minhaImg.setAttribute('src', '/imagens/foto.jpg');
    } else {
        minhaImg.setAttribute('src', '/imagens/cup-coffee.svg')
    }
}

var meuBotao = document.querySelector('button');
var meuCabecalho = document.querySelector('h1');

function setUserName() {
    var meuNome = prompt('Por favor, digite seu nome:');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Quero café, ' + meuNome;
    //Condição
    if (!localStorage.getItem('nome')) {
        setUserName();
    } else {
        var nomeArmazenado = localStorage.getItem('nome');
        meuCabecalho.textContent = 'Quero café, ' + meuNome + '!';
    }
}

meuBotao.onclick = function() {
    setUserName();
}
