//Menu mobile
$(document).ready(function(){
$('.hamburger').on('click touchstart', function(e){  
    $('.hamburger').toggleClass('is-active');
    $('html').toggleClass('menu-active');
    e.preventDefault();
    });
//    Troca de idioma
    var value_idioma;
    var name_idioma;
    $('.idioma-link').on('click touchstart', function(e){
        value_idioma= $(this).attr('id');
        name_idioma= $(this).text();
        
        $(".btn-lang_desc").html(value_idioma);
        if (value_idioma == "en"){
            $(".bio_desc").text("Front-end developer, now I'm working in Agência Giga, UX enthusiastic");
        }else{
            $(".bio_desc").text("Desenvolvedor front-end, atualmente trabalha na Agência Giga, é entusiasta de UX design, tem interesse em arte, cultura, psicologia e uma boa leitura!");
        }
    });
});