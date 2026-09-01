/* =====================================================
   PROVA PARANÁ — SISTEMA PRINCIPAL
   VERSÃO CORRIGIDA
===================================================== */

let nivelEscolhido = "";
let serieEscolhida = "";
let materiaEscolhida = "";
let materiaIdEscolhida = "";
let atividadeEscolhida = "";


/* =====================================================
   MENU
===================================================== */

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


/* =====================================================
   MATÉRIAS — ENSINO FUNDAMENTAL
===================================================== */

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


/* =====================================================
   MATÉRIAS — ENSINO MÉDIO
===================================================== */

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


/* =====================================================
   ESCOLHER NÍVEL
===================================================== */

function selecionarNivel(nivel, botao) {

    nivelEscolhido = nivel;

    serieEscolhida = "";
    materiaEscolhida = "";
    materiaIdEscolhida = "";
    atividadeEscolhida = "";

    limparSelecoes();

    if (botao) {
        document
            .querySelectorAll(
                ".study-selector .selection-card"
            )
            .forEach(card => {
                card.classList.remove("selected");
            });

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


/* =====================================================
   CRIAR SÉRIES
===================================================== */

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
            <small>
                ${
                    nivelEscolhido === "fundamental"
                        ? "Ensino Fundamental"
                        : "Ensino Médio"
                }
            </small>
        `;

        botao.addEventListener(
            "click",
            function() {

                selecionarSerie(
                    index + 1,
                    serie,
                    botao
                );

            }
        );

        container.appendChild(botao);

    });
}


/* =====================================================
   ESCOLHER SÉRIE
===================================================== */

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


/* =====================================================
   CRIAR MATÉRIAS
===================================================== */

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

            <strong>
                ${materia.nome}
            </strong>

            <small>
                Estudar ${materia.nome}
            </small>
        `;

        botao.addEventListener(
            "click",
            function() {

                selecionarMateria(
                    materia.id,
                    materia.nome,
                    botao
                );

            }
        );

        container.appendChild(botao);

    });
}


/* =====================================================
   ESCOLHER MATÉRIA
===================================================== */

function selecionarMateria(id, nome, botao) {

    /*
       IMPORTANTE:
       Quando a matéria muda,
       TODA atividade anterior é apagada.
    */

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

    limparAreaEstudo();

    const stepAtividade =
        document.getElementById("stepAtividade");

    if (stepAtividade) {
        stepAtividade.classList.remove("disabled");
    }

    atualizarOpcoesDeAtividade();

    atualizarResumo();

    rolarPara("stepAtividade");
}


/* =====================================================
   ATIVIDADES
===================================================== */

function atualizarOpcoesDeAtividade() {

    const step =
        document.getElementById(
            "stepAtividade"
        );

    if (!step) {
        return;
    }

    const grid =
        step.querySelector(
            ".option-grid"
        );

    if (!grid) {
        return;
    }


    /*
       PRIMEIRO:
       limpar absolutamente tudo.
    */

    grid.innerHTML = "";


    /*
       ATIVIDADES NORMAIS
    */

    const atividades = [

        {
            id: "questoes",
            emoji: "📝",
            titulo: "Questões",
            descricao: "Resolva exercícios"
        },

        {
            id: "conteudo",
            emoji: "📖",
            titulo: "Estudar conteúdo",
            descricao: "Aprenda a matéria"
        },

        {
            id: "exemplo",
            emoji: "💡",
            titulo: "Exemplos resolvidos",
            descricao: "Veja como fazer"
        },

        {
            id: "simulado",
            emoji: "🎯",
            titulo: "Simulado",
            descricao: "Teste seus conhecimentos"
        }

    ];


    atividades.forEach(
        atividade => {

            const botao =
                document.createElement("button");

            botao.type = "button";

            botao.className =
                "selection-card";

            botao.innerHTML = `
                <span>
                    ${atividade.emoji}
                </span>

                <strong>
                    ${atividade.titulo}
                </strong>

                <small>
                    ${atividade.descricao}
                </small>
            `;

            botao.addEventListener(
                "click",
                function() {

                    iniciarAtividade(
                        atividade.id
                    );

                }
            );

            grid.appendChild(botao);

        }
    );


    /*
       REDAÇÃO É EXCLUSIVA
       DE LÍNGUA PORTUGUESA.
    */

    if (
        materiaIdEscolhida === "portugues"
    ) {

        const botaoRedacao =
            document.createElement("button");

        botaoRedacao.type = "button";

        botaoRedacao.className =
            "selection-card";

        botaoRedacao.innerHTML = `
            <span>✍️</span>

            <strong>
                Redação
            </strong>

            <small>
                Escreva e pratique
            </small>
        `;

        botaoRedacao.addEventListener(
            "click",
            function() {

                iniciarAtividade(
                    "redacao"
                );

            }
        );

        grid.appendChild(
            botaoRedacao
        );
    }
}


/* =====================================================
   INICIAR ATIVIDADE
===================================================== */

function iniciarAtividade(tipo) {

    /*
       BLOQUEIO DEFINITIVO DA REDAÇÃO
       PARA OUTRAS MATÉRIAS.
    */

    if (
        tipo === "redacao" &&
        materiaIdEscolhida !== "portugues"
    ) {

        alert(
            "❌ Redação só está disponível para Língua Portuguesa."
        );

        return;
    }


    /*
       Não permite atividade sem
       nível, série ou matéria.
    */

    if (
        !nivelEscolhido ||
        !serieEscolhida ||
        !materiaEscolhida
    ) {

        alert(
            "Escolha o nível, a série e a matéria primeiro."
        );

        return;
    }


    atividadeEscolhida = tipo;

    atualizarResumo();


    const studyArea =
        document.getElementById(
            "studyArea"
        );

    if (!studyArea) {
        return;
    }


    studyArea.style.display =
        "block";


    const nomeNivel =
        nivelEscolhido === "fundamental"
            ? "Ensino Fundamental"
            : "Ensino Médio";


    let titulo = "";
    let texto = "";


    switch (tipo) {

        case "questoes":

            titulo = "📝 Questões";

            texto =
                `Você escolheu fazer questões de ${materiaEscolhida}.`;

            break;


        case "conteudo":

            titulo = "📖 Estudar conteúdo";

            texto =
                `Conteúdos de ${materiaEscolhida} do ${serieEscolhida}.`;

            break;


        case "exemplo":

            titulo = "💡 Exemplos resolvidos";

            texto =
                `Exemplos de ${materiaEscolhida} explicados passo a passo.`;

            break;


        case "simulado":

            titulo = "🎯 Simulado";

            texto =
                `Simulado de ${materiaEscolhida} para ${serieEscolhida}.`;

            break;


        case "redacao":

            /*
               SEGURANÇA EXTRA.
               Mesmo que alguém tente chamar
               a função manualmente,
               Matemática nunca abrirá redação.
            */

            if (
                materiaIdEscolhida !== "portugues"
            ) {

                alert(
                    "❌ Esta matéria não possui redação."
                );

                return;
            }

            titulo = "✍️ Redação";

            texto =
                `Pratique redação em Língua Portuguesa.`;

            break;


        default:

            titulo = "📚 Atividade";

            texto =
                "Escolha uma atividade.";

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
                    🚧 Sistema em desenvolvimento
                </strong>

                <p>
                    Esta área será usada para
                    questões, conteúdos, exemplos,
                    simulados, resultados e redações.
                </p>

            </div>

        </div>

    `;


    rolarPara("studyArea");
}


/* =====================================================
   RESUMO
===================================================== */

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


/* =====================================================
   LIMPAR ÁREA
===================================================== */

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


/* =====================================================
   LIMPAR SELEÇÕES
===================================================== */

function limparSelecoes() {

    document
        .querySelectorAll(
            ".selection-card"
        )
        .forEach(card => {

            card.classList.remove(
                "selected"
            );

        });
}


/* =====================================================
   ROLAGEM
===================================================== */

function rolarPara(id) {

    const elemento =
        document.getElementById(id);

    if (!elemento) {
        return;
    }

    setTimeout(
        function() {

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        150
    );
}


/* =====================================================
   MENU MOBILE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const links =
            document.querySelectorAll(
                "#menu a"
            );

        links.forEach(
            link => {

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

            }
        );

    }
);
