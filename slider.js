const images = document.querySelectorAll('.slider li');
const arrowPrev = document.querySelector('.arrow-left');
const arrowNext = document.querySelector('.arrow-right');

let index = 0;
const count = images.length;


arrowPrev.addEventListener('click', function() {
    images[index].classList.remove('visible');
    index--;
    if (index < 0){
        index = count-1;
    }

    images[index].classList.add('visible');
});

arrowNext.addEventListener('click', function() {
    images[index].classList.remove('visible');
    index++;
    if (index > count-1){
        index = 0;
    }

    images[index].classList.add('visible');
});


