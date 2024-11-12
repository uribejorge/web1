let usuarioNuevo = {}
let usuarios = []       

function enviarContacto() {     
   let Nombre = document.getElementById('Nombre').value;   
   let Apellido = document.getElementById('Apellido').value;   
   let Correo = document.getElementById('Correo').value;   
   let Movil = document.getElementById('Movil').value;
   
   usuarioNuevo = {                 
     Nombre,
     Apellido,       
     Correo,
     Movil,
   };
   usuarios.push(usuarioNuevo); 
   console.log(usuarios);
}
let btnenviar = document.getElementById('btnenviar') 
btnenviar.addEventListener('click',enviarContacto)    


(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Pricing carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);


// funciones 

function obtenerParametros() {
    const params = new URLSearchParams(window.location.search);
    const parametro1 = params.get('parametro1');
    const parametro2 = params.get('parametro2');
    // Usa los parámetros como necesites
    console.log(parametro1, parametro2);
}

window.onload = obtenerParametros;




