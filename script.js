/* =========================================
   PROVA PARANÁ
   ESTILO PRINCIPAL
========================================= */

:root {

    --blue-dark: #123b63;
    --blue: #1769aa;
    --blue-light: #eaf5ff;

    --green: #15966d;
    --green-light: #e9f8f2;

    --orange: #f59e0b;
    --orange-light: #fff6df;

    --white: #ffffff;
    --background: #f4f8fc;

    --text: #1c3045;
    --text-light: #647589;

    --border: #dce6ef;

    --shadow:
        0 12px 35px rgba(18, 59, 99, 0.08);

    --radius: 20px;

}


/* =========================================
   RESET
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    background: var(--background);

    color: var(--text);

    line-height: 1.6;

}


a {
    text-decoration: none;
    color: inherit;
}


button {
    font-family: inherit;
}


.container {

    width: 90%;

    max-width: 1180px;

    margin: 0 auto;

}


/* =========================================
   HEADER
========================================= */

.header {

    background: rgba(255, 255, 255, 0.97);

    border-bottom:
        1px solid var(--border);

    position: sticky;

    top: 0;

    z-index: 1000;

    backdrop-filter: blur(10px);

}


.header-content {

    min-height: 82px;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


/* LOGO */

.logo {

    display: flex;

    align-items: center;

    gap: 12px;

}


.logo-symbol {

    width: 50px;

    height: 50px;

    border-radius: 15px;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        linear-gradient(
            135deg,
            #1769aa,
            #15966d
        );

    box-shadow:
        0 8px 18px rgba(23, 105, 170, 0.20);

}


.logo-symbol span {

    font-size: 27px;

}


.logo-text {

    display: flex;

    flex-direction: column;

    line-height: 1;

}


.logo-text strong {

    color: var(--blue-dark);

    font-size: 18px;

    letter-spacing: 0.5px;

}


.logo-text span {

    color: var(--green);

    font-size: 18px;

    font-weight: 700;

    letter-spacing: 0.5px;

}


/* =========================================
   MENU DESKTOP
========================================= */

.main-nav ul {

    list-style: none;

    display: flex;

    align-items: center;

    gap: 4px;

}


.main-nav a,
.dropdown-btn {

    color: #42566b;

    font-size: 15px;

    font-weight: 600;

    padding:
        11px 14px;

    border-radius: 10px;

    transition:
        0.2s ease;

}


.main-nav a:hover,
.dropdown-btn:hover,
.main-nav a.active {

    color: var(--blue);

    background: var(--blue-light);

}


.dropdown {

    position: relative;

}


.dropdown-btn {

    border: none;

    background: transparent;

    cursor: pointer;

}


.dropdown-btn span {

    margin-left: 3px;

}


.dropdown-menu {

    position: absolute;

    top: calc(100% + 8px);

    left: 0;

    min-width: 190px;

    padding: 8px;

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: 14px;

    box-shadow: var(--shadow);

    display: none;

}


.dropdown-menu a {

    display: block;

    width: 100%;

}


.dropdown:hover .dropdown-menu,
.dropdown.active .dropdown-menu {

    display: block;

}


/* =========================================
   BOTÃO HAMBÚRGUER
========================================= */

.menu-btn {

    display: none;

    width: 46px;

    height: 46px;

    border: none;

    background: var(--blue-light);

    border-radius: 12px;

    align-items: center;

    justify-content: center;

    flex-direction: column;

    gap: 5px;

    cursor: pointer;

}


.menu-btn span {

    width: 27px;

    height: 3px;

    background: var(--blue-dark);

    border-radius: 5px;

    transition: 0.2s;

}


.menu-btn.active span:nth-child(1) {

    transform:
        translateY(8px)
        rotate(45deg);

}


.menu-btn.active span:nth-child(2) {

    opacity: 0;

}


.menu-btn.active span:nth-child(3) {

    transform:
        translateY(-8px)
        rotate(-45deg);

}


/* =========================================
   HERO
========================================= */

.hero {

    position: relative;

    overflow: hidden;

    background:
        linear-gradient(
            135deg,
            #eaf5ff 0%,
            #f3fbf8 100%
        );

    padding:
        90px 0 85px;

}


.hero-content {

    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns:
        1.2fr
        0.8fr;

    gap: 70px;

    align-items: center;

}


.badge {

    display: inline-block;

    padding:
        8px 14px;

    border-radius: 50px;

    background: var(--white);

    color: var(--green);

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1px;

    box-shadow:
        0 6px 18px
        rgba(23, 105, 170, 0.08);

}


.hero h1 {

    font-size:
        clamp(42px, 6vw, 70px);

    line-height: 1.05;

    color: var(--blue-dark);

    margin:
        20px 0;

}


.hero h1 span {

    display: block;

    color: var(--green);

}


.hero-text > p,
.hero-text p {

    color: var(--text-light);

    font-size: 19px;

    max-width: 650px;

}


.hero-buttons {

    display: flex;

    flex-wrap: wrap;

    gap: 12px;

    margin-top: 30px;

}


/* DECORAÇÕES */

.hero-decoration {

    position: absolute;

    border-radius: 50%;

    opacity: 0.5;

}


.hero-decoration-one {

    width: 300px;

    height: 300px;

    background: #cde9ff;

    right: -120px;

    top: -100px;

}


.hero-decoration-two {

    width: 180px;

    height: 180px;

    background: #c9f0df;

    left: -70px;

    bottom: -80px;

}


/* HERO CARD */

.hero-card {

    background: var(--white);

    border:
        1px solid rgba(255,255,255,0.8);

    border-radius: 25px;

    padding: 30px;

    box-shadow:
        0 25px 55px
        rgba(18, 59, 99, 0.13);

}


.hero-card-top {

    display: flex;

    align-items: center;

    gap: 10px;

    color: var(--blue);

    margin-bottom: 22px;

}


.hero-card-top span {

    width: 45px;

    height: 45px;

    border-radius: 13px;

    background: var(--blue-light);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 23px;

}


.hero-card h3 {

    font-size: 26px;

    color: var(--blue-dark);

    margin-bottom: 10px;

}


.hero-card > p {

    color: var(--text-light);

}


.progress {

    margin-top: 25px;

    display: grid;

    gap: 10px;

}


.progress-item {

    display: flex;

    justify-content: space-between;

    align-items: center;

    background: var(--background);

    padding: 13px 15px;

    border-radius: 12px;

    font-size: 14px;

    font-weight: 600;

}


.progress-item b {

    color: var(--green);

}


/* =========================================
   BOTÕES
========================================= */

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    padding:
        13px 20px;

    border-radius: 11px;

    font-weight: 700;

    transition:
        0.2s ease;

}


.btn-primary {

    background: var(--blue-dark);

    color: var(--white);

    box-shadow:
        0 8px 18px
        rgba(18, 59, 99, 0.16);

}


.btn-primary:hover {

    background: var(--blue);

    transform:
        translateY(-2px);

}


.btn-secondary {

    background: var(--white);

    color: var(--blue-dark);

    border:
        1px solid var(--border);

}


.btn-secondary:hover {

    background: var(--blue-light);

}


.btn-light {

    background: var(--white);

    color: var(--blue-dark);

}


.btn-light:hover {

    background: var(--green-light);

    color: var(--green);

}


/* =========================================
   HIGHLIGHTS
========================================= */

.highlights {

    background: var(--white);

    border-bottom:
        1px solid var(--border);

}


.highlights-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

}


.highlight {

    display: flex;

    align-items: center;

    gap: 15px;

    padding: 25px 20px;

    border-right:
        1px solid var(--border);

}


.highlight:last-child {

    border-right: none;

}


.highlight-icon {

    width: 48px;

    height: 48px;

    border-radius: 13px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: var(--green-light);

    font-size: 22px;

}


.highlight strong {

    display: block;

    color: var(--blue-dark);

}


.highlight span {

    display: block;

    color: var(--text-light);

    font-size: 13px;

}


/* =========================================
   SEÇÕES
========================================= */

.section {

    padding:
        90px 0;

}


.section-tag {

    color: var(--green);

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1.5px;

}


.section h2 {

    color: var(--blue-dark);

    font-size:
        clamp(32px, 4vw, 48px);

    line-height: 1.15;

}


.section-heading {

    max-width: 700px;

    margin-bottom: 40px;

}


.section-heading h2 {

    margin:
        10px 0 12px;

}


.section-heading p {

    color: var(--text-light);

    font-size: 17px;

}


/* =========================================
   SOBRE
========================================= */

.about-section {

    background: var(--white);

}


.two-columns {

    display: grid;

    grid-template-columns:
        0.8fr
        1.2fr;

    gap: 80px;

    align-items: start;

}


.about-section h2 {

    margin-top: 10px;

}


.about-section h2 span {

    color: var(--green);

}


.section-text p {

    color: var(--text-light);

    font-size: 17px;

    margin-bottom: 16px;

}


/* =========================================
   CARDS
========================================= */

.objectives-section {

    background: var(--background);

}


.cards-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 22px;

}


.info-card {

    position: relative;

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: var(--radius);

    padding: 30px;

    box-shadow: var(--shadow);

    transition: 0.25s;

    overflow: hidden;

}


.info-card:hover {

    transform:
        translateY(-5px);

}


.card-number {

    position: absolute;

    top: 20px;

    right: 22px;

    color: #dce9f5;

    font-size: 40px;

    font-weight: 900;

}


.card-icon {

    width: 58px;

    height: 58px;

    border-radius: 16px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: var(--blue-light);

    font-size: 27px;

    margin-bottom: 20px;

}


.info-card h3 {

    color: var(--blue-dark);

    font-size: 20px;

    margin-bottom: 10px;

}


.info-card p {

    color: var(--text-light);

}


.center-button {

    text-align: center;

    margin-top: 35px;

}


/* =========================================
   DISCIPLINAS
========================================= */

.disciplines-section {

    background: var(--white);

}


.discipline-grid {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 25px;

}


.discipline-card {

    display: flex;

    gap: 25px;

    padding: 30px;

    border-radius: 23px;

    border:
        1px solid var(--border);

    box-shadow: var(--shadow);

}


.discipline-card.portuguese {

    background:
        linear-gradient(
            135deg,
            #eef7ff,
            #ffffff
        );

}


.discipline-card.mathematics {

    background:
        linear-gradient(
            135deg,
            #eefaf5,
            #ffffff
        );

}


.discipline-icon {

    flex-shrink: 0;

    width: 70px;

    height: 70px;

    border-radius: 18px;

    background: var(--white);

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 35px;

    box-shadow:
        0 8px 18px
        rgba(18, 59, 99, 0.07);

}


.discipline-label {

    color: var(--green);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1px;

}


.discipline-content h3 {

    color: var(--blue-dark);

    font-size: 25px;

    margin: 5px 0 8px;

}


.discipline-content p {

    color: var(--text-light);

    margin-bottom: 14px;

}


.discipline-content a {

    color: var(--blue);

    font-weight: 700;

}


/* =========================================
   DICAS
========================================= */

.tips-section {

    background:
        linear-gradient(
            135deg,
            #f2f8fd,
            #edf9f5
        );

}


.tips-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

}


.tip-card {

    background: var(--white);

    padding: 25px;

    border-radius: 18px;

    border:
        1px solid var(--border);

    position: relative;

}


.tip-card > span {

    color: #b8c8d8;

    font-size: 13px;

    font-weight: 800;

}


.tip-card > div {

    font-size: 30px;

    margin:
        12px 0;

}


.tip-card h3 {

    color: var(--blue-dark);

    font-size: 18px;

    margin-bottom: 7px;

}


.tip-card p {

    color: var(--text-light);

    font-size: 14px;

}


/* =========================================
   RESULTADOS
========================================= */

.results-section {

    background: var(--white);

}


.results-box {

    background:
        linear-gradient(
            135deg,
            var(--blue-dark),
            #1769aa
        );

    color: var(--white);

    border-radius: 28px;

    padding: 55px;

    display: grid;

    grid-template-columns:
        0.9fr
        1.1fr;

    gap: 60px;

}


.results-title .section-tag {

    color: #75d5b2;

}


.results-title h2 {

    color: var(--white);

    margin:
        10px 0 15px;

}


.results-title p {

    color: #d9e8f5;

}


.results-list {

    display: grid;

    gap: 14px;

}


.result-item {

    display: flex;

    gap: 15px;

    background:
        rgba(255,255,255,0.09);

    border:
        1px solid rgba(255,255,255,0.10);

    border-radius: 16px;

    padding: 18px;

}


.result-icon {

    width: 45px;

    height: 45px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        rgba(255,255,255,0.12);

    border-radius: 12px;

    font-size: 21px;

}


.result-item h3 {

    font-size: 16px;

    margin-bottom: 3px;

}


.result-item p {

    color: #d7e6f3;

    font-size: 13px;

}


/* =========================================
   CTA
========================================= */

.final-cta {

    background: var(--green);

    color: var(--white);

    padding: 45px 0;

}


.final-cta-content {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;

}


.final-cta-content > span {

    font-size: 45px;

}


.final-cta-content h2 {

    font-size: 27px;

    margin-bottom: 3px;

}


.final-cta-content p {

    color: #d9f5e9;

}


/* =========================================
   PÁGINAS INTERNAS
========================================= */

.page-hero {

    background:
        linear-gradient(
            135deg,
            #eaf5ff,
            #eefaf5
        );

    padding:
        75px 0;

}


.page-hero h1 {

    color: var(--blue-dark);

    font-size:
        clamp(38px, 5vw, 60px);

    max-width: 800px;

    line-height: 1.1;

    margin:
        12px 0 15px;

}


.page-hero h1 span {

    color: var(--green);

}


.page-hero p {

    color: var(--text-light);

    font-size: 18px;

    max-width: 650px;

}


/* =========================================
   DISCIPLINAS INTERNA
========================================= */

.disciplines-page {

    background: var(--background);

}


.large-discipline-card {

    display: grid;

    grid-template-columns:
        110px
        1fr;

    gap: 30px;

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: 24px;

    padding: 35px;

    margin-bottom: 25px;

    box-shadow: var(--shadow);

}


.large-icon {

    width: 100px;

    height: 100px;

    border-radius: 24px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: var(--blue-light);

    font-size: 45px;

}


.large-discipline-card h2 {

    color: var(--blue-dark);

    font-size: 32px;

    margin:
        6px 0 10px;

}


.large-discipline-card p {

    color: var(--text-light);

    font-size: 17px;

}


.math-card .large-icon {

    background: var(--green-light);

}


.skill-list {

    display: flex;

    flex-wrap: wrap;

    gap: 9px;

    margin-top: 20px;

}


.skill-list span {

    background: var(--background);

    color: var(--blue-dark);

    padding:
        8px 12px;

    border-radius: 50px;

    font-size: 13px;

    font-weight: 700;

}


/* =========================================
   OBJETIVOS INTERNA
========================================= */

.objectives-page-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 22px;

}


.objective-card {

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: 20px;

    padding: 30px;

    position: relative;

    box-shadow: var(--shadow);

}


.objective-number {

    color: #dce9f5;

    font-size: 35px;

    font-weight: 900;

    margin-bottom: 10px;

}


.objective-card h3 {

    color: var(--blue-dark);

    font-size: 20px;

    margin-bottom: 8px;

}


.objective-card p {

    color: var(--text-light);

}


/* =========================================
   FOOTER
========================================= */

.footer {

    background: #0c2943;

    color: var(--white);

}


.footer-grid {

    padding:
        55px 0;

    display: grid;

    grid-template-columns:
        1.5fr
        1fr
        1fr
        1.2fr;

    gap: 40px;

}


.footer-logo .logo-text strong {

    color: var(--white);

}


.footer-brand > p {

    color: #afc3d4;

    margin-top: 15px;

}


.footer-column {

    display: flex;

    flex-direction: column;

    gap: 9px;

}


.footer-column h3 {

    font-size: 15px;

    margin-bottom: 8px;

}


.footer-column a,
.footer-column p {

    color: #afc3d4;

    font-size: 14px;

}


.footer-column a:hover {

    color: #72d7b2;

}


.footer-bottom {

    border-top:
        1px solid rgba(255,255,255,0.1);

}


.footer-bottom .container {

    min-height: 65px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 15px;

}


.footer-bottom p {

    color: #8fa7ba;

    font-size: 12px;

}


/* =========================================
   RESPONSIVO
========================================= */

@media (max-width: 900px) {

    .main-nav {

        position: absolute;

        top: 100%;

        right: 0;

        width: 300px;

        max-height: 0;

        overflow: hidden;

        background: var(--white);

        border-radius:
            0 0 0 20px;

        box-shadow:
            0 15px 30px
            rgba(0,0,0,0.12);

        transition:
            max-height 0.3s ease;

    }


    .main-nav.active {

        max-height: 600px;

    }


    .main-nav ul {

        display: block;

        padding: 15px;

    }


    .main-nav li {

        width: 100%;

    }


    .main-nav a,
    .dropdown-btn {

        width: 100%;

        display: block;

        text-align: left;

        padding: 15px;

    }


    .menu-btn {

        display: flex;

    }


    .dropdown-menu {

        position: static;

        width: 100%;

        box-shadow: none;

        border: none;

        background: var(--background);

        margin-top: 3px;

    }


    .dropdown:hover .dropdown-menu {

        display: none;

    }


    .dropdown.active .dropdown-menu {

 
