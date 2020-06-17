$(function () {

    /*------------------------------------------------- 
    1) CONFIGURATION MMENU LIBRARY 
    (Library for creating an off-canvas menu)
    --------------------------------------------------*/
    var $menu = $("#mainMenu").mmenu({

        // 1.1) Mmenu Core Configurations
        wrappers: ["bootstrap"], // Integration with Bootstrap
        slidingSubmenus: true, // Sliding effects for sub-links
        //
        navbar: {
            title: false // Not adding a Navbar titled "Menu" Title on the Off-Canvas Menu
        },

        // 1.2) Mmenu Extensions Configurations
        extensions: ["pagedim-black", // Dim out the page to black
            "shadow-page", // Add a shadow to the page
            "theme-white",// Apply the "white" theme to the Off-Canvas menu
            "border-full"], //Use the "full" border style

        // 1.3) Mmneu Add-ons Configurations
        counters: true, // Append a counter to the listitems
        navbars: [ // Prepend a fixed searchfield to the menu
            {
                "position": "top",
                "content": ['<a href="index.html"> <img src="images/logo.svg" alt="Site Logo" width="160"> </a>']
            }
        ]

    });


    /*------------------------------------------------- 
    2) CONFIGURATION SEARCH BUTTON
    --------------------------------------------------*/

    $('.btnSearch').click(function () { // When clicking element that has class '.btnSearch', class 'btnSearchActive' is addded
        $('.btnSearch').toggleClass('btnSearchActive'); // Class btnSearchActive hide fa-search icon and replace it with fa-times icon 
    });

    /* ------------------------------------
    3) CONFIGURATION JUGGLER LIBRARY
    (Library used for moving HTML code)
    -------------------------------------*/
    Juggler.init(); //function for initilizating Juggler Library

    /* ------------------------------------
    4) CONFIGURATION SWIPER LIBRARY
    (Library for creating swiping slides)
    -------------------------------------*/

    var swiperProductBenefits = new Swiper('#swiperProductBenefits', {

        // Setting swiper parameters
        speed: 400,
        grabCursor: true,
        loop: true,

        // Navigation swiper components
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination swiper components
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        // Keyboard swiper components
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        // Thumbs swiper components 
        // (allows link of two swippers. In this case between #swiperProductBenefits and #swiperProductBenefitsNav)
        thumbs: {
            swiper: {
                el: '#swiperProductBenefitsNav',
                slidesPerView: 3,
                //watchOverflow: true

            }
        }
    })

    /* ------------------------------------
   5) CONFIGURATION SWIPER LIBRARY
   (Library for creating swiping slides)
   -------------------------------------*/

    var swiperProductFunctions = new Swiper('#swiperProductFunctions', {

        // Setting swiper parameters
        speed: 400,
        grabCursor: true,
        loop: true,

        // Navigation swiper components
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination swiper components
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        // Keyboard swiper components
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        // Thumbs swiper components 
        // (allows link of two swippers. In this case between #swiperProductBenefits and #swiperProductBenefitsNav)
        thumbs: {
            swiper: {
                el: '#swiperProductFunctionsNav',
                slidesPerView: 3,
                //watchOverflow: true

            }
        }
    })

    /* ------------------------------------
    6. CONFIGURATION HC_STICKY LIBRARY
    -------------------------------------*/
    var Sticky = new hcSticky('#headerDetails', {
        mobileFirst: true,
        responsive: {
            0: {
                disable: true,
            },
            800: {
                disable: false,
                stickTo: 'body',
                stickyClass: 'fixedHeader',

            }
        }

    });


});