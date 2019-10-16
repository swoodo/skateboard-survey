
//drop shadow on section title when in section
const cards = document.getElementsByTagName('section');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseenter', cardEnter);
  cards[i].addEventListener('mouseleave', cardLeave);
}

function cardEnter(e) {
  e.target.querySelector('.section-title').classList.add('section-title-shadow');
}

function cardLeave(e) {
  e.target.querySelector('.section-title').classList.remove('section-title-shadow');
}

//copyright year
const year = new Date().getFullYear();

document.querySelector('.current-year').innerHTML=`${year}`;