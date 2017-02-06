
//Menu mobile
$(document).ready(function(){
$('.hamburger').on('click touchstart', function(e){  
    $('.hamburger').toggleClass('is-active');
    $('html').toggleClass('menu-active');
    e.preventDefault();
    });
});
//    Altura do site
//    var altSite = $(window).height();
//    Altura do site menos topo
//    altSite = altSite - $('.content-title').height();
//    altSite = altSite - $('.content-social').height();
//    $('.conteudo').css({"min-height":+altSite+"px"});

//$(".main-title").typed({
//    strings: ["Desenvolvendo websites para pessoas.","Desenvolvendo lojas virtuais para pessoas.", "Desenvolvendo soluções para pessoas"],
//    typeSpeed: 0
//});