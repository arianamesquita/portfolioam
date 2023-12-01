function carregarConteudo(arquivo) {
    fetch(arquivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main').innerHTML = data;
        });
    return false;
}