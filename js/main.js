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
});
