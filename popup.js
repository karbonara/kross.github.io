'use strict';

const btnOpen = document.querySelector('.write-btn');
const btnClose = document.querySelector('.form__main-close');
const setup = document.querySelector('.setup');

btnOpen.addEventListener('click', function () {
   setup.classList.remove('hidden');
});

btnClose.addEventListener('click', function () {
    setup.classList.add('hidden');
});