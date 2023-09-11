var swiper = new Swiper(".mySwiper", {});
var SwiperNavigation = new Swiper(".SwiperNavigation", {
    navigation: {
        nextEl: ".SwiperNavigation-button-next",
        prevEl: ".SwiperNavigation-button-prev",
    },
});

var SwiperPagination = new Swiper(".SwiperPagination", {
    pagination: {
        el: ".SwiperPagination-pagination",
    },
});


var SwiperDynamic = new Swiper(".SwiperDynamic", {
    pagination: {
        el: ".SwiperDynamicPagination",
        dynamicBullets: true,
    },
});

var Swiperprogress = new Swiper(".Swiperprogress", {
    pagination: {
        el: ".Swiperprogress-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".Swiperprogress-button-next",
        prevEl: ".Swiperprogress-button-prev",
    },
});


var SwiperFraction = new Swiper(".SwiperFraction", {
    pagination: {
        el: ".SwiperFraction-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".SwiperFraction-button-next",
        prevEl: ".SwiperFraction-button-prev",
    },
});



var SwiperCustom = new Swiper(".SwiperCustom", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

var SwiperScrollbar = new Swiper(".SwiperScrollbar", {
    scrollbar: {
        el: ".SwiperScrollbar-scrollbar",
        hide: true,
    },
});


var SwiperVertical = new Swiper(".SwiperVertical", {
    direction: "vertical",
    pagination: {
        el: ".SwiperVertical-pagination",
        clickable: true,
    },
});


var SwiperSpacebetween = new Swiper(".Swiper-Space-between", {
    spaceBetween: 30,
    pagination: {
      el: ".Swiper-Space-between-pagination",
      clickable: true,
    },
  });


  var swiperPerView = new Swiper(".Swiper-per-view", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".Swiper-per-view-pagination",
      clickable: true,
    },
  });  

  var Swiperperviewauto = new Swiper(".Swiper-per-view-auto", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".Swiper-per-view-auto-pagination",
      clickable: true,
    },
  });

  var SwiperCentered = new Swiper(".Swiper-Centered", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".Swiper-Centered-pagination",
      clickable: true,
    },
  });

  var mySwiperCenteredAuto = new Swiper(".mySwiperCenteredAuto", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".mySwiperCenteredAuto-pagination",
      clickable: true,
    },
  });

  var mySwiperCssMode = new Swiper(".mySwiperCssMode", {
    cssMode: true,
    navigation: {
      nextEl: ".mySwiperCssMode-button-next",
      prevEl: ".mySwiperCssMode-button-prev",
    },
    pagination: {
      el: ".mySwiperCssMode-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });  


  var SwiperFreemode = new Swiper(".SwiperFreemode", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".SwiperFreemode-pagination",
      clickable: true,
    },
  });


  var mySwipercontainer = new Swiper(".mySwiper-container", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".mySwiper-container-scrollbar",
    },
    mousewheel: true,
  });

  var mySwiperGrid = new Swiper(".mySwiperGrid", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".mySwiperGrid-pagination",
      clickable: true,
    },
  });


  var mySwiperNested = new Swiper(".mySwiper-Nested", {
    spaceBetween: 50,
    pagination: {
      el: ".mySwiper-Nested-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2-Nested", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".mySwiper-Nested-pagination",
      clickable: true,
    },
  });

  var mySwiperGrabcursor = new Swiper(".mySwiper-Grab-cursor", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".mySwiper-Grab-cursor-pagination",
      clickable: true,
    },
  });

  var Infinite = new Swiper(".mySwiper-Infinite", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".mySwiper-Infinite-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiper-Infinite-next",
      prevEl: ".mySwiper-Infinite-prev",
    },
  });


  var mySwiperGroup = new Swiper(".mySwiper-group", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".mySwiper-group-scrollbar",
    },
    navigation: {
      nextEl: ".mySwiper-group-button-next",
      prevEl: ".mySwiper-group-button-prev",
    },
    pagination: {
      el: ".mySwiper-group-pagination",
      clickable: true,
    },
  });

  var mySwiperEffect = new Swiper(".mySwiperEffect", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".mySwiperEffect-button-next",
      prevEl: ".mySwiperEffect-button-prev",
    },
    pagination: {
      el: ".mySwiperEffect-pagination",
      clickable: true,
    },
  });  

  var mySwiperCube = new Swiper(".mySwiperCube", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".mySwiperCube-pagination",
    },
  });

  var mySwiperCoverflow = new Swiper(".mySwiperCoverflow", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".mySwiperCoverflow-pagination",
    },
  });



  var swiper = new Swiper(".mySwiperFlip", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var mySwiperFlip = new Swiper(".mySwiperFlip", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".mySwiperFlip-pagination",
    },
    navigation: {
      nextEl: ".mySwiperFlip-button-next",
      prevEl: ".mySwiperFlip-button-prev",
    },
  });


  var mySwiperEffectCards = new Swiper(".mySwiperEffectCards", {
    effect: "cards",
    grabCursor: true,
  });


  var mySwiperEffectCreative = new Swiper(".mySwiperEffectCreative", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  var mySwiper2EffectCreative = new Swiper(".mySwiper2EffectCreative", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });
  var mySwiper3EffectCreative = new Swiper(".mySwiper3EffectCreative", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  var mySwiper4EffectCreative = new Swiper(".mySwiper4EffectCreative", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
  });
  var mySwiper5EffectCreative = new Swiper(".mySwiper5EffectCreative", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-125%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 90],
      },
    },
  });
  var mySwiper6EffectCreative = new Swiper(".mySwiper6EffectCreative", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
  });


  var mySwiperKeyboard = new Swiper(".mySwiper-Keyboard", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".mySwiper-Keyboard-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiper-Keyboard-button-next",
      prevEl: ".mySwiper-Keyboard-button-prev",
    },
  });

  var mySwiperMousewheel = new Swiper(".mySwiperMousewheel", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".mySwiperMousewheel-pagination",
      clickable: true,
    },
  });

  var Autoplay = new Swiper(".mySwiper-Autoplay", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mySwiper-Autoplay-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiper-Autoplay-button-next",
      prevEl: ".mySwiper-Autoplay-button-prev",
    },
  });
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var progress = new Swiper(".mySwiper-progress", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });



//   Manipulation
var mySwiperManipulation = new Swiper(".mySwiperManipulation", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".mySwiperManipulation-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".mySwiperManipulation-button-next",
      prevEl: ".mySwiperManipulation-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      mySwiperManipulation.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      mySwiperManipulation.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });
  document.querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      mySwiperManipulation.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      mySwiperManipulation.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });

// end Manipulation
var mySwipergallery = new Swiper(".mySwipergallery", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var mySwiper2gallery = new Swiper(".mySwiper2gallery", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  var mySwiperHash = new Swiper(".mySwiperHash", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiperHash-button-next",
      prevEl: ".mySwiperHash-button-prev",
    },
  });

  var mySwiperrtl = new Swiper(".mySwiperrtl", {
    navigation: {
      nextEl: ".mySwiperrtl-button-next",
      prevEl: ".mySwiperrtl-button-prev",
    },
    pagination: {
      el: ".mySwiperrtl-pagination",
      clickable: true,
    },
  });

  var mySwiperParallax = new Swiper(".mySwiperParallax", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".mySwiperParallax-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiperParallax-button-next",
      prevEl: ".mySwiperParallax-button-prev",
    },
  });

  var mySwiperLazy = new Swiper(".mySwiperLazy", {
    lazy: true,
    pagination: {
      el: ".mySwiperLazy-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mySwiperLazy-button-next",
      prevEl: ".mySwiperLazy-button-prev",
    },
  });

  var mySwiperbreakpoints = new Swiper(".mySwiperbreakpoints", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".mySwiperbreakpoints",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
 

// var Headers = document.getElementById("header");
// window.onscroll = function(){
//     console.log("a");
//     console.log(window.scrollY);
//     if(window.scrollY>163){
//         Headers.classList.add("onscroll");
//         Headers.classList.add("animate__animated");
//         Headers.classList.add("animate__fadeInDown");
//         Headers.classList.remove("animate__fadeOutUp");
//     }else{
//         Headers.classList.remove("onscroll");
//         Headers.classList.add("animate__animated");
//         Headers.classList.remove("animate__fadeInDown");
//         Headers.classList.add("animate__fadeOutUp");
//     }
// }
// // var intro = document.getElementById("intro");
// // console.log(intro);
// // var custom = document.querySelector("#intro");
// // console.log(custom);
// // custom = document.querySelectorAll(".custom");
// // console.log(custom);
// // intro = document.getElementsByTagName("div");
// // console.log(intro);
// // var mahallo = document.getElementById("mahallo");
// // for(i=0; i<intro.length;i++){
// //     console.log(intro[i]);
// // }
// // var hello = document.querySelectorAll(".hello");
// // console.log(hello);
// // hello.forEach(function(e) {
// //    e.onclick = function(){
// //     console.log("hi");
// //    }
// // });
// // var thiHello;
// // for(i=0 ; i<hello.length ; i++){
// //     thiHello = hello[i];
// //     thiHello.onclick = function(){
// //         console.log("sec hi");
// //         mahallo.classList.toggle("hidden");

// //     }
// // }
