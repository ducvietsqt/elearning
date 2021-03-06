

$(document).ready(function() {
    $('#carouselGallery').on('select', function (evt, index) {
        console.log('item selected : ' + index, evt);
    });
    // Manually refresh positioning of slick
    $('.list_members').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.list_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    $('._slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 25000,
        fade: true,
        dots: true,
        arrows: false,
    });

    $('.list-slider-book').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.partner_items').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    var templatePopover = '<div class="popover popover-card" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>';
    var templatePopoverUser = '<div class="popover popover-auth" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>';
    $(function () {
        $.each( $('[data-toggle="popover"].card'), function( i, val ) {
            if(!$(val).find('.add_card')[0]) return;
            var _this = $(val);
            var _content = _this.find('.add_card')[0];
            $(val).popover({
                trigger: 'manual',
                placement: 'right',
                delay: {show: 50, hide: 400},
                template: templatePopover,
                animation: false,
                content: _content

            }).on("mouseenter", function (_e) {
                _this.popover("show");
            }).on("mouseleave", function () {
                setTimeout(function () {
                    if (!$(".popover:hover").length) {
                        _this.popover("hide")
                    }
                }, 100);
            });
        });



        $('.user_authenticated .avatar').popover({
            trigger: 'click',
            placement: 'bottom',
            content: $('.list_menu_profile')[0],
            animation: false,
            template: templatePopoverUser,
        })

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
    $('.file_input_pic').on('change', function (e) {
        var target = this;
        handleFileSelect(e, function (avatar, file) {
            $(target).parent().addClass('hasAvatar');
            $(target).parent().find('.pic_thumb_file').attr('src', avatar);
            // $('.pic_file_topic').addClass('hasAvatar');
            // $('.img_avt_topic').attr('src', avatar);
        })
    });
    // TODO: validate form
    $('#form_coach_learn').validate();
    $('#form-signup').validate();
    $('#form_signin').validate();
    $('#form_khoahoc').validate();
    $('#form_create_subjects').validate();
    $('#form_questions').validate();
    $('#form-profile-comunity').validate();
    var validator = $("#form-profile-teacher").validate({
        // ignore: ".binding_name",
        rules: {
            avatar: {
                // required: true
            },
            fullname: {
                required: true
            },
            gender: {
                required: true
            },
            date_of_birth: {
                required: true
            },
            address: {
                required: true
            },
            "phone_number": {
                number: true,
                minlength: 8,
                required: true,
                // maxlength: 8,
            },
            "email": {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                // email: 'dkm'
            }
        }
    });

    // Editor
    try {
        $('textarea[name=info_body]').summernote({
            // tabsize: 2,
            height: 300
        });
    }catch (e) {
        console.log(e.message);
    }


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

