/* =========================================
   PROVA PARANÁ — SCRIPT PRINCIPAL
========================================= */

let nivelEscolhido = "";
let serieEscolhida = "";
let materiaEscolhida = "";
let materiaIdEscolhida = "";
let atividadeEscolhida = "";


/* =========================================
   MENU
========================================= */

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


/* =========================================
   MATÉRIAS DO ENSINO FUNDAMENTAL
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


/* =========================================
   MATÉRIAS DO ENSINO MÉDIO
========================================= */

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
    materiaIdEscolhida = "";
    atividadeEscolhida = "";


    document
        .querySelectorAll(
            ".study-selector > .selector-step:first-child .selection-card"
        )
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

    limparAreaEstudo();

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

    } else {

        series = [
            "1º ano",
            "2º ano",
            "3º ano"
        ];

    }


    series.forEach((serie, index) => {

        const botao =
            document.createElement("button");


        botao.type = "button";

        botao.className =
            "selection-card";


        botao.innerHTML = `
            <span>🎓</span>
            <strong>${serie}</strong>
            <small>${
                nivelEscolhido === "fundamental"
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

    materiaEscolhida = "";
    materiaIdEscolhida = "";
    atividadeEscolhida = "";


    document
        .querySelectorAll(
            "#seriesOptions .selection-card"
        )
        .forEach(card => {
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
        stepMateria.classList.remove("disabled");
    }

    if (stepAtividade) {
        stepAtividade.classList.add("disabled");
    }


    criarMaterias();

    limparAreaEstudo();

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


    const materias =
        nivelEscolhido === "fundamental"
            ? materiasFundamental
            : materiasMedio;


    materias.forEach(materia => {

        const botao =
            document.createElement("button");


        botao.type = "button";

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

function selecionarMateria(id, nome, botao) {

    materiaIdEscolhida = id;

    materiaEscolhida = nome;

    atividadeEscolhida = "";


    document
        .querySelectorAll(
            "#materiaOptions .selection-card"
        )
        .forEach(card => {
            card.classList.remove("selected");
        });


    if (botao) {
        botao.classList.add("selected");
    }


    const stepAtividade =
        document.getElementById("stepAtividade");


    if (stepAtividade) {
        stepAtividade.classList.remove("disabled");
    }


    /*
       IMPORTANTE:

       A redação só aparece para
       Língua Portuguesa.
    */

    atualizarOpcoesDeAtividade();

    limparAreaEstudo();

    atualizarResumo();

    rolarPara("stepAtividade");
}


/* =========================================
   ATUALIZAR ATIVIDADES
========================================= */

function atualizarOpcoesDeAtividade() {

    const stepAtividade =
        document.getElementById("stepAtividade");


    if (!stepAtividade) {
        return;
    }


    const grid =
        stepAtividade.querySelector(
            ".option-grid"
        );


    if (!grid) {
        return;
    }


    /*
       Todas as matérias possuem:
       - Questões
       - Conteúdo
       - Exemplos
       - Simulado

       Apenas Português possui:
       - Redação
    */


    let html = `

        <button
            type="button"
            class="selection-card"
            onclick="iniciarAtividade('questoes')">

            <span>📝</span>

            <strong>
                Questões
            </strong>

            <small>
                Resolva exercícios
            </small>

        </button>


        <button
            type="button"
            class="selection-card"
            onclick="iniciarAtividade('conteudo')">

            <span>📖</span>

            <strong>
                Estudar conteúdo
            </strong>

            <small>
                Aprenda a matéria
            </small>

        </button>


        <button
            type="button"
            class="selection-card"
            onclick="iniciarAtividade('exemplo')">

            <span>💡</span>

            <strong>
                Exemplos resolvidos
            </strong>

            <small>
                Veja como fazer
            </small>

        </button>


        <button
            type="button"
            class="selection-card"
            onclick="iniciarAtividade('simulado')">

            <span>🎯</span>

            <strong>
                Simulado
            </strong>

            <small>
                Teste seus conhecimentos
            </small>

        </button>

    `;


    /*
       REDAÇÃO:
       somente Português.
    */

    if (materiaIdEscolhida === "portugues") {

        html += `

            <button
                type="button"
                class="selection-card"
                onclick="iniciarAtividade('redacao')">

                <span>✍️</span>

                <strong>
                    Redação
                </strong>

                <small>
                    Escreva e pratique
                </small>

            </button>

        `;

    }


    grid.innerHTML = html;
}


/* =========================================
   INICIAR ATIVIDADE
========================================= */

function iniciarAtividade(tipo) {

    /*
       Segurança:
       impede redação em qualquer matéria
       que não seja Português.
    */

    if (
        tipo === "redacao" &&
        materiaIdEscolhida !== "portugues"
    ) {

        alert(
            "A Redação está disponível somente para Língua Portuguesa."
        );

        return;
    }


    if (!nivelEscolhido ||
        !serieEscolhida ||
        !materiaEscolhida) {

        alert(
            "Escolha o nível, a série e a matéria primeiro."
        );

        return;
    }


    atividadeEscolhida = tipo;


    atualizarResumo();


    const studyArea =
        document.getElementById("studyArea");


    if (!studyArea) {
        return;
    }


    studyArea.style.display =
        "block";


    let titulo = "";
    let texto = "";


    switch (tipo) {

        case "questoes":

            titulo = "📝 Questões";

            texto =
                `Você escolheu fazer questões de ${materiaEscolhida} do ${serieEscolhida}.`;

            break;


        case "redacao":

            titulo = "✍️ Redação";

            texto =
                `Você escolheu praticar redação no ${serieEscolhida}.`;

            break;


        case "conteudo":

            titulo = "📖 Estudar conteúdo";

            texto =
                `Aqui aparecerão os conteúdos de ${materiaEscolhida} do ${serieEscolhida}.`;

            break;


        case "exemplo":

            titulo = "💡 Exemplos resolvidos";

            texto =
                `Aqui aparecerão exemplos de ${materiaEscolhida} explicados passo a passo.`;

            break;


        case "simulado":

            titulo = "🎯 Simulado";

            texto =
                `Aqui será criado um simulado de ${materiaEscolhida} para ${serieEscolhida}.`;

            break;

    }


    const nomeNivel =
        nivelEscolhido === "fundamental"
            ? "Ensino Fundamental"
            : "Ensino Médio";


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
                ${nomeNivel}
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
                    Agora vamos conectar esta área
                    ao banco de questões, conteúdos,
                    exemplos, simulados e sistema
                    de resultados.
                </p>

            </div>

        </div>

    `;


    rolarPara("studyArea");
}


/* =========================================
   RESUMO DA ESCOLHA
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


    const partes = [];


    if (nivelEscolhido) {

        partes.push(
            nivelEscolhido === "fundamental"
                ? "Ensino Fundamental"
                : "Ensino Médio"
        );

    }


    if (serieEscolhida) {
        partes.push(serieEscolhida);
    }


    if (materiaEscolhida) {
        partes.push(materiaEscolhida);
    }


    if (atividadeEscolhida) {

        const nomes = {

            questoes: "Questões",

            redacao: "Redação",

            conteudo: "Conteúdo",

            exemplo: "Exemplos resolvidos",

            simulado: "Simulado"

        };


        partes.push(
            nomes[atividadeEscolhida]
            || atividadeEscolhida
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
   LIMPAR ÁREA DE ESTUDO
========================================= */

function limparAreaEstudo() {

    const studyArea =
        document.getElementById(
            "studyArea"
        );


    if (!studyArea) {
        return;
    }


    studyArea.innerHTML = "";

    studyArea.style.display =
        "none";
}


/* =========================================
   ROLAR ATÉ UMA SEÇÃO
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
   MENU NO CELULAR
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
