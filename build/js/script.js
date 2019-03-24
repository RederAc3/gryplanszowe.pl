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

var hamburger = document.getElementsByClassName('hamburger');
var ul = document.getElementById('ul');
var nav = document.getElementsByClassName('container-nav');
var click = 0;

hamburger[0].addEventListener('click', function () {
    if (click == 0) {
        ul.classList.remove("hide-el");
        ul.classList.add("show-el");
        click = 1;
    } else {
        ul.classList.remove("show-el");
        ul.classList.add("hide-el");
        click = 0;
    }
});


// ARROWS
var arrow = document.getElementById('arrow');
console.log(arrow.style.height);
arrow.style.height = window.scroll;



