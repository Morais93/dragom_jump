const cr = document.querySelector('.cr');
const pipe = document.querySelector('.pipe');

const jump = () => {
    cr.classList.add('jump');

    setTimeout(() => {

        cr.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const crPosition = +window.getComputedStyle(cr).bottom.replace('px', '');

    console.log(crPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && crPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        cr.style.animation = 'none';
        cr.style.bottom = `${crPosition}px`;

        cr.src = './imagens/explosion.gif'
        cr.style.width = '250px'
        cr.style.marginleft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);