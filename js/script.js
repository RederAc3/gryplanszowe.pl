// ##############--PRELOADER--################

$(window).load(function () {
    $("#loader-wrapper").fadeOut();
});

// ####################--SCROOL-BUTTON--#####################

jQuery(function ($) {
    //scroll reset
    $.scrollTo(0);

    $('#link1').click(function () { $.scrollTo($('#history'), 500);});
    $('#scrollup').click(function () { $.scrollTo($('body'), 1000); });
}
);

//show while scrolling
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) $('#scrollup').fadeIn();
    else $('#scrollup').fadeOut();
}
);

