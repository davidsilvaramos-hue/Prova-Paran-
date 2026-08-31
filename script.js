function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {

        menu.classList.toggle("active");

    }

}


/* =========================
   CORREÇÃO DO QUIZ
========================= */

function corrigirQuiz() {

    const respostasCorretas = {

        q1: "c",

        q2: "a",

        q3: "b",

        q4: "a",

        q5: "c",

        q6: "c",

        q7: "c",

        q8: "a",

        q9: "b",

        q10: "b"

    };


    let acertos = 0;

    let respondidas = 0;

    const total = Object.keys(respostasCorretas).length;


    for (const questao in respostasCorretas) {

        const resposta =
            document.querySelector(
                'input[name="' + questao + '"]:checked'
            );


        if (resposta) {

            respondidas++;

            if (
                resposta.value ===
                respostasCorretas[questao]
            ) {

                acertos++;

            }

        }

    }


    const resultado =
        document.getElementById("resultadoQuiz");


    if (!resultado) {

        return;

    }


    if (respondidas < total) {

        resultado.style.display = "block";

        resultado.className =
            "quiz-result warning-result";

        resultado.innerHTML =

            "<h2>⚠️ Responda todas as questões</h2>" +

            "<p>Você respondeu " +
            respondidas +
            " de " +
            total +
            " questões.</p>";

        resultado.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    const porcentagem =
        Math.round((acertos / total) * 100);


    localStorage.setItem(
        "ultimoResultado",
        acertos + "/" + total
    );


    localStorage.setItem(
        "ultimaPorcentagem",
        porcentagem
    );


    let mensagem = "";


    if (porcentagem === 100) {

        mensagem =
            "🏆 Excelente! Você acertou tudo!";

    }

    else if (porcentagem >= 70) {

        mensagem =
            "👏 Muito bom! Continue praticando.";

    }

    else if (porcentagem >= 50) {

        mensagem =
            "👍 Bom começo! Revise alguns conteúdos.";

    }

    else {

        mensagem =
            "📚 Continue estudando e tente novamente.";

    }


    resultado.style.display = "block";

    resultado.className =
        "quiz-result success-result";


    resultado.innerHTML =

        "<div class='big-score'>" +
        acertos +
        "/" +
        total +
        "</div>" +

        "<h2>" +
        mensagem +
        "</h2>" +

        "<p>Você acertou " +
        porcentagem +
        "% das questões.</p>" +

        "<a href='resultados.html' class='btn'>" +
        "📊 Ver resultado" +
        "</a>" +

        "<button onclick='refazerQuiz()' class='btn secondary'>" +
        "🔄 Fazer novamente" +
        "</button>";


    resultado.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   REFAZER
========================= */

function refazerQuiz() {

    const quiz =
        document.getElementById("quiz");


    if (quiz) {

        quiz.reset();

    }


    const resultado =
        document.getElementById("resultadoQuiz");


    if (resultado) {

        resultado.style.display = "none";

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   RESULTADO
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const resultado =
            document.getElementById(
                "ultimoResultado"
            );


        if (resultado) {

            const ultimo =
                localStorage.getItem(
                    "ultimoResultado"
                );


            const porcentagem =
                localStorage.getItem(
                    "ultimaPorcentagem"
                );


            if (ultimo && porcentagem) {

                resultado.innerHTML =

                    "<div class='big-score'>" +
                    ultimo +
                    "</div>" +

                    "<p>Você acertou " +
                    porcentagem +
                    "% das questões no último exercício.</p>";

            }

        }


        const links =
            document.querySelectorAll(
                "#menu a"
            );


        links.forEach(function(link) {

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
