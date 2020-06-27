$(function () {


  /* ------------------------------------
  1. Configuración de Mmenu.js 
  -------------------------------------*/

  var $menu = $("#menu-principal").mmenu({

    //COFIGURANDO EL CORE
    //Integración con Bootstrap
    wrappers: ["bootstrap"],
    // Efecto deslizante para Sub-enlaces
    slidingSubmenus: true,
    //Quitamos la barra Superior
    navbar: {
      title: false
    },
    //CONFIGURANDO EXTENSIONES
    extensions: ["border-full", "pagedim-black", "shadow-page", "theme-white"],
    //CONFIGURANDO ADDs
    counters: true,
    navbars: [
      {
        "position": "top",
        "content": ['<a href="index.html"> <img src="images/logo.svg" alt="Logo del Sitio" width="160"> </a>']
      }
    ]
  });


  /* ------------------------------------
      2. Configuración del boton buscar
  -------------------------------------*/
  $('.btn-buscar').click(function () {
    $('.btn-buscar').toggleClass('boton-buscar-activo');
  });

  /* ------------------------------------
     3. Configuración del Juggler.js
 -------------------------------------*/
  Juggler.init();

  /* ------------------------------------
 4. Configuración #swiperBeneficios
-------------------------------------*/


  var swiperBeneficios = new Swiper('#swiperBeneficios', {

    speed: 400,
    grabCursor: true,
    loop: true,

    // Componente Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Componente pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    //Componente keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    //Componente Thumbs
    thumbs: {
      swiper: {
        el: '#swiperBeneficiosNav',
        slidesPerView: 3,
        watchOverflow: true

      }
    }
  })

  /* ------------------------------------
 5. Configuración #swiperFunciones
-------------------------------------*/


var swiperBeneficios = new Swiper('#swiperFunciones', {

  speed: 400,
  grabCursor: true,
  loop: true,

  // Componente Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Componente pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  //Componente keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  //Componente Thumbs
  thumbs: {
    swiper: {
      el: '#swiperFuncionesNav',
      slidesPerView: 6,
      watchOverflow: true

    }
  }
})
  /* ------------------------------------
 6. Configuración de hc-sticky.js
-------------------------------------*/
var Sticky = new hcSticky('#detalles-encabezado', {
  mobileFirst:true,
  responsive:{
    0:{
      disable:true,
    },
    800:{
      disable:false,
      stickTo:'body',
      stickyClass:'encabezadoFijo',
      

    }
  }
  
});




});