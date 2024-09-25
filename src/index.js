import './index.css';

const { fetchPopularRecipes, fetchExploreRecipes } = require('./utils');

const overlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.card');

function showOverlay() {
  overlay.style.display = 'block';
  overlay.style.overflow = 'scroll';
  document.body.style.overflow = 'hidden';
}

cards.forEach((card) => {
  card.addEventListener('click', showOverlay);
});

fetchPopularRecipes();
fetchExploreRecipes();
