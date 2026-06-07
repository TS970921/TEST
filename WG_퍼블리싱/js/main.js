let header = document.querySelector('#Header');
let logo = document.querySelector('#gnb_logo');
let gnbTxt = document.querySelectorAll('.coloreffect');
let gnb = document.querySelector('.gnb');
let section = document.querySelectorAll('.section');
let navBtn = document.querySelectorAll('.gnb li a');
const gamesTop = window.pageYOffset + document.querySelector('#games').getBoundingClientRect().top;
const gamesBottom = window.pageYOffset + document.querySelector('#games').getBoundingClientRect().bottom;

//Header
let gnbActive = () =>{
  section.forEach(function(item){
    if(window.scrollY + 90 >= item.offsetTop - header.offsetHeight){
      let id = item.getAttribute('data-section');
    
      navBtn.forEach(function(item){
        if(item.getAttribute("href") === '#'+id){
          item.classList.add('current')
        }else{
          item.classList.remove('current')
        }
      })
    }
    animate(item, 1.6);
  })
}

document.addEventListener('scroll', function(){
  gnbActive();
})

// contents animation
const animate = (item, time) => {
  if(window.scrollY * time >= item.offsetTop){
    item.classList.add('animate');
  } 
}

// pre animation
let animation = () => {
  let introAnimation  = document.querySelectorAll('#intro [data-wg^=fade]');
    introAnimation.forEach(function(section){
      section.classList.add('animate');
  })
}

// GNB - Mobile ver.
const mnavBtn = document.querySelector('.m_gnb');
const mMenu = document.querySelector('.m_nav_wrap');
const mnMenus = document.querySelectorAll('.m_nav_wrap a');

const openMobileMenu = () => {
  mnavBtn.checked ? mMenu.classList.add('show') : mMenu.classList.remove('show');  
}

mnMenus.forEach(function(menu){
  menu.addEventListener('click', function(){
    mMenu.classList.remove('show');  
    mnavBtn.checked = false;
  })
})

// INTRO TEXT TYPING
TypeHangul.type('#target',{intervalType: 50, humanize: 0.5});

// Slide GAMES - swiper option
const gamesSlide = new Swiper(".games_slide", {
  
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: false,
  pagination: {
    el: "#games .swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// Scoll Event
const headerScroll = () => {
    let scroll = window.scrollY;
  
    if (scroll > 20) {
      header.classList.add('on');
      logo.classList.add('on');
    } else {
      header.classList.remove('on')
      logo.classList.remove('on')
    }
};

const swiperAutoscroll = () => {
  let autoScroll = window.scrollY;
  
  if (autoScroll > (gamesTop-200) && autoScroll < (gamesBottom -50)) {
    gamesSlide.autoplay.start();
  }
};

window.addEventListener('scroll', function(e) {
  headerScroll();
  swiperAutoscroll();
});
