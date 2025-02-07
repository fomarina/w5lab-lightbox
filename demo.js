$(document).ready(function() {

    /* Open lightbox on image click */
    $('.lightbox-toggle img').click(function() {
        var imgSrc = $(this).attr('src'); // Pega a URL da imagem clicada
        $('.box').html('<div class="close">&times;</div><img src="' + imgSrc + '" alt="">'); // Atualiza o conteúdo do lightbox
        $('.backdrop').fadeIn();
        $('.box').fadeIn();
    });

    /* Close lightbox */
    $('.backdrop, .box').on('click', '.close, .backdrop', function() {
        $('.backdrop, .box').fadeOut();
    });

});
