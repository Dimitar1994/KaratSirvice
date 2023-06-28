
$(document).ready(function () {
   

  //index page slideshow setings
   
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(10)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 9000);

        
})