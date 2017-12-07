$(document).ready(function(){
    $('#home').click(function(){
        $('html,body').animate({
            scrollTop: $(".banner-ppal").offset().top
        }, 2000);
    });

    $('#info').click(function () {
        $('html,body').animate({
            scrollTop: $(".banner-info").offset().top
        }, 2000);
    });

    $('#project').click(function () {
        $('html,body').animate({
            scrollTop: $(".banner-project").offset().top
        }, 2000);
    });

    $('#porfile').click(function () {
        $('html,body').animate({
            scrollTop: $(".banner-perfil").offset().top
        }, 2000);
    });
});