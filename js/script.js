jQuery(function ($) {
    //scroll reset
    $.scrollTo(0);

    $('#link1').click(function () { $.scrollTo($('#history'), 500); });
    $('#scrollup').click(function () { $.scrollTo($('body'), 1000); });
}
);

//show while scrolling
$(window).scroll(function () {
    var scrollup = document.querySelector('#scrollup');

    if ($(this).scrollTop() > 500) {
        scrollup.style.opacity = '1';
    }
    else 
        scrollup.style.opacity = '0';
});

// // ##########--PRELOADER--###########

$(window).on('load', function () {
    $("#loader-wrapper").fadeOut();
});




// });


