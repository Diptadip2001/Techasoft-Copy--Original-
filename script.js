document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper3', {
        loop: true,
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
          },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper1', {
        loop: true,
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 10,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper5', {
        loop: true,
        mousewheel: true,
        slidesPerView: 1,
        spaceBetween: 10,
        
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 3000,               // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay active after user interaction
          },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });
});
// const myModal= bootstrap.Modal.getOrCreateInstance('#myModal');

//     window.addEventListener('DOMContentLoaded',()=>{
//         myModal.show();
//     });
// window.onload = function() {
//     $('#myModal').modal('show');
// }
// $(document).ready(function(){
//     if(localStorage.getItem('.modal')!=='true')
//     {
//         $('.modal').modal('show');
//     }
// })
// window.onload = function() {
//     // Show the modal when the page loads
//     var myModal = new bootstrap.Modal(document.getElementById('myModal'));
//     myModal.show();
//   };
window.onload = function() {
    // Delay before showing the modal
    setTimeout(function() {
      // Show the modal after the delay
      var myModal = new bootstrap.Modal(document.getElementById('myModal'));
      myModal.show();
    }, 500); // 3000 milliseconds = 3 seconds
  };
  
  