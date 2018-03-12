
//ładowanie

// $body = $("body");
//
// $(document).on({
//     ajaxStart: function() { $body.addClass("loading");    },
//      ajaxStop: function() { $body.removeClass("loading"); }
// });

$("body").ready(()=>{
  setTimeout(()=>{$('#load').fadeOut(300);
  console.log("ready");}, 200);
});

$(document).ready(setTimeout(function () {
    //welcome screen

    var image = $(".firstImg");
    var downloadingImage = new Image();
    downloadingImage.onload = function(){
        image.src = this.src;
    };
    downloadingImage.src = "src/firstImg.jpg";

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

    //photo sliders
  $('.slider').slick();

    //scroll event
    $(document).on("scroll", onScroll);
    //mobile menu toggle off
    $('#mobMenu').mouseleave(()=>{
      $('#myNavbar').slideUp(1000);
    });
    let d = new Date();
    let m = d.getMonth();
    if(m==11){
      //IT'S CHRISTMASS
      $('.navbar').css("background-color", "#ed1c24ff");
    }else{
      //it's not Xmass :(
      $('.navbar').css("background-color", "#009444ff");
    }

    $("#logoM").click(()=>{
      if($('#myNavbar').css("display")=="none"){
        $('#myNavbar').slideDown(1000);
      }else{
        $('#myNavbar').slideUp(1000);
      }
    });

    $('#myNavbar a').click(()=>{
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

    //Usługi
    stretchOnClick();
    //dzieci
    dzieciClick();
}, 2000));

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
    if(scrollPos>100){
      $('#mobMenu').fadeIn(1000, "swing");
    }else if(scrollPos<100){
      $('#mobMenu').fadeOut(1000, "swing");
    }

    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if(refElement.position().top < scrollPos && scrollPos < refElement.position().top + refElement.height()){
            currLink.addClass("active");
        }else{
          currLink.removeClass("active");
        }

    });

    switch($(".active").attr("href")){
      case "#uslugi":
        $('img[src="./src/polygon-zo.png"]').fadeOut(0);
        $('img[src="./src/polygon-z1.png"]').fadeOut(0);
        $('img[src="./src/polygon-z3.png"]').fadeOut(0);
        $('img[src="./src/polygon-z4.png"]').fadeOut(0);
        $('img[src="./src/polygon-z2.png"]').fadeIn(500);
        $('img[src="./src/polygon-p.png"]').fadeIn(500);
        $('img[src="./src/polygon-n.png"]').fadeIn(500);
        $('img[src="./src/polygon-f.png"]').fadeIn(500);
        break;
      case "#onas":
        $('img[src="./src/polygon-f.png"]').fadeOut(0);
        $('img[src="./src/polygon-z2.png"]').fadeOut(0);
        $('img[src="./src/polygon-z3.png"]').fadeOut(0);
        $('img[src="./src/polygon-z4.png"]').fadeOut(0);
        $('img[src="./src/polygon-z1.png"]').fadeIn(500);
        $('img[src="./src/polygon-p.png"]').fadeIn(500);
        $('img[src="./src/polygon-zo.png"]').fadeIn(500);
        $('img[src="./src/polygon-n.png"]').fadeIn(500);
        break;
      case "#kontakt":
        $('img[src="./src/polygon-n.png"]').fadeOut(0);
        $('img[src="./src/polygon-z2.png"]').fadeOut(0);
        $('img[src="./src/polygon-z1.png"]').fadeOut(0);
        $('img[src="./src/polygon-z3.png"]').fadeOut(0);
        $('img[src="./src/polygon-z4.png"]').fadeIn(500);
        $('img[src="./src/polygon-p.png"]').fadeIn(500);
        $('img[src="./src/polygon-zo.png"]').fadeIn(500);
        $('img[src="./src/polygon-f.png"]').fadeIn(500);
        break;
      case "#wyjazdy":
        $('img[src="./src/polygon-p.png"]').fadeOut(0);
        $('img[src="./src/polygon-z1.png"]').fadeOut(0);
        $('img[src="./src/polygon-z2.png"]').fadeOut(0);
        $('img[src="./src/polygon-z4.png"]').fadeOut(0);
        $('img[src="./src/polygon-z3.png"]').fadeIn(500);
        $('img[src="./src/polygon-n.png"]').fadeIn(500);
        $('img[src="./src/polygon-zo.png"]').fadeIn(500);
        $('img[src="./src/polygon-f.png"]').fadeIn(500);
        break;
      default:
    }

    //animacja ikon Urodziny i Wesela
    $("#indianieW").hover(()=>{
        //mouse in
        $("#indianieW .firstIconUro").hide();
        $("#indianieW .secondIconUro").show();
      }, ()=>{
        //mouse out
        $("#indianieW .firstIconUro").show();
        $("#indianieW .secondIconUro").hide();
      }
    );
    $("#indianieU").hover(()=>{
        //mouse in
        $("#indianieU .firstIconUro").hide();
        $("#indianieU .secondIconUro").show();
      }, ()=>{
        //mouse out
        $("#indianieU .firstIconUro").show();
        $("#indianieU .secondIconUro").hide();
      }
    );

    $("#survival").hover(()=>{
      //mouse in
      $("#survival .firstIconUro").hide();
      $("#survival .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#survival .firstIconUro").show();
      $("#survival .secondIconUro").hide();
    });
    $("#mapaU").hover(()=>{
      //mouse in
      $("#mapaU .firstIconUro").hide();
      $("#mapaU .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#mapaU .firstIconUro").show();
      $("#mapaU .secondIconUro").hide();
    });
    $("#mapaW").hover(()=>{
      //mouse in
      $("#mapaW .firstIconUro").hide();
      $("#mapaW .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#mapaW .firstIconUro").show();
      $("#mapaW .secondIconUro").hide();
    });
    $("#damyU").hover(()=>{
      //mouse in
      $("#damyU .firstIconUro").hide();
      $("#damyU .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#damyU .firstIconUro").show();
      $("#damyU .secondIconUro").hide();
    });
    $("#damyW").hover(()=>{
      //mouse in
      $("#damyW .firstIconUro").hide();
      $("#damyW .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#damyW .firstIconUro").show();
      $("#damyW .secondIconUro").hide();
    });
    $("#sixteen").hover(()=>{
      //mouse in
      $("#sixteen .firstIconUro").hide();
      $("#sixteen .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#sixteen .firstIconUro").show();
      $("#sixteen .secondIconUro").hide();
    });
    $("#cyrkU").hover(()=>{
      $("#cyrkU .firstIconUro").hide();
      $("#cyrkU .secondIconUro").show();
      //mouse in
    }, ()=>{
      //mouse out
      $("#cyrkU .firstIconUro").show();
      $("#cyrkU .secondIconUro").hide();
    });
    $("#cyrkW").hover(()=>{
      $("#cyrkW .firstIconUro").hide();
      $("#cyrkW .secondIconUro").show();
      //mouse in
    }, ()=>{
      //mouse out
      $("#cyrkW .firstIconUro").show();
      $("#cyrkW .secondIconUro").hide();
    });
    $("#piraciU").hover(()=>{
      //mouse in
      $("#piraciU .firstIconUro").hide();
      $("#piraciU .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#piraciU .firstIconUro").show();
      $("#piraciU .secondIconUro").hide();
    });
    $("#piraciW").hover(()=>{
      //mouse in
      $("#piraciW .firstIconUro").hide();
      $("#piraciW .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#piraciW .firstIconUro").show();
      $("#piraciW .secondIconUro").hide();
    });
    $("#bajkaU").hover(()=>{
      //mouse in
      $("#bajkaU .firstIconUro").hide();
      $("#bajkaU .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#bajkaU .firstIconUro").show();
      $("#bajkaU .secondIconUro").hide();
    });
    $("#bajkaW").hover(()=>{
      //mouse in
      $("#bajkaW .firstIconUro").hide();
      $("#bajkaW .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#bajkaW .firstIconUro").show();
      $("#bajkaW .secondIconUro").hide();
    });
    $("#chemia").hover(()=>{
      //mouse in
      $("#chemia .firstIconUro").hide();
      $("#chemia .secondIconUro").show();
    }, ()=>{
      //mouse out
      $("#chemia .firstIconUro").show();
      $("#chemia .secondIconUro").hide();
    });
}

//funkcja rozciągająca target na 90 vh, a zmniejszająca pozostałe 2 elementy na 5vh
function stretchOnClick(){
  var dzieci  = '#dzieci';
  var dorosli = '#dorosli';
  var eventy  = '#eventy';
  $dzieci  = $(dzieci);
  $dorosli = $(dorosli);
  $eventy  = $(eventy);
  $dzieci.click(()=>{
    if($('#tresc').css('display')=="none"){
      $dorosli.children().hide();
      $eventy.children().hide();
      let curH  = $dzieci.height(),
          autoH = $dzieci.css('height', 'auto').height();

      $dzieci.height(curH).animate({
        height: window.innerHeight
      }, 10);
      $('#tresc').toggle(2000, function(){
        if($('#urodziny').css("display")=="none"){
          $dzieci.height(window.innerHeight).animate({
            height: window.innerHeight
          }, 2000);
        }else{
          let curH  = $dzieci.height(),
              autoH = $dzieci.css('height', 'auto').height()+50;

          $dzieci.height(curH).animate({
            height: autoH
          }, 2000);
        }
      });
      $dorosli.animate({
        height: "5vh",
        'line-height': "1vh",
        paddingTop: "0"
      }, 2000);
      $eventy.animate({
        height: "5vh",
        'line-height': "1vh",
        paddingTop: "0"
      }, 2000);
      $('#dorosli>span').show();
      $('#dorosli>span>h3').animate({
        'font-size': '2vh',
        'margin-top': '0'
      }, 0);
      $('#eventy>span').show();
      $('#eventy>span>h3').animate({
        'font-size': '2vh',
        'margin-top': '0'
      }, 0);
      $('#dzieci>span').toggle();
      $('#dzieci>span>h3').animate({
        'font-size': '2vh',
        'margin-top': '0'
      }, 0);
    }
  });
  $dorosli.click(()=>{
    $dzieci.children().hide();
    $('#dzieciMenu').css({"display": "block"});
    $('#urodziny').css({"display": "none"});
    $('#wesela').css({"display": "none"});
    $('#szkoly').css({"display": "none"});
    $eventy.children().hide();
    $dorosli.animate({
      height: "90vh",
      paddingTop: "30px"
    }, 2000);
    $('#dorosli h2').attr("style", "display: block; text-align: center;");
    $('#dorosli img').attr("style", "display: block;");
    $dzieci.animate({
      height: "5vh",
      'line-height': "1vh"
    }, 2000);
    $eventy.animate({
      height: "5vh",
      'line-height': "1vh",
      paddingTop: "0"
    }, 2000);
    $('#dzieci>span').show();
    $('#dzieci>span>h3').animate({
      'font-size': '2vh',
      'margin-top': '0'
    }, 0);
    $('#eventy>span').show();
    $('#eventy>span>h3').animate({
      'font-size': '2vh',
      'margin-top': '0'
    }, 0);
    $('#dorosli>span').hide();
  });
  $eventy.click(()=>{
    $dzieci.children().hide();
    $dorosli.children().hide();
    $('#dzieciMenu').css({"display": "block"});
    $('#urodziny').css({"display": "none"});
    $('#wesela').css({"display": "none"});
    $('#szkoly').css({"display": "none"});
    $eventy.animate({
      height: "90vh",
      paddingTop: "30px"
    }, 2000);
    $('#eventy h2').attr("style", "display: block; text-align: center;");
    $dorosli.animate({
      height: "5vh",
      'line-height': "1vh",
      paddingTop: "0"
    }, 2000);
    $dzieci.animate({
      height: "5vh",
      'line-height': "1vh"
    }, 2000);
    $('#dorosli>span').show();
    $('#dorosli>span>h3').animate({
      'font-size': '2vh',
      'margin-top': '0'
    }, 0);
    $('#dzieci>span').show();
    $('#dzieci>span>h3').animate({
      'font-size': '2vh',
      'margin-top': '0'
    }, 0);
    $('#eventy>span').hide();
  });
}

function dzieciClick(){
  var urodziny = '#uro';
  $uro = $(urodziny);
  $uro.click(()=>{
    let curH = $('#dzieci').height();
    $('#dzieci').height(curH).animate({
      height: window.innerHeight
    }, 100);
    $('#dzieciMenu').toggle(1000, ()=>{
      $('#urodziny').toggle(1000, ()=>{
        let curH = $('#dzieci').height(),
        autoH = $('#endUro').position().top - $(document).scrollTop() + $('#endUro').height() + window.innerHeight/8;

        $('#dzieci').height(curH).animate({
          height: autoH
        }, 100);
      });
    });
  });
  var wesela = '#wes';
  $wes = $(wesela);
  $wes.click(()=>{
    let curH = $('#dzieci').height();
    $('#dzieci').height(curH).animate({
      height: window.innerHeight
    }, 100);
    $('#dzieciMenu').toggle(1000, ()=>{
      $('#wesela').toggle(1000, ()=>{
        let curH = $('#dzieci').height();
        autoH = $('#endWes').position().top - $(document).scrollTop() + $('#endWes').height() + window.innerHeight/8;

        $('#dzieci').height(curH).animate({
          height: autoH
        }, 100);
      });
    });
  });
  var szkoly = '#szk';
  $szk = $(szkoly);
  $szk.click(()=>{
    let curH = $('#dzieci').height();
    $('#dzieci').height(curH).animate({
      height: window.innerHeight
    }, 100);
    $('#dzieciMenu').toggle(1000, ()=>{
      $('#szkoly').toggle(1000, ()=>{
        //wyrównywanie wys kolumn w tabeli w ofercie dla szkół
        let h = $("#targetH").height();
        let style = "height: "+h;
        $(".calcH").attr("style", style);
        setTimeout(()=>{
          $(".calcH").each(function(){
            $(this).height(h);
          });
        }, 100);
        let curH = $('#dzieci').height();
        autoH = $('#endSzk').position().top - $(document).scrollTop() + $('#endSzk').height() + window.innerHeight/8;

        $('#dzieci').height(curH).animate({
          height: autoH
        }, 100);
      });
    });
  });
  var hotele = '#hot';
  $hot = $(hotele);
  $hot.click(()=>{
    let curH = $('#dzieci').height();
    $('#dzieci').height(curH).animate({
      height: window.innerHeight
    }, 100);
    $('#dzieciMenu').toggle(1000, ()=>{
      $('#hotele').toggle(1000, ()=>{
        let curH = $('#dzieci').height();
        autoH = $('#endHot').position().top - $(document).scrollTop() + $('#endHot').height() + window.innerHeight/8;

        $('#dzieci').height(curH).animate({
          height: autoH
        }, 100);
      });
    });
  });
  slideDMenu();
}

function slideDMenu(){
  $(".arrowMenu").click(()=>{
    let curH = $('#dzieci').height();
    $('#dzieci').height(curH).animate({
      height: window.innerHeight
    }, 100);
    if($('#urodziny').css("display")=="block"){
      $('#urodziny').toggle(1000, ()=>{
        $('#dzieciMenu').toggle(1000, ()=>{
          let curH = $('#dzieci').height();
          $('#dzieci').height(curH).animate({
            height: window.innerHeight
          }, 100);
        });
      });
    }
    if($('#wesela').css("display")=="block"){
      $('#wesela').toggle(1000, ()=>{
        $('#dzieciMenu').toggle(1000, ()=>{
          let curH = $('#dzieci').height();
          $('#dzieci').height(curH).animate({
            height: window.innerHeight
          }, 100);
        });
      });
    }
    if($('#szkoly').css("display")=="block"){
      $('#szkoly').toggle(1000, ()=>{
        $('#dzieciMenu').toggle(1000, ()=>{
          let curH = $('#dzieci').height();
          $('#dzieci').height(curH).animate({
            height: window.innerHeight
          }, 100);
        });
      });
    }
    if($('#hotele').css("display")=="block"){
      $('#hotele').toggle(1000, ()=>{
        $('#dzieciMenu').toggle(1000, ()=>{
          let curH = $('#dzieci').height();
          $('#dzieci').height(curH).animate({
            height: window.innerHeight
          }, 100);
        });
      });
    }
  });
}
