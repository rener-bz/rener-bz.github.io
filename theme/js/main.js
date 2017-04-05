//Menu mobile
$(document).ready(function() {
$('.hamburger').on('click touchstart', function (e) {
    $('.hamburger').toggleClass('is-active');
    $('html').toggleClass('menu-active');
    e.preventDefault();
});
//    Troca de idioma
    var value_idioma;
    var name_idioma;
//    Mudar idioma
    $('.idioma-link').on('click touchstart', function (e) {
        value_idioma = $(this).attr('id');
        name_idioma = $(this).text();
        
        $(".btn-lang_desc").html(value_idioma);
        if (value_idioma == "en") {
            $(".bio_desc").text("Front-end developer, now I'm working in Agência Giga, UX enthusiastic");
            $(".pdf_btn").attr("href","theme/pdf/rener-bezerra_english.pdf");
            $(".menu-tel").attr("href","tel:+5511953809720");
        } else {
            $(".bio_desc").text("Desenvolvedor front-end, atualmente trabalha na Agência Giga, é entusiasta de UX design, tem interesse em arte, cultura, psicologia e uma boa leitura!");
            $(".pdf_btn").attr("href","theme/pdf/rener-bezerra.pdf");
            $(".menu-tel").attr("href","tel:11953809720");
        }
    });
//    Apagar/acender a luz
    $('.btn-light').on('click touchstart', function (e) {
        $('.btn-light_icon').toggleClass('fa-moon-o');
        $('.btn-light_icon').toggleClass('fa-sun-o');
        $('.body').toggleClass('body_dark');
        $('.menu-contato').toggleClass('menu-contato_dark');
        $('.pdf_btn').toggleClass('btn_dark');
        e.preventDefault();
    });
});