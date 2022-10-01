// 스크롤 시 배지 화면에 보여졌다가 사라지게
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //  gsap.to.(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수,시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.8, {
    scrollTo: 0,
  });
});

// 섹션 - 음료 이미지 fade in 효과
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7초 - 1.4초 - 2.1초 후에 동작할 수 있게
    opacity: 1,
  });
});

// 공지사항 부분 슬라이드
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 센터
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// youtube 영상 위에 아이콘 움직이기
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject('.floating', 1, 15);
floatingObject('.floating', 0.5, 15);
floatingObject('.floating', 1.5, 20);

// 전체 fade-left, fade-right animation 적용
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
