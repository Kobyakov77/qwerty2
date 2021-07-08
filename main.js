$(document).ready(function () {
     $('.expert__btn').on('click', function (){
         $('.overlay, .popup__registration').fadeIn('slow');
         $('.popup__thanks').fadeOut(1)
     })
    $('.popup__close').on('click', function (){
        $('.overlay, .popup__thanks').fadeOut('slow')
        $('.overlay, .popup__registration').fadeOut('slow')
    })
$('.finances__btn').on('click', function (){
    // e.preventDefault()
    $('.overlay, .popup__thanks').fadeIn('slow');
    $('.popup__registration').fadeOut(1)
})
    $(window).on( 'scroll', function (){
        if($(this).scrollTop() >1000) {
            $('.go-up').fadeIn('slow')
        } else {
            $('.go-up').fadeOut('slow')
        }
    });
});