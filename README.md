const CHAVE_RESULTADOS =
    "provaParanaResultados";


function obterResultadosSalvos() {

    try {

        return JSON.parse(
            localStorage.getItem(CHAVE_RESULTADOS)
        ) || [];

    } catch (erro) {

        return [];

    }
}


function salvarResultado(resultado) {

    const resultados =
        obterResultadosSalvos();

    resultados.unshift(resultado);

    localStorage.setItem(
        CHAVE_RESULTADOS,
        JSON.stringify(resultados)
    );
}


function registrarResultadoAtual(
    acertos,
    erros,
    total
) {

    const resultado = {

        data: new Date().toLocaleString("pt-BR"),

        nivel:
            typeof nivelEscolhido !== "undefined"
                ? nivelEscolhido
                : "",

        serie:
            typeof serieEscolhida !== "undefined"
                ? serieEscolhida
                : "",

        materia:
            typeof materiaEscolhida !== "undefined"
                ? materiaEscolhida
                : "",

        atividade:
            typeof atividadeEscolhida !== "undefined"
                ? atividadeEscolhida
                : "",

        acertos: acertos,

        erros: erros,

        total: total,

        porcentagem:
            total > 0
                ? Math.round((acertos / total) * 100)
                : 0
    };


    salvarResultado(resultado);
}


function calcularEstatisticas() {

    const resultados =
        obterResultadosSalvos();


    let totalQuestoes = 0;
    let totalAcertos = 0;
    let totalErros = 0;


    resultados.forEach(resultado => {

        totalQuestoes +=
            Number(resultado.total) || 0;

        totalAcertos +=
            Number(resultado.acertos) || 0;

        totalErros +=
            Number(resultado.erros) || 0;

    });


    const porcentagem =
        totalQuestoes > 0
            ? Math.round(
                (totalAcertos / totalQuestoes) * 100
            )
            : 0;


    return {

        atividades: resultados.length,

        questoes: totalQuestoes,

        acertos: totalAcertos,

        erros: totalErros,

        porcentagem: porcentagem

    };
}


function mostrarResultados() {

    const estatisticas =
        document.getElementById("estatisticas");

    const historico =
        document.getElementById("historico");


    if (!estatisticas || !historico) {
        return;
    }


    const resultados =
        obterResultadosSalvos();

    const dados =
        calcularEstatisticas();


    estatisticas.innerHTML = `

        <div class="resultado-card">

            <strong>
                ${dados.atividades}
            </strong>

            <span>
                Atividades
            </span>

        </div>


        <div class="resultado-card">

            <strong>
                ${dados.acertos}
            </strong>

            <span>
                Acertos
            </span>

        </div>


        <div class="resultado-card">

            <strong>
                ${dados.porcentagem}%
            </strong>

            <span>
                Aproveitamento
            </span>

        </div>

    `;


    if (resultados.length === 0) {

        historico.innerHTML = `

            <div class="historico-item">

                <h3>📊 Ainda não há resultados</h3>

                <p>
                    Faça algumas questões ou simulados
                    para seus resultados aparecerem aqui.
                </p>

            </div>

        `;

        return;
    }


    historico.innerHTML = `

        <h2>Histórico</h2>

        ${resultados.map(resultado => `

            <div class="historico-item">

                <strong>
                    ${resultado.materia || "Disciplina"}
                </strong>

                <p>
                    ${resultado.atividade || "Atividade"}
                    —
                    ${resultado.serie
                        ? resultado.serie + "º ano"
                        : ""}
                </p>

                <p>
                    ${resultado.acertos}
                    acertos de
                    ${resultado.total}
                </p>

                <p>
                    Aproveitamento:
                    <strong>
                        ${resultado.porcentagem}%
                    </strong>
                </p>

                <small>
                    ${resultado.data}
                </small>

            </div>

        `).join("")}

    `;
}


function limparResultados() {

    const confirmar =
        confirm(
            "Tem certeza que deseja apagar todo o histórico?"
        );


    if (!confirmar) {
        return;
    }


    localStorage.removeItem(
        CHAVE_RESULTADOS
    );


    mostrarResultados();
}


document.addEventListener(
    "DOMContentLoaded",
    mostrarResultados
);
