$(document).ready(function() {
    var buttons = $(".expert button");
    var slides = $(".expert .details_outer")

    buttons.click(function() {
        slides.slideUp();

        if ($(this).next().css("display") == "none") {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    })

    $('.goTop').click(() => {
        window.scrollTo(0, 0);
    })

    $(window).scroll(() => {
        var sc = $(window).scrollTop()

        if (sc >= 500) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').fadeOut();
        }
    })
});