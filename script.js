let nivelEscolhido = "";
let serieEscolhida = "";
let materiaEscolhida = "";
let materiaIdEscolhida = "";
let atividadeEscolhida = "";


function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("aberto");
    }
}


const materiasFundamental = [
    ["Português", "portugues"],
    ["Matemática", "matematica"],
    ["Ciências", "ciencias"],
    ["História", "historia"],
    ["Geografia", "geografia"],
    ["Inglês", "ingles"],
    ["Arte", "arte"],
    ["Educação Física", "educacao-fisica"]
];


const materiasMedio = [
    ["Português", "portugues"],
    ["Matemática", "matematica"],
    ["Biologia", "biologia"],
    ["Física", "fisica"],
    ["Química", "quimica"],
    ["História", "historia"],
    ["Geografia", "geografia"],
    ["Inglês", "ingles"],
    ["Filosofia", "filosofia"],
    ["Sociologia", "sociologia"],
    ["Arte", "arte"]
];


function selecionarNivel(nivel) {

    nivelEscolhido = nivel;
    serieEscolhida = "";
    materiaEscolhida = "";
    materiaIdEscolhida = "";
    atividadeEscolhida = "";

    criarSeries();

    document.getElementById("materiasArea").innerHTML = "";
    document.getElementById("atividadesArea").innerHTML = "";
    document.getElementById("areaEstudo").innerHTML = "";

    document.getElementById("seriesArea").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function criarSeries() {

    const area = document.getElementById("seriesArea");

    if (!area) return;

    let series = [];

    if (nivelEscolhido === "fundamental") {

        for (let i = 1; i <= 9; i++) {
            series.push(`${i}º ano`);
        }

    } else {

        for (let i = 1; i <= 3; i++) {
            series.push(`${i}º ano`);
        }

    }

    area.innerHTML = `
        <div class="bloco-selecao">
            <h3>Escolha sua série</h3>

            <div class="opcoes">

                ${series.map((serie, index) => `
                    <button
                        class="opcao"
                        onclick="selecionarSerie(${index + 1})">
                        ${serie}
                    </button>
                `).join("")}

            </div>
        </div>
    `;
}


function selecionarSerie(numero) {

    serieEscolhida = numero;

    criarMaterias();

    document.getElementById("atividadesArea").innerHTML = "";
    document.getElementById("areaEstudo").innerHTML = "";

    document.getElementById("materiasArea").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function criarMaterias() {

    const area = document.getElementById("materiasArea");

    const materias =
        nivelEscolhido === "fundamental"
            ? materiasFundamental
            : materiasMedio;

    area.innerHTML = `
        <div class="bloco-selecao">

            <h3>
                Escolha a disciplina —
                ${serieEscolhida}º ano
            </h3>

            <div class="opcoes">

                ${materias.map(materia => `
                    <button
                        class="opcao"
                        onclick="selecionarMateria('${materia[1]}', '${materia[0]}')">
                        ${materia[0]}
                    </button>
                `).join("")}

            </div>

        </div>
    `;
}


function selecionarMateria(id, nome) {

    materiaIdEscolhida = id;
    materiaEscolhida = nome;
    atividadeEscolhida = "";

    atualizarOpcoesDeAtividade();

    document.getElementById("atividadesArea").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function atualizarOpcoesDeAtividade() {

    const area = document.getElementById("atividadesArea");

    let redacao = "";

    if (materiaIdEscolhida === "portugues") {

        redacao = `
            <button class="atividade"
                onclick="iniciarAtividade('redacao')">

                <strong>✍️ Redação</strong>

                <span>
                    Pratique produção de texto e organize suas ideias.
                </span>

            </button>
        `;
    }

    area.innerHTML = `
        <div class="bloco-selecao">

            <h3>
                O que você quer fazer em
                ${materiaEscolhida}?
            </h3>

            <button class="atividade"
                onclick="iniciarAtividade('questoes')">

                <strong>📝 Questões</strong>

                <span>
                    Resolva questões e veja seu resultado.
                </span>

            </button>

            <button class="atividade"
                onclick="iniciarAtividade('conteudo')">

                <strong>📖 Estudar conteúdo</strong>

                <span>
                    Veja explicações sobre a matéria.
                </span>

            </button>

            <button class="atividade"
                onclick="iniciarAtividade('exemplos')">

                <strong>💡 Exemplos resolvidos</strong>

                <span>
                    Aprenda através de exemplos passo a passo.
                </span>

            </button>

            <button class="atividade"
                onclick="iniciarAtividade('simulado')">

                <strong>🎯 Simulado</strong>

                <span>
                    Faça uma sequência de questões.
                </span>

            </button>

            ${redacao}

        </div>
    `;
}


function iniciarAtividade(tipo) {

    atividadeEscolhida = tipo;

    if (tipo === "questoes") {

        if (typeof abrirQuestoes === "function") {
            abrirQuestoes();
        }

    } else if (tipo === "conteudo") {

        if (typeof abrirConteudo === "function") {
            abrirConteudo();
        }

    } else if (tipo === "exemplos") {

        if (typeof abrirExemplos === "function") {
            abrirExemplos();
        }

    } else if (tipo === "redacao") {

        if (materiaIdEscolhida !== "portugues") {
            alert("Redação está disponível somente em Português.");
            return;
        }

        if (typeof abrirRedacao === "function") {
            abrirRedacao();
        }

    } else if (tipo === "simulado") {

        if (typeof abrirSimulado === "function") {
            abrirSimulado();
        }
    }
}


function atualizarResumo() {

    return {
        nivel: nivelEscolhido,
        serie: serieEscolhida,
        materia: materiaEscolhida,
        materiaId: materiaIdEscolhida
    };
}


function rolarPara(id) {

    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.scrollIntoView({
            behavior: "smooth"
        });
    }
}
