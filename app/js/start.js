
$(document).ready(function() {
    $('#carouselGallery').on('select', function (evt, index) {
        console.log('item selected : ' + index, evt);
    });
    // Manually refresh positioning of slick
    $('.list_members').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
    });
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

