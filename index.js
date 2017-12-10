
//ładowanie

// $body = $("body");
//
// $(document).on({
//     ajaxStart: function() { $body.addClass("loading");    },
//      ajaxStop: function() { $body.removeClass("loading"); }
// });
$(document).ready(setTimeout(function () {
    //welcome screen
    $("body").removeClass("loading");
    if($(window).width()<920){
        $("#mMenu").fadeIn(3000);
        $("#menu").fadeOut(3000);
      }else{
        $("#mMenu").fadeOut(3000);
        $("#menu").fadeIn(3000);
    }
    $( window ).resize(function() {
      if($(window).width() < 768){
          $("#mMenu").fadeIn(3000);
          $("#menu").fadeOut(3000);
        }else{
          $("#mMenu").fadeOut(3000);
          $("#menu").fadeIn(3000);
        }
    });

    //scroll event
    $(document).on("scroll", onScroll);
    //śnieżek
    let d = new Date();
    let m = d.getMonth();
    snowStorm.followMouse = false;
    if(m==11){
      //IT'S CHRISTMASS
      snowStorm.autoStart = true;
      $('.navbar').css("background-color", "#ed1c24ff");
    }else{
      //it's not Xmass :(
      snowStorm.autoStart = false;
      $('.navbar').css("background-color", "#009444ff");
    }
    $("#logoM").click(function(){
      if($('#myNavbar').css("display")=="none"){
      $('#myNavbar').slideDown(1000);
    }else{
      $('#myNavbar').slideUp(1000);
    }
    });
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
}, 5000));

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    if(scrollPos>300){
      $('#menu').fadeOut(1000, "linear");
    }else{
      $('#menu').fadeIn(1000, "linear");
    }
    if(scrollPos>350){
      $('#sidebar').fadeIn(1000, "linear");
    }else{
      $('#sidebar').fadeOut(1000, "linear");
    }
    //mobilny scroll
    if(scrollPos>70){
      $('#mMenu').animate({height: "20px"}, { queue:false, duration:1000});
    }else{
      $('#mMenu').animate({height: "120px"}, { queue:false, duration:1000 });
    }
    if(scrollPos>50){
      $('#mobMenu').fadeIn(1000, "swing");
    }else{
      $('#mobMenu').fadeOut(1000, "swing");
    }

    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (Math.abs(refElement.position().top-scrollPos) <= 100 && Math.abs((refElement.position().top + refElement.height())-scrollPos) > 100) {
            $('#menu ul a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

    switch($(".active").attr("href")){
      case "#uslugi":
        $('img[src="./src/uslugi.png"]').fadeOut(0);
        $('img[src="./src/uslugi-a.png"]').fadeIn(500);
        $('img[src="./src/zdjecia.png"]').fadeIn(500);
        $('img[src="./src/zdjecia-a.png"]').fadeOut(0);
        $('img[src="./src/kontakt-a.png"]').fadeOut(0);
        $('img[src="./src/kontakt.png"]').fadeIn(500);
        $('img[src="./src/rezerwacja-a.png"]').fadeOut(0);
        $('img[src="./src/rezerwacja.png"]').fadeIn(500);
        break;
      case "#zdjecia":
        $('img[src="./src/uslugi-a.png"]').fadeOut(0);
        $('img[src="./src/uslugi.png"]').fadeIn(500);
        $('img[src="./src/zdjecia.png"]').fadeOut(0);
        $('img[src="./src/zdjecia-a.png"]').fadeIn(500);
        $('img[src="./src/kontakt-a.png"]').fadeOut(0);
        $('img[src="./src/kontakt.png"]').fadeIn(500);
        $('img[src="./src/rezerwacja-a.png"]').fadeOut(0);
        $('img[src="./src/rezerwacja.png"]').fadeIn(500);
        break;
      case "#kontakt":
        $('img[src="./src/uslugi-a.png"]').fadeOut(0);
        $('img[src="./src/uslugi.png"]').fadeIn(500);
        $('img[src="./src/zdjecia-a.png"]').fadeOut(0);
        $('img[src="./src/zdjecia.png"]').fadeIn(500);
        $('img[src="./src/kontakt.png"]').fadeOut(0);
        $('img[src="./src/kontakt-a.png"]').fadeIn(500);
        $('img[src="./src/rezerwacja-a.png"]').fadeOut(0);
        $('img[src="./src/rezerwacja.png"]').fadeIn(500);
        break;
      case "#rezerwacja":
        $('img[src="./src/uslugi-a.png"]').fadeOut(0);
        $('img[src="./src/uslugi.png"]').fadeIn(500);
        $('img[src="./src/zdjecia-a.png"]').fadeOut(0);
        $('img[src="./src/zdjecia.png"]').fadeIn(500);
        $('img[src="./src/kontakt-a.png"]').fadeOut(0);
        $('img[src="./src/kontakt.png"]').fadeIn(500);
        $('img[src="./src/rezerwacja.png"]').fadeOut(0);
        $('img[src="./src/rezerwacja-a.png"]').fadeIn(500);
        break;
      // default:
      //   $('img[src="./src/uslugi-a.png"]').attr("src", "./src/uslugi.png");
      //   $('img[src="./src/zdjecia-a.png"]').attr("src", "./src/zdjecia.png");
      //   $('img[src="./src/kontakt-a.png"]').attr("src", "./src/kontakt.png");
      //   $('img[src="./src/rezerwacja-a.png"]').attr("src", "./src/rezerwacja.png");
    }

}
