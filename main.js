
function myFunction() {
    document.getElementById("demo").innerHTML = "Основна та ни цел е максимален перфекционизъм в подръжката на Вашият камион.Освен общата подръжка , нашият екип се грижи за превантивните мерки за избягване на неочаквани ремонти, аварии и загубено време.";
  }

  function myFunction1() {
    document.getElementById("demo").innerHTML = "В света на тежкотоварни автомобили качестовото на частите и на ремонтите е не просто задължение - то е призвание.Затова ние не правим компромиси с качеството и надежността на Вашият автомобил.";
  }

  function myFunction3() {
    document.getElementById("demo").innerHTML = "Нашият сервиз е основа през 2012 г. и е специализиран сервиз за обслужване и ремонт на тежкотоварни автомобили. Нашите специалисти извършват ремонти на място , така и на аварирал тежкотоварни  автомобил.";
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