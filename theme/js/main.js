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
        value_idioma= $(this).html();
        alert (value_idioma);
        $(".btn-lang_desc").html(value_idioma);
        if (value_idioma == "USA"){
            alert("usa");
            $("html").attr("lang","en");
        }
    });
});