$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".landing").height();
    var viewPortSize = $(window).height();
    
    var triggerAt = 768;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.bearimage').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});