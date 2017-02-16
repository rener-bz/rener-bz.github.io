//Menu mobile
$(document).ready(function(){
$('.hamburger').on('click touchstart', function(e){  
    $('.hamburger').toggleClass('is-active');
    $('html').toggleClass('menu-active');
    e.preventDefault();
    });
//    Troca de idioma
    var value_idioma;
    $('.idioma-link').on('click touchstart', function(e){
        value_idioma= $(this).attr('id');
        alert (value_idioma);
        $(".btn-lang_desc").html(value_idioma);
        if (value_idioma == "en"){
            alert("Ingles");
            $(".bio_desc").text("Lorem ispum");
        }else{
            alert("portugues");
            $(".bio_desc").text("Desenvolvedor front-end, atualmente trabalha na Agência Giga, é entusiasta de UX design, tem interesse em arte, cultura, psicologia e uma boa leitura!");
        }
    });
});