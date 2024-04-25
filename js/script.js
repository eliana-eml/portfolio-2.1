let icone = document.querySelector(".modo-escuro");
let iconeTroca = document.querySelector(".icone-tema");

icone.onclick = function() {
    
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        iconeTroca.classList.remove("bx-moon");
        iconeTroca.classList.add("bxs-sun");
    } else {
        iconeTroca.classList.remove("bxs-sun");
        iconeTroca.classList.add("bx-moon");
    }
}

let iconeMobile = document.querySelector(".modo-escuro-mobile");
let iconeTrocaMobile = document.querySelector(".icone-tema-mobile");

iconeMobile.onclick = function() {
    
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        iconeTrocaMobile.classList.remove("bxs-moon");
        iconeTrocaMobile.classList.add("bxs-sun");
    } else {
        iconeTrocaMobile.classList.remove("bxs-sun");
        iconeTrocaMobile.classList.add("bxs-moon");
    }
}


function openNav() {
    document.getElementById("nav-mobile-lista").style.width = "270px";
}

function closeNav() {
    document.getElementById("nav-mobile-lista").style.width = "0";
}

window.onload = exibirLinhaDoTempoEducacao();

function exibirLinhaDoTempoEducacao() {

    let linhaTempoEducacao = document.querySelector('.linha-do-tempo-educacao');
    let linhaTempoProfissional = document.querySelector('.linha-do-tempo-profissional');
    let certificacoes = document.querySelector('.certificacoes');

    document.getElementById('educacao').style.color = "var(--font-6th-color)";
    document.getElementById('profissional').style.color = "var(--bd-6th-color)";

    linhaTempoEducacao.style.display = "block";
    linhaTempoProfissional.style.display = "none";
    certificacoes.style.display = "flex";

}

function exibirLinhaDoTempoProfissional() {

    let linhaTempoEducacao = document.querySelector('.linha-do-tempo-educacao');
    let linhaTempoProfissional = document.querySelector('.linha-do-tempo-profissional');
    let certificacoes = document.querySelector('.certificacoes');

    document.getElementById('educacao').style.color = "var(--bd-6th-color)";
    document.getElementById('profissional').style.color = "var(--font-6th-color)";

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

// const modalViews = document.querySelectorAll('.modal-servicos'),
//       modalBtns = document.querySelectorAll('.btn-modulo-servico'),
//       modalCloses = document.querySelectorAll('.btn-fechar-popup')

// let modal = function(modalClick) {
//     modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener('click', () => {
//         modal(i)
//     })
// })

// modalCloses.forEach((modalClose) => {
//     modalClose.addEventListener('click', () => {
//         modalViews.classList.remove('active-modal')
//     })
// })


let projetoDiv = document.querySelector('.projetos-conteudo');

fetch("./json/projetos.json").then((response) => {

    response.json().then((dados) => {

        dados.projetos.map((projeto) => {
            projetoDiv.innerHTML +=
                `
                <div class="slide swiper-slide">
                    <h2 class="titulo-projeto">${projeto.titulo}</h2>
                    <div class="projeto-detalhes">
                        <a href="${projeto.link}">
                            <img src="${projeto.img}" alt="imagem-projeto" class="image">
                        </a>
                        <ul class="projeto-descricao">
                            <li>
                                <h3>Descrição do Projeto:</h3>
                                <p>
                                    ${projeto.descricao}
                                </p>
                            </li>
                            <li>
                                <h3>Linguagens e Tecnologias Utilizadas:</h3>
                                <p>${projeto.linguagens}</p>
                            </li>
                            <li>
                                <h3>Tipo de Projeto:</h3>
                                <p>${projeto.tipo}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                `
        });
    })
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});