$(document).ready(function () {
    var hotelSwiper = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        speed: 600,

        keyboard: {
            enabled: true,
        }
    });

    $(document).keydown(function(e){
        if (e.keyCode === 27 ) {
            closeModal();
        }
    });

    var reviewsSwiper = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
        speed: 600,

        keyboard: {
            enabled: true,
        }
    });

    $('.newsletter').parallax({imageSrc: './img/newsletter-bg.jpg'});

    var menuButton = $(".menu-button");
    menuButton.on("click", function () {
        $(".navbar-button").toggleClass("navbar-button--visible");
    });

    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
    }

    function closeModal(event) {
        if(event) {
            event.preventDefault();
        }

        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }

    // Обработка форм
    $(".form").each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "The name must be at least 2 letters"
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address format of name@domain.com"
                },
                phone: {
                    required: "Please enter your phone number",
                    minlength: "Your phone number must be 11 digits long"
                }
            }
        })
    });

    $(document).ready(function() {
        $(".phone").mask("+7 (999) 999-99-99");
    });

    AOS.init();
});