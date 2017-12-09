
$(document).ready(function () {
    $(document).on("scroll", onScroll);

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
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && (refElement.position().top + refElement.height()) > (scrollPos)) {
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
    if($("#logo").hasClass("active")){
      $('#menu').fadeIn(1000, "linear");
      $('#sidebar').fadeOut(1000, "linear");
    }else{
      $('#menu').fadeOut(1000, "linear");
      $('#sidebar').fadeIn(1000, "linear");
    }
}
