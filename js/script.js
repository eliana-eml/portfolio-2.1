window.onload = exibirLinhaDoTempoEducacao();

function exibirLinhaDoTempoEducacao() {

    let linhaTempoEducacao = document.querySelector('.linha-do-tempo-educacao');
    let linhaTempoProfissional = document.querySelector('.linha-do-tempo-profissional');
    let certificacoes = document.querySelector('.certificacoes');

    document.getElementById('educacao').style.color = "#2d0064";
    document.getElementById('profissional').style.color = "#afa2c2";

    linhaTempoEducacao.style.display = "block";
    linhaTempoProfissional.style.display = "none";
    certificacoes.style.display = "flex";

}

function exibirLinhaDoTempoProfissional() {

    let linhaTempoEducacao = document.querySelector('.linha-do-tempo-educacao');
    let linhaTempoProfissional = document.querySelector('.linha-do-tempo-profissional');
    let certificacoes = document.querySelector('.certificacoes');
    
    document.getElementById('educacao').style.color = "#afa2c2";
    document.getElementById('profissional').style.color = "#2d0064";
    
    linhaTempoProfissional.style.display = "block";
    linhaTempoEducacao.style.display = "none";
    certificacoes.style.display = "none";
}

function exibirLista() {

    let frontEndLista = document.getElementById("front-end-lista");
    let backEndLista = document.querySelector('.back-end-dev');
    let ferramentasLista = document.querySelector('.ferramentas-dev');
    
    frontEndLista.addEventListener("click", function exibirListaFrontEnd() {
        
        let lista = document.querySelector('.lista');

        if (lista.style.display == "none") {
            lista.style.display = "block";
        } else {
            lista.style.display = "none";
        }

    });


}