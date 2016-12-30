var imagens = [
    'url(../img/bg/bg.jpg)'
    , 'url(../img/bg/bg2.jpg)'
    , 'url(../img/bg/bg3.jpg)'
]
    , imgindex = 0
    , $header = $('#inicio');
setInterval(function () {
    $header.css('background-image', imagens[imgindex++ % imagens.length]);
}, 4000);