
$(document).ready(function () {
    





   
    $(".slider").bxSlider({
        mode: 'fade',
        speed: 1300,
        auto: true,
        pause: 6000,

    });

   $('.switch-class li ').click(function () {
    console.log('stop') ;
    $(this).removeClass('activ-orange');
    $(this).addClass('activ-orange');
   });
})