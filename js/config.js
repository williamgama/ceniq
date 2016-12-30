$(".hamburger").click(function () {
    $("#filtro").fadeIn()
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.4)")
    $(".menu-mobile").css("top", "0vw")
    $(".menu-mobile").css("opacity", "1")
});

$(".hamburger-close, .inicio, .sobre, .analises, .clientes, .contato").click(function () {
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.0)")
    $("#filtro").fadeOut()
    $(".menu-mobile").css("opacity", "0")
    $(".menu-mobile").css("top", "-100vh")
});

var nav = $('.cabecalho-desktop');

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        nav.addClass("fixar");
    }
    else {
        nav.removeClass("fixar");
    }
});

$('.scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2500);
            return false;
        }
    }
});

$('.maps').click(function () {
    $('iframe').css("pointer-events", "auto");
});