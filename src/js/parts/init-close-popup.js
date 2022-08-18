let close = document.querySelector('.btn__close');
let popup = document.querySelector('.popup');

close.addEventListener('click', function(){
    popup.classList.remove('show');
});
popup.addEventListener('click', function(){
    this.classList.remove('show');
});