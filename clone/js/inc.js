
$(function () {
    $('body').prepend('<header class="header"></header>')
    $('body').append('<footer class="footer"></footer>')
    $(".header").load("inc.html .head , .ham-drop-box",function(){
        $.getScript('./js/header.js');
    });
    $(".footer").load("inc.html .footer-con",function(){
        $.getScript('./js/footer.js');
    });
});









