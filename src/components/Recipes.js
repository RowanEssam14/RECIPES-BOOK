import Cards from './Cards';

export default function Recipes(recipes, title = '') {
  return `
    <section class="main-section">
    ${title ? `<h2 class="main-section-title">${title}</h2>` : ''}
      <div class="main-section-recipes">
        ${Cards(recipes)}
      </div>
    </section>`;
}
