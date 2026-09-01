let perguntasAtuais = [];
let respostasUsuario = [];
let questaoAtual = 0;


function criarQuestoes() {

    const materia = materiaIdEscolhida;
    const serie = Number(serieEscolhida);

    if (materia === "matematica") {

        if (nivelEscolhido === "fundamental") {

            if (serie <= 3) {

                return [
                    {
                        pergunta: "Quanto é 8 + 7?",
                        alternativas: ["13", "14", "15", "16"],
                        correta: 2
                    },
                    {
                        pergunta: "Quanto é 20 - 6?",
                        alternativas: ["12", "13", "14", "15"],
                        correta: 2
                    },
                    {
                        pergunta: "Quanto é 5 × 4?",
                        alternativas: ["15", "20", "25", "30"],
                        correta: 1
                    }
                ];

            }

            if (serie <= 6) {

                return [
                    {
                        pergunta: "Quanto é 25% de 80?",
                        alternativas: ["10", "15", "20", "25"],
                        correta: 2
                    },
                    {
                        pergunta: "Qual é o resultado de 3²?",
                        alternativas: ["6", "8", "9", "12"],
                        correta: 2
                    },
                    {
                        pergunta: "Qual fração representa metade?",
                        alternativas: ["1/3", "1/2", "2/3", "3/4"],
                        correta: 1
                    }
                ];

            }

            return [
                {
                    pergunta: "Resolva: 2x + 6 = 16.",
                    alternativas: ["x = 4", "x = 5", "x = 6", "x = 8"],
                    correta: 1
                },
                {
                    pergunta: "Qual é a área de um retângulo de 8 cm por 5 cm?",
                    alternativas: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
                    correta: 2
                },
                {
                    pergunta: "Quanto é 30% de 200?",
                    alternativas: ["30", "40", "50", "60"],
                    correta: 3
                }
            ];
        }

        return [
            {
                pergunta: "Quanto é 15% de 200?",
                alternativas: ["15", "20", "30", "40"],
                correta: 2
            },
            {
                pergunta: "Resolva: 3x - 9 = 12.",
                alternativas: ["x = 5", "x = 6", "x = 7", "x = 8"],
                correta: 1
            },
            {
                pergunta: "Qual é a raiz quadrada de 144?",
                alternativas: ["10", "11", "12", "14"],
                correta: 2
            }
        ];
    }


    const banco = {

        portugues: [
            {
                pergunta: "Qual é a finalidade principal de um texto informativo?",
                alternativas: [
                    "Contar uma piada",
                    "Transmitir informações",
                    "Criar uma música",
                    "Fazer cálculos"
                ],
                correta: 1
            },
            {
                pergunta: "Qual palavra está escrita corretamente?",
                alternativas: [
                    "Excessão",
                    "Exceção",
                    "Eceção",
                    "Exessão"
                ],
                correta: 1
            }
        ],

        ciencias: [
            {
                pergunta: "Qual órgão é responsável por bombear o sangue pelo corpo?",
                alternativas: [
                    "Pulmão",
                    "Estômago",
                    "Coração",
                    "Fígado"
                ],
                correta: 2
            },
            {
                pergunta: "Qual planeta é conhecido como planeta vermelho?",
                alternativas: [
                    "Marte",
                    "Vênus",
                    "Júpiter",
                    "Saturno"
                ],
                correta: 0
            }
        ],

        historia: [
            {
                pergunta: "Em que ano ocorreu a Independência do Brasil?",
                alternativas: [
                    "1500",
                    "1822",
                    "1889",
                    "1930"
                ],
                correta: 1
            },
            {
                pergunta: "Quem proclamou a Independência do Brasil?",
                alternativas: [
                    "Dom Pedro I",
                    "Tiradentes",
                    "Getúlio Vargas",
                    "Marechal Deodoro"
                ],
                correta: 0
            }
        ],

        geografia: [
            {
                pergunta: "Qual é o maior país da América do Sul em território?",
                alternativas: [
                    "Argentina",
                    "Brasil",
                    "Chile",
                    "Peru"
                ],
                correta: 1
            },
            {
                pergunta: "Qual é a capital do Paraná?",
                alternativas: [
                    "Londrina",
                    "Maringá",
                    "Curitiba",
                    "Cascavel"
                ],
                correta: 2
            }
        ],

        ingles: [
            {
                pergunta: 'Qual é a tradução de "book"?',
                alternativas: [
                    "Mesa",
                    "Livro",
                    "Casa",
                    "Caneta"
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a tradução de "school"?',
                alternativas: [
                    "Escola",
                    "Igreja",
                    "Hospital",
                    "Mercado"
                ],
                correta: 0
            }
        ],

        biologia: [
            {
                pergunta: "Qual é a unidade básica dos seres vivos?",
                alternativas: [
                    "Tecido",
                    "Órgão",
                    "Célula",
                    "Sistema"
                ],
                correta: 2
            },
            {
                pergunta: "Qual organela está relacionada à produção de energia celular?",
                alternativas: [
                    "Mitocôndria",
                    "Núcleo",
                    "Ribossomo",
                    "Vacúolo"
                ],
                correta: 0
            }
        ],

        fisica: [
            {
                pergunta: "Qual é a unidade de força no Sistema Internacional?",
                alternativas: [
                    "Joule",
                    "Watt",
                    "Newton",
                    "Pascal"
                ],
                correta: 2
            },
            {
                pergunta: "Qual grandeza mede a quantidade de matéria?",
                alternativas: [
                    "Massa",
                    "Velocidade",
                    "Força",
                    "Potência"
                ],
                correta: 0
            }
        ],

        quimica: [
            {
                pergunta: "Qual é a fórmula química da água?",
                alternativas: [
                    "CO₂",
                    "H₂O",
                    "O₂",
                    "NaCl"
                ],
                correta: 1
            },
            {
                pergunta: "Qual partícula possui carga negativa?",
                alternativas: [
                    "Próton",
                    "Nêutron",
                    "Elétron",
                    "Núcleo"
                ],
                correta: 2
            }
        ],

        filosofia: [
            {
                pergunta: "A Filosofia busca principalmente:",
                alternativas: [
                    "Questionar e refletir",
                    "Decorar fórmulas",
                    "Fazer exercícios físicos",
                    "Aprender idiomas"
                ],
                correta: 0
            },
            {
                pergunta: "Quem foi um importante filósofo da Grécia Antiga?",
                alternativas: [
                    "Sócrates",
                    "Newton",
                    "Darwin",
                    "Einstein"
                ],
                correta: 0
            }
        ],

        sociologia: [
            {
                pergunta: "A Sociologia estuda principalmente:",
                alternativas: [
                    "As sociedades e relações sociais",
                    "Somente os planetas",
                    "Somente os animais",
                    "Somente os números"
                ],
                correta: 0
            },
            {
                pergunta: "O que é cultura?",
                alternativas: [
                    "Somente música",
                    "Conjunto de costumes, valores e práticas",
                    "Somente comida",
                    "Somente religião"
                ],
                correta: 1
            }
        ],

        arte: [
            {
                pergunta: "A pintura é uma forma de:",
                alternativas: [
                    "Expressão artística",
                    "Cálculo",
                    "Experimento químico",
                    "Esporte"
                ],
                correta: 0
            },
            {
                pergunta: "A música utiliza principalmente:",
                alternativas: [
                    "Sons",
                    "Números",
                    "Mapas",
                    "Fórmulas"
                ],
                correta: 0
            }
        ],

        "educacao-fisica": [
            {
                pergunta: "A prática de atividades físicas pode contribuir para:",
                alternativas: [
                    "A saúde e o bem-estar",
                    "Apenas o aprendizado de matemática",
                    "Apenas a leitura",
                    "Nada"
                ],
                correta: 0
            },
            {
                pergunta: "Qual é um exemplo de esporte coletivo?",
                alternativas: [
                    "Futebol",
                    "Xadrez individual",
                    "Corrida individual",
                    "Salto em distância"
                ],
                correta: 0
            }
        ]
    };


    return banco[materia] || [
        {
            pergunta: `Questão de ${materiaEscolhida}. Qual alternativa representa melhor o conteúdo estudado?`,
            alternativas: [
                "Alternativa A",
                "Alternativa B",
                "Alternativa C",
                "Alternativa D"
            ],
            correta: 0
        }
    ];
}


function abrirQuestoes() {

    perguntasAtuais = criarQuestoes();
    respostasUsuario = [];
    questaoAtual = 0;

    const area = document.getElementById("areaEstudo");

    area.innerHTML = `
        <div class="area-atividade">

            <h2>📝 Questões</h2>

            <p>
                ${materiaEscolhida} — ${serieEscolhida}º ano
            </p>

            <div id="questaoContainer"></div>

        </div>
    `;

    mostrarQuestao();

    area.scrollIntoView({
        behavior: "smooth"
    });
}


function mostrarQuestao() {

    const container = document.getElementById("questaoContainer");

    if (!container) return;

    if (questaoAtual >= perguntasAtuais.length) {

        finalizarQuestoes();
        return;
    }

    const q = perguntasAtuais[questaoAtual];

    container.innerHTML = `
        <div class="questao">

            <h3>
                Questão ${questaoAtual + 1}
                de ${perguntasAtuais.length}
            </h3>

            <p>${q.pergunta}</p>

            <div class="alternativas">

                ${q.alternativas.map((alt, index) => `
                    <button
                        class="alternativa"
                        onclick="responderQuestao(${index})">

                        ${String.fromCharCode(65 + index)})
                        ${alt}

                    </button>
                `).join("")}

            </div>

        </div>
    `;
}


function responderQuestao(resposta) {

    const q = perguntasAtuais[questaoAtual];

    respostasUsuario.push({
        correta: resposta === q.correta
    });

    questaoAtual++;

    mostrarQuestao();
}


function finalizarQuestoes() {

    let acertos = 0;

    respostasUsuario.forEach(resposta => {

        if (resposta.correta) {
            acertos++;
        }

    });

    const total = perguntasAtuais.length;
    const erros = total - acertos;
    const porcentagem = Math.round((acertos / total) * 100);

    if (typeof registrarResultadoAtual === "function") {
        registrarResultadoAtual(acertos, erros, total);
    }

    document.getElementById("questaoContainer").innerHTML = `

        <div class="resultado-final">

            <h2>🎉 Resultado</h2>

            <p><strong>Acertos:</strong> ${acertos}</p>

            <p><strong>Erros:</strong> ${erros}</p>

            <p><strong>Aproveitamento:</strong> ${porcentagem}%</p>

            <button
                class="botao-atividade"
                onclick="abrirQuestoes()">

                Fazer novamente

            </button>

            <a
                class="botao-atividade"
                href="resultados.html">

                Ver resultados

            </a>

        </div>

    `;
                }
