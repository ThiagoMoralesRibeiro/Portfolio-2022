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
$(".thiago").hover(function(){
        $(".thiago").animate({opacity: '0.5'})
    })
})
//popover
    
        $('[data-toggle="popover"]').popover();
    

});


