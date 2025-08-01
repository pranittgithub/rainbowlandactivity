/*-----------------------------------------------------------------

Template Name: RainbowLand - Pre School & Activity Center in Virar West  <
Author:  Gramentheme
Author URI: https://themeforest.net/user/gramentheme/portfolio
Version: 1.0.0
Description: RainbowLand - Pre School & Activity Center in Virar West  <

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. preloader 


------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    //>> Mobile Menu Js Start <<//
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//

    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    //>> Hero-3 Slider Start <<//
    const sliderActive1 = ".hero-slider";
    const sliderInit1 = new Swiper(sliderActive1, {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 2000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
    });
    // content animation when active start here
    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");
          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one("animationend", function () {
              $(this).removeClass(anim + " animated");
            });
        });
      };
      animated();
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }
    animated_swiper(sliderActive1, sliderInit1);

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    $("select").niceSelect();

    //>> Team Slider Start <<//
    const teamSlider = new Swiper(".team-slider", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        1299: {
          slidesPerView: 4,
        },
        1199: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    const teamSlider2 = new Swiper(".team-slider-2", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Testimonial Slider Start <<//
    const testimonialSlider = new Swiper(".testimonial-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });

    const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });

    //>> Instagram Slider Start <<//
    const instagramBannerSlider = new Swiper(".instagram-banner-slider", {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        1399: {
          slidesPerView: 6,
        },
        1199: {
          slidesPerView: 5,
        },
        991: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 3,
        },
        650: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Brand Slider Start <<//
    const brandSlider = new Swiper(".brand-slider", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      breakpoints: {
        1199: {
          slidesPerView: 5,
        },
        991: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Certificate Slider Start <<//
    const certificateSlider = new Swiper(".certificate-slider", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Clases Slider Start <<//
    const clasesSlider = new Swiper(".clases-slider", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },

      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Event Slider Start <<//
    const eventSlider = new Swiper(".event-slider", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },

      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> News Slider Start <<//
    const newsSlider = new Swiper(".news-slider", {
      spaceBetween: 30,
      speed: 1300,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },

      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });

    //>> Search Popup Start <<//
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
      e.preventDefault();
      $searchWrap.animate({ opacity: "toggle" }, 500);
      $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
      $searchWrap.fadeOut(200);
      $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
      closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
      e.stopPropagation();
    });
  }); // End Document Ready Function

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();

  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  });
})(jQuery); // End jQuery

// Wait for DOM to be fully loaded
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Hide any existing messages
    document.getElementById("success-message").style.display = "none";
    document.getElementById("error-message").style.display = "none";

    // Show loading indicator or disable button
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    // Collect form data into an object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Use AJAX to send the form without redirecting
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwJ0pSEQwO_RO65ahOjPkxeirf69-Z31xocP4XBcb-Elefl_uccgb2EwrI4UXZJZDRb/exec";

    // Create XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("POST", scriptURL, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Handle response
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;

        if (xhr.status === 200) {
          // Success
          form.reset();
          document.getElementById("success-message").style.display = "block";
        } else {
          // Error
          document.getElementById("error-message").style.display = "block";
        }
      }
    };

    // Prepare form data for URL encoding
    const urlEncodedData = Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

    // Send the request
    xhr.send(urlEncodedData);
  });



document.addEventListener("DOMContentLoaded", function () {
  // Get the booking form
  const bookingForm = document.getElementById("booking-form");

  // Add submit event listener if the form exists
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingSubmit);
  }

  // Form submission handler
  function handleBookingSubmit(e) {
    e.preventDefault();

    // Hide any existing messages
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    if (successMessage) successMessage.style.display = "none";
    if (errorMessage) errorMessage.style.display = "none";

    // Get form data
    const form = e.target;
    const formData = new FormData(form);

    // Validate form data
    let isValid = true;
    let missingFields = [];

    // Required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "zipCode",
      "phoneNumber",
      "startPreference",
      "visitDate",
      "visitTime",
      "childAge",
      "field",
    ];

    requiredFields.forEach((field) => {
      if (!formData.get(field).trim()) {
        isValid = false;
        missingFields.push(field);
      }
    });

    if (!isValid) {
      if (errorMessage) {
        errorMessage.textContent = "Please fill in all required fields.";
        errorMessage.style.display = "block";
      }
      return;
    }

    // Disable submit button and show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    // Convert FormData to a plain object
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    // Create a unique callback function name
    const callbackName = "jsonpCallback_" + new Date().getTime();

    // Define the callback function
    window[callbackName] = function (response) {
      // Handle the response
      if (response && response.result === "success") {
        form.reset();
        if (successMessage) successMessage.style.display = "block";
      } else {
        if (errorMessage) {
          errorMessage.textContent =
            "Something went wrong. Please try again later.";
          errorMessage.style.display = "block";
        }
      }

      // Re-enable the submit button
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;

      // Clean up by removing the script tag and deleting the callback
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window[callbackName];
    };

    // Add callback to form data
    formDataObj.callback = callbackName;

    // Replace with your Google Apps Script Web App URL
    const scriptURL ="https://script.google.com/macros/s/AKfycbxeoI-WC8_F3qWUDnAycwLt4bV5dkHmTl0IJF974QZtqdkOZykgCxQWWvUd_tSGAwso/exec";

    // Build query string
    const queryString = Object.keys(formDataObj)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(formDataObj[key])
      )
      .join("&");

    // Create script element to make the JSONP request
    const script = document.createElement("script");
    script.src = scriptURL + "?" + queryString;

    // Handle script loading error
    script.onerror = function () {
      if (errorMessage) {
        errorMessage.textContent = "Connection error. Please try again later.";
        errorMessage.style.display = "block";
      }

      // Re-enable the submit button
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;

      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window[callbackName];
    };

    // Add the script to the document to start the request
    document.body.appendChild(script);
  }
});
