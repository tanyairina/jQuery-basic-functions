

$(document).ready(function(){
// .click me away
    $("#away").click(function(){
    $(this).hide();
    });
// .hide button
    $("#btn_hide").click(function(){
        $("p").hide();
        });
// .show
    $("#show").click(function(){
    $("p").show();
    });
// .toggle
    $("#button_toggle").click(function(){
    $("#header").toggle();
    });
// Slide Down
    $("#flip_down").click(function(){
    $("#panel").slideDown("slow");
    });
// Slide Up after Slow Down
    $("#flip_up").click(function(){
    $("#panel").slideUp("slow");
    });
// Slide Up/Down
    $("#flip").click(function(){
    $("#panel").slideToggle("slow");
    });
// Fade in
    $("#button_fadein").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
    });
// Fade out
    $("#button_fadeout").click(function(){
    $("#div4").fadeOut();
    $("#div5").fadeOut("slow");
    $("#div6").fadeOut(3000);
    });
// add a class
    $("#button_pink").click(function(){
    $("h1, h2, p").addClass("pink");
    $("#important").addClass("important");
    });
// before and after
    $("#btn_before").click(function(){
    $("img").before("<b>Before</b>");
    });
    $("#btn_after").click(function(){
    $("img").after("<i>After</i>");
    });
// Append
    $("#btn_appnd").click(function(){
    $("#appnd").append(" <b>Appended text</b>.");
    $("#appnd1").append(" <b>Appended text</b>.");
    });
    $("#btn_appnd2").click(function(){
    $("ol").append("<li>Appended item</li>");
    });
// text and html
    $("#btn_txt").click(function(){
    alert("Text: " + $("#test").text());
    });
    $("#btn_html").click(function(){
    alert("HTML: " + $("#test").html());
    });
// attr
    $("#btn_attr").click(function(){
    alert($("#w3s").attr("href"));
    });
// txt, html and val
    $("#btn1").click(function(){
    $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
    });
});
