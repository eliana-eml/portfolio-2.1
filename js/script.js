// let projetoDiv = document.querySelector('#projeto');

// fetch("./json/projetos.json").then((response) => {

//     response.json().then((dados) => {
        
//         dados.projetos.map((projeto) => {
//             projetoDiv.innerHTML +=
//             `
//             <h2 class="titulo-projeto">${projeto.titulo}</h2>
//             <div class="descricao-projeto">
//                 <div class="imagem-projeto">
//                     ${projeto.icone}
//                 </div>
//                 <div class="projeto-detalhes-descricao">
//                     <p class="descricao">${projeto.descricao}</p>  
//                     <ul class="projeto-detalhes">
//                         <li>
//                             <h3>Linguagens Utilizadas:</h3>
//                             <p>${projeto.linguagens}</p>
//                         </li>
//                         <li>
//                             <h3>Tipo de Projeto:</h3>
//                             <p>${projeto.tipo}</p>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             `
//         });
//     })
// });

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

function exibirListaFrontEnd() {

    let lista = document.querySelector('#lista-front-end');

    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }

}

function exibirListaBackEnd() {

    let lista = document.querySelector('#lista-back-end');

    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }

}

function exibirListaFerramentas() {

    let lista = document.querySelector('#lista-ferramentas');

    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }

}