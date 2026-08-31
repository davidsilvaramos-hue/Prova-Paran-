/* =========================================
   MENU DO SITE
========================================= */

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


/* =========================================
   SISTEMA DE ESCOLHA
========================================= */

let nivelEscolhido = "";
let serieEscolhida = "";
let materiaEscolhida = "";
let atividadeEscolhida = "";


/* =========================================
   MATÉRIAS
========================================= */

const materiasFundamental = [
    {
        id: "portugues",
        nome: "Língua Portuguesa",
        emoji: "📚"
    },
    {
        id: "matematica",
        nome: "Matemática",
        emoji: "➗"
    },
    {
        id: "ciencias",
        nome: "Ciências",
        emoji: "🔬"
    },
    {
        id: "historia",
        nome: "História",
        emoji: "🏛️"
    },
    {
        id: "geografia",
        nome: "Geografia",
        emoji: "🌎"
    },
    {
        id: "ingles",
        nome: "Língua Inglesa",
        emoji: "🇺🇸"
    },
    {
        id: "arte",
        nome: "Arte",
        emoji: "🎨"
    },
    {
        id: "educacao-fisica",
        nome: "Educação Física",
        emoji: "🏃"
    }
];


const materiasMedio = [
    {
        id: "portugues",
        nome: "Língua Portuguesa",
        emoji: "📚"
    },
    {
        id: "matematica",
        nome: "Matemática",
        emoji: "➗"
    },
    {
        id: "historia",
        nome: "História",
        emoji: "🏛️"
    },
    {
        id: "geografia",
        nome: "Geografia",
        emoji: "🌎"
    },
    {
        id: "ingles",
        nome: "Língua Inglesa",
        emoji: "🇺🇸"
    },
    {
        id: "biologia",
        nome: "Biologia",
        emoji: "🧬"
    },
    {
        id: "fisica",
        nome: "Física",
        emoji: "⚡"
    },
    {
        id: "quimica",
        nome: "Química",
        emoji: "⚗️"
    },
    {
        id: "filosofia",
        nome: "Filosofia",
        emoji: "🧠"
    },
    {
        id: "sociologia",
        nome: "Sociologia",
        emoji: "👥"
    },
    {
        id: "arte",
        nome: "Arte",
        emoji: "🎨"
    },
    {
        id: "educacao-fisica",
        nome: "Educação Física",
        emoji: "🏃"
    }
];


/* =========================================
   ESCOLHER NÍVEL
========================================= */

function selecionarNivel(nivel, botao) {

    nivelEscolhido = nivel;

    serieEscolhida = "";
    materiaEscolhida = "";
    atividadeEscolhida = "";

    document
        .querySelectorAll(".selection-card")
        .forEach(card => {
            card.classList.remove("selected");
        });

    if (botao) {
        botao.classList.add("selected");
    }


    const stepSerie =
        document.getElementById("stepSerie");

    const stepMateria =
        document.getElementById("stepMateria");

    const stepAtividade =
        document.getElementById("stepAtividade");


    if (stepSerie) {
        stepSerie.classList.remove("disabled");
    }

    if (stepMateria) {
        stepMateria.classList.add("disabled");
    }

    if (stepAtividade) {
        stepAtividade.classList.add("disabled");
    }


    criarSeries();

    atualizarResumo();

    rolarPara("stepSerie");
}


/* =========================================
   CRIAR SÉRIES
========================================= */

function criarSeries() {

    const container =
        document.getElementById("seriesOptions");

    if (!container) {
        return;
    }


    container.innerHTML = "";


    let series = [];


    if (nivelEscolhido === "fundamental") {

        series = [
            "1º ano",
            "2º ano",
            "3º ano",
            "4º ano",
            "5º ano",
            "6º ano",
            "7º ano",
            "8º ano",
            "9º ano"
        ];

    }


    if (nivelEscolhido === "medio") {

        series = [
            "1º ano",
            "2º ano",
            "3º ano"
        ];

    }


    series.forEach((serie, index) => {

        const botao =
            document.createElement("button");

        botao.className =
            "selection-card";

        botao.innerHTML = `
            <span>🎓</span>
            <strong>${serie}</strong>
            <small>${nivelEscolhido === "fundamental"
                ? "Ensino Fundamental"
                : "Ensino Médio"
            }</small>
        `;


        botao.onclick = function() {

            selecionarSerie(
                index + 1,
                serie,
                botao
            );

        };


        container.appendChild(botao);

    });

}


/* =========================================
   ESCOLHER SÉRIE
========================================= */

function selecionarSerie(numero, nome, botao) {

    serieEscolhida = nome;


    const cards =
        document.querySelectorAll(
            "#seriesOptions .selection-card"
        );


    cards.forEach(card => {

        card.classList.remove("selected");

    });


    if (botao) {

        botao.classList.add("selected");

    }


    const stepMateria =
        document.getElementById("stepMateria");


    const stepAtividade =
        document.getElementById("stepAtividade");


    if (stepMateria) {

        stepMateria.classList.remove(
            "disabled"
        );

    }


    if (stepAtividade) {

        stepAtividade.classList.add(
            "disabled"
        );

    }


    criarMaterias();

    atualizarResumo();

    rolarPara("stepMateria");

}


/* =========================================
   CRIAR MATÉRIAS
========================================= */

function criarMaterias() {

    const container =
        document.getElementById("materiaOptions");


    if (!container) {

        return;

    }


    container.innerHTML = "";


    let materias = [];


    if (nivelEscolhido === "fundamental") {

        materias =
            materiasFundamental;

    } else {

        materias =
            materiasMedio;

    }


    materias.forEach(materia => {

        const botao =
            document.createElement("button");


        botao.className =
            "selection-card";


        botao.innerHTML = `
            <span>${materia.emoji}</span>
            <strong>${materia.nome}</strong>
            <small>Estudar ${materia.nome}</small>
        `;


        botao.onclick = function() {

            selecionarMateria(
                materia.id,
                materia.nome,
                botao
            );

        };


        container.appendChild(botao);

    });

}


/* =========================================
   ESCOLHER MATÉRIA
========================================= */

function selecionarMateria(
    id,
    nome,
    botao
) {

    materiaEscolhida = nome;


    const cards =
        document.querySelectorAll(
            "#materiaOptions .selection-card"
        );


    cards.forEach(card => {

        card.classList.remove(
            "selected"
        );

    });


    if (botao) {

        botao.classList.add(
            "selected"
        );

    }


    const stepAtividade =
        document.getElementById(
            "stepAtividade"
        );


    if (stepAtividade) {

        stepAtividade.classList.remove(
            "disabled"
        );

    }


    atualizarResumo();

    rolarPara("stepAtividade");

}


/* =========================================
   ESCOLHER ATIVIDADE
========================================= */

function iniciarAtividade(tipo) {

    atividadeEscolhida = tipo;


    atualizarResumo();


    /*
       Por enquanto mostramos uma mensagem.
       Na próxima etapa vamos ligar cada botão
       ao banco de questões, conteúdos,
       exemplos, simulados e redação.
    */


    const studyArea =
        document.getElementById(
            "studyArea"
        );


    if (!studyArea) {

        return;

    }


    studyArea.style.display =
        "block";


    let titulo = "";
    let texto = "";


    if (tipo === "questoes") {

        titulo =
            "📝 Questões";

        texto =
            "Você escolheu fazer questões de " +
            materiaEscolhida +
            " do " +
            serieEscolhida +
            ".";

    }


    if (tipo === "redacao") {

        titulo =
            "✍️ Redação";

        texto =
            "Você escolheu praticar redação.";

    }


    if (tipo === "conteudo") {

        titulo =
            "📖 Conteúdo";

        texto =
            "Aqui aparecerá o conteúdo de " +
            materiaEscolhida +
            " do " +
            serieEscolhida +
            ".";

    }


    if (tipo === "exemplo") {

        titulo =
            "💡 Exemplos resolvidos";

        texto =
            "Aqui aparecerão exemplos explicados " +
            "passo a passo.";

    }


    if (tipo === "simulado") {

        titulo =
            "🎯 Simulado";

        texto =
            "Aqui será criado um simulado " +
            "de acordo com sua série e matéria.";

    }


    studyArea.innerHTML = `

        <div class="wide">

            <div class="icon">
                📚
            </div>

            <h2>
                ${titulo}
            </h2>

            <p>
                ${texto}
            </p>

            <p>
                <strong>
                    Nível:
                </strong>
                ${nivelEscolhido === "fundamental"
                    ? "Ensino Fundamental"
                    : "Ensino Médio"
                }
            </p>

            <p>
                <strong>
                    Série:
                </strong>
                ${serieEscolhida}
            </p>

            <p>
                <strong>
                    Matéria:
                </strong>
                ${materiaEscolhida}
            </p>

            <br>

            <div class="warning">

                <strong>
                    🚧 Próxima etapa
                </strong>

                <p>
                    O sistema de questões,
                    exemplos, conteúdos,
                    simulados e redação será
                    conectado nesta área.
                </p>

            </div>

        </div>

    `;


    rolarPara("studyArea");

}


/* =========================================
   RESUMO
========================================= */

function atualizarResumo() {

    const resumo =
        document.getElementById(
            "selectionSummary"
        );


    const texto =
        document.getElementById(
            "summaryText"
        );


    if (!resumo || !texto) {

        return;

    }


    let partes = [];


    if (nivelEscolhido) {

        partes.push(
            nivelEscolhido === "fundamental"
                ? "Ensino Fundamental"
                : "Ensino Médio"
        );

    }


    if (serieEscolhida) {

        partes.push(
            serieEscolhida
        );

    }


    if (materiaEscolhida) {

        partes.push(
            materiaEscolhida
        );

    }


    if (atividadeEscolhida) {

        partes.push(
            atividadeEscolhida
        );

    }


    if (partes.length === 0) {

        resumo.style.display =
            "none";

        return;

    }


    resumo.style.display =
        "block";


    texto.textContent =
        partes.join(" → ");

}


/* =========================================
   ROLAGEM
========================================= */

function rolarPara(id) {

    const elemento =
        document.getElementById(id);


    if (!elemento) {

        return;

    }


    setTimeout(() => {

        elemento.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 150);

}


/* =========================================
   FECHAR MENU NO CELULAR
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const links =
            document.querySelectorAll(
                "#menu a"
            );


        links.forEach(link => {

            link.addEventListener(
                "click",
                function() {

                    const menu =
                        document.getElementById(
                            "menu"
                        );


                    if (menu) {

                        menu.classList.remove(
                            "active"
                        );

                    }

                }
            );

        });

    }
);
