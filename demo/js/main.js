$("#icon-search-mobile").click(function () {
$('.search-box').toggleClass('open');
});
$(".main-menu ul li i").click(function () {
$(this).next("ul").toggleClass('open');
});


$(document).ready(function () {
"use strict";
// creat menu sidebar
$(".menu-bar-lv-1").each(function () {
    $(this).find(".span-lv-1").click(function () {
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-2").toggle(500);
    });
});
$(".menu-bar-lv-2").each(function () {
    $(this).find(".span-lv-2").click(function () {
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-3").toggle(500);
    });
});
$(".shadow-open-menu").click(function () {
    $('.menu-bar-mobile').fadeOut();
    $(".shadow-open-menu").fadeOut();
    $(".menu-btn-show").toggleClass("active");
});
$(".menu-btn-show").click(function () {
    $(this).toggleClass("active");
    $('.menu-bar-mobile').fadeToggle(500);
    $(".shadow-open-menu").fadeToggle(500);
});
// end
});


$('#banner-homepage').owlCarousel({
items: 1,
loop: true,
dots: true,
nav: false,
margin: 0,
autoplay: true,
autoplayTimeout: 6000,
autoplayHoverPause: false,
navigation: true,
pagination: false,
animateOut: 'fadeOut',
stagePadding: 0,
smartSpeed: 450,
responsive: {
    0: {
        items: 1
    },

    600: {
        items: 1
    },

    1000: {
        items: 1
    },

    1200: {
        items: 1
    },
    1900: {
        items: 1
    }
}
});

$('#pay-index').owlCarousel({
items: 3,
loop: true,
dots: false,
nav: true,
margin: 30,
autoplay: false,
autoplayTimeout: 6000,
autoplayHoverPause: false,
navigation: true,
pagination: false,
animateOut: 'fadeOut',
stagePadding: 0,
smartSpeed: 450,
responsive: {
    0: {
        items: 1
    },

    600: {
        items: 2
    },

    1000: {
        items: 3
    },

    1200: {
        items: 3
    },
    1900: {
        items: 3
    }
}
});



$('#appli-index').owlCarousel({
items: 5,
loop: true,
dots: false,
nav: true,
margin: 30,
autoplay: false,
autoplayTimeout: 6000,
autoplayHoverPause: false,
navigation: true,
pagination: true,
animateOut: 'fadeOut',
stagePadding: 0,
smartSpeed: 450,
responsive: {
    0: {
        items: 1
    },
    300: {
        items: 1
    },
    500: {
        items: 2
    },
    600: {
        items: 3
    },

    1000: {
        items: 4
    },

    1200: {
        items: 5
    },
    1900: {
        items: 5
    }
}
});

$('#hot-pro-index').owlCarousel({
items: 4,
loop: true,
dots: false,
nav: true,
margin: 30,
autoplay: false,
autoplayTimeout: 6000,
autoplayHoverPause: false,
navigation: true,
pagination: true,
animateOut: 'fadeOut',
stagePadding: 0,
smartSpeed: 450,
responsive: {
    0: {
        items: 1
    },
    300: {
        items: 1
    },
    500: {
        items: 2
    },
    600: {
        items: 3
    },

    1000: {
        items: 3
    },

    1200: {
        items: 4
    },
    1900: {
        items: 4
    }
}
});

$('#partner-id').owlCarousel({
items: 6,
loop: true,
dots: false,
nav: true,
margin: 30,
autoplay: true,
autoplayTimeout: 6000,
autoplayHoverPause: false,
navigation: true,
pagination: true,
animateOut: 'fadeOut',
stagePadding: 0,
smartSpeed: 450,
responsive: {
    0: {
        items: 1
    },
    300: {
        items: 2
    },
    500: {
        items: 2
    },
    600: {
        items: 2
    },
    800: {
        items: 3
    },

    1000: {
        items: 4
    },

    1200: {
        items: 6
    },
    1900: {
        items: 6
    }
}
});

// creat menu category
$(".menu-product-lv-1").each(function () {
    $(this).find(".span-lv-1").click(function () {
        $(this).toggleClass('fa-plus').toggleClass('fa-minus');
        $(this).parent().find(".menu-product-lv-2").toggle(500);
    });
});
$(".menu-product-lv-2").each(function () {
    $(this).find(".span-lv-2").click(function () {
        $(this).toggleClass('fa-plus').toggleClass('fa-minus');
        $(this).parent().find(".menu-product-lv-3").toggle(500);
    });
});

// end



$('#owl-detail').owlCarousel({
    items: 5,
    loop: false,
    dots: false,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    navigation: true,
    pagination: false,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1000: {
            items: 5
        },
        1200: {
            items: 5
        }
    }
});


$(function () {
    $(".option").click(function () {
        if ($(".option-language").hasClass("open") == false) {
            $(".option-language").addClass("open")
        }
        else {
            $(".option-language").removeClass("open")
        }
    })
});







$(".appli-index .owl-nav .owl-next").html("");
$(".appli-index .owl-nav .owl-prev").html("");
$(".hot-pro-index .owl-nav .owl-next").html("");
$(".hot-pro-index .owl-nav .owl-prev").html("");






