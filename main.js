
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  function myFunction1() {
    document.getElementById("demo").innerHTML = "здравеи свят";
  }

  function myFunction3() {
    document.getElementById("demo").innerHTML = "как е";
  }


  var imgDuration = 5000;
  var fadeSpeed = 2000;
  var container = $('#slideshow-container');
  var curIndex = -1;

  function slideShow() {
       container + $('img.slides').eq(curIndex).fadeOut(fadeSpeed);
       container + $('img.slides').eq(curIndex  = curIndex < container.children().length - 1 ? curIndex + 1 : 0).fadeIn(fadeSpeed);
       setTimeout("slideShow()", imgDuration);
  }

  slideShow();