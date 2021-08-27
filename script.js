const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//toggle the Navigation
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);

//Show modal form
open.addEventListener('click', () => modal.classList.add('show-modal'));


//Hile modal form
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false
);