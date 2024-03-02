document.addEventListener("DOMContentLoaded", () => {
  function getCoords(e) {
    return (e.getBoundingClientRect().top) * 3;
    // return e.getBoundingClientRect().top;
  };

  function makeActive() {
    animContainer_1.classlist.add('active');
  }

  const animContainer_1 = document.querySelector('.animation__list'),
        scaleItem = document.querySelector('.animation__item--active'),
        imgItems = document.querySelectorAll('.animation__img');
  console.log(getCoords(animContainer_1));
  console.log(imgItems);
  

  window.addEventListener("scroll", () => {
    if (window.scrollY >= getCoords(animContainer_1)) {
      animContainer_1.classList.add('scroll');
      setTimeout(() => scaleItem.classList.add('scale'), 6000);
      setTimeout(() => imgItems.forEach(e => e.classList.add('left')), 6000);
      setTimeout(() => imgItems.forEach(e => e.classList.add('right')), 9000);
    } else {
      animContainer_1.classList.remove('scroll');
      scaleItem.classList.remove('scale');
      scaleItem.style.transform = 'scale(1)';
      imgItems.forEach(e => e.classList.remove('left'));
      imgItems.forEach(e => e.classList.remove('right'));
    }
   
  });

  const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 150,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // effect: 'cards',
  // cardsEffect: {
  //   // crossFade: true,
  // },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 3,
    },
  },
  autoplay: true,
  
  // limitRotation: true,
});

$('.slick-wrapper--1').slick({
  // adaptiveHeight: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  fade: true,
  pauseOnHover: false,
});

// $('.slick-wrapper--2').slick({
  
//   infinite: true,
//   // autoplay: true,
//   arrows: false,
//   speed: 500,
//   centerMode: true,
//   centerPadding: '0',
//   // fade: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// });


  


});





