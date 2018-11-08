$('#slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#slider-partner').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('#owl-detail').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    items:4,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        480:{
            items:5
        },
        600:{
            items:5
        },
        900:{
            items:7
        },
        1000:{
            items:5
        }
    }
})
$('#home').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(function () {
    $(".icon-search").click(function (e) {
        e.preventDefault();
        if ($(".box-search").hasClass("open") == false) {
            $(".box-search").addClass("open")
        } else {
            $(".box-search").removeClass("open")
        }
    })
})
jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    input.change(function(){
        var oldValue = parseFloat($(this).val());
        if (oldValue >= max) {
            var newVal = max;
        }else if(oldValue <= min){
            var newVal = min;
        }else{
            var newVal = oldValue;
        }
        $(this).val(newVal);
    })

});
jQuery(document).ready(function() {
    $("body").append("<a class=\"scrollup\" href=\"#\" id=\"scrollup\"></a>");
    $(document).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('#scrollup').fadeIn('slow');
        } else {
            $('#scrollup').fadeOut();
        }
    });
    $('#scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
