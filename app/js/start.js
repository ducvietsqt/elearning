
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
    });
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();
    $('#file_topic').on('change', function (e) {
        handleFileSelect(e, function (avatar, file) {
            $('.pic_file_topic').addClass('hasAvatar');
            $('.img_avt_topic').attr('src', avatar);
        })
    })
});
var handleFileSelect = function(event, callback) {
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        var binaryString = "";
        // Show preview avatar
        reader.onload = function (readerEvt) {
            binaryString = readerEvt.target.result;
            var avatar = "data:image/jpeg;base64," + btoa(binaryString);
            if (callback && typeof callback === "function") return callback(avatar, file);
        };
        reader.readAsBinaryString(file);
    }
    return file;
};

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

