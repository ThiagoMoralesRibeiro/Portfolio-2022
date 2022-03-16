//Soft Scroll

$(document).ready(function () {
    $("#home").click(function () { 
        $("html, body").animate({
            scrollTop: $("#banner").offset().top},500);
    });
    $("#sobre").click(function () { 
        $("html, body").animate({
            scrollTop: $("#sobreMim").offset().top},500);
    });
    $("#portfolio").click(function () { 
        $("html, body").animate({
            scrollTop: $("#port").offset().top},500);
    });

    $("#servico").click(function () { 
        $("html, body").animate({
            scrollTop: $("#serv").offset().top},500);
    });




//Effect portfolio slide
    $("#cardCss").hover(function(){
        $("#panel2").slideToggle("slow");
    })

    $("#cardHtml").hover(function(){
        $("#panel1").slideToggle("slow");
    })

    $("#cardJs").hover(function(){
        $("#panel3").slideToggle("slow" ,function () {
            $("#cardJs").css("position", "relative");
          });
    })


//Effect appears text change opacity
$(".thiago").on({
    mouseenter: function(){
      $(this).animate({opacity: '0.5'});
    },
    mouseleave: function(){
        $(this).animate({opacity: '100%'});
    }
});
       

//popover
    
$('[data-toggle="popover"]').popover();
    

});

//with scroll appears the img banner

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop < 30 || document.documentElement.scrollTop < 30) {
    document.getElementById("imgFade").style.display = "block";
    }


}

