/*global $ */
var value_idioma, name_idioma, lang_desc = {
    "descricao":
        [
            {
                "bio_desc": "Front-end developer, now I'm working in Agência Giga, UX enthusiastic, interested in art, culture, psychology and a good book!",
                "pdf_link": "theme/pdf/rener-bezerra_english.pdf",
                "menu_tel": "tel:+5511953809720"
            },
            {
                "bio_desc": "Desenvolvedor front-end, atualmente trabalha na Agência Giga, é entusiasta de UX design, tem interesse em arte, cultura, psicologia e uma boa leitura!",
                "pdf_link": "theme/pdf/rener-bezerra.pdf",
                "menu_tel": "tel:11953809720"
            }
        ]
};
//Menu mobile
$(document).ready(function () {
    "use strict";
    $('.hamburger').on('click touchstart', function (e) {
        $('.hamburger').toggleClass('is-active');
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });
//    Mudar idioma
    $('.idioma-link').on('click touchstart', function (e) {
        value_idioma = $(this).attr('data-lang');
        name_idioma = $(this).text();
        
        $(".btn-lang_desc").html(value_idioma);

        $('.idioma-link').on('click touchstart', function (e) {
            var id = $(this).attr('id');
            $('.bio_desc').text(lang_desc.descricao[id].bio_desc);
            $('.pdf_btn').attr("href", lang_desc.descricao[id].pdf_link);
            $('.menu-tel').attr("href", lang_desc.descricao[id].menu_tel);
            e.preventDefault();
        });
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