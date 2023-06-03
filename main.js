

    

 $(document).ready(function(){


    $(".slider").bxSlider({
        mode: 'fade',
        speed: 1300,
        auto: true,
        pause: 6000,
       
    });

    $('.switch-class').click(function(){
      $('.switch-class').removeClass('active');
      $(this).addClass('active');
  });

  });

   