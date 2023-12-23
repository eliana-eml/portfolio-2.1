window.onload = exibirLinhaDoTempoEducacao();

function exibirLinhaDoTempoEducacao() {

    let linhaTempoEducacao = document.querySelector('.linha-do-tempo-educacao');
    let linhaTempoProfissional = document.querySelector('.linha-do-tempo-profissional');
    document.getElementById('educacao').style.color = "#2d0064";
    document.getElementById('profissional').style.color = "#afa2c2";

    linhaTempoEducacao.style.display = "block";
    linhaTempoProfissional.style.display = "none";
}

function exibirLinhaDoTempoProfissional() {

    let linhaTempoEducacao = document.querySelector('.linha-do-tempo-educacao');
    let linhaTempoProfissional = document.querySelector('.linha-do-tempo-profissional');
    document.getElementById('educacao').style.color = "#afa2c2";
    document.getElementById('profissional').style.color = "#2d0064";
    
    linhaTempoProfissional.style.display = "block";
    linhaTempoEducacao.style.display = "none";
}