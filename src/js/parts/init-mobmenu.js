let btn = document.querySelector('.btn-mob');
let menu = document.querySelector('.main-menu');
let body = document.querySelector('body');
let svgBtn = document.querySelector('.ham1');
let menuItem = document.querySelectorAll('.main-menu__list-item');
let header = document.querySelector('.header');


function addShadowClass() {
    if (window.scrollY > 40) {
      header.classList.add("shadow");
    } else {
      header.classList.remove("shadow");
    }
  }
  window.addEventListener('scroll', addShadowClass);
  addShadowClass();


btn.addEventListener('click', function() {
    menu.classList.toggle('show');
    body.classList.toggle('fixed');
    header.classList.add('shadow');
});



//close mob menu on click to outside block
document.addEventListener('click', function(event) {

    let positionTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if(!menu.contains(event.target) && !btn.contains(event.target)) {
        if(menu.classList.contains('show')) {
            menu.classList.remove('show');
            body.classList.remove('fixed');
            svgBtn.classList.remove('active');
        }

    }
});

menuItem.forEach(item => {
    item.addEventListener('click', function() {
        menu.classList.remove('show');
        body.classList.remove('fixed');
        svgBtn.classList.remove('active');
    })
});