'use strict';

document.addEventListener('mousemove', (e) => {
    const rocket = document.querySelector('.rocket');
    rocket.style.left = e.offsetX + 'px';
    rocket.style.top = e.offsetY + 'px';
})

document.addEventListener('click', (e) => {
    const bullets = document.querySelector('.bullets')
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = e.offsetX + 'px';
    bullet.style.top = e.offsetY + 'px';
    bullets.appendChild(bullet);
    setTimeout(() => {
        bullets.removeChild(bullet);
    }, 3000);
})