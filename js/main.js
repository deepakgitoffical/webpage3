// var a = document.getElementById('spiner');
//         function fun1(){
//             a.style.display='none';
//         }


$('#happy-customer-owl').owlCarousel({
    center: true,
    loop: true,
    // nav: false,
    mouseDrag: true,
    // items: 3,
    // dots: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    // autoWidth: true,
    responsive: {
        0: {
            items: 1,
           
        },
        768: {
            items: 2,
            
            
        },
        991: {
        items: 3
        }
    },
});

$('#customer-speak-owl').owlCarousel({
    center: true,
    loop: true,
    // nav: false,
    mouseDrag: true,
    // items: 3,
    // dots: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    // autoWidth: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
            
           
        },
        991: {
        items: 3
        }
    },
});
