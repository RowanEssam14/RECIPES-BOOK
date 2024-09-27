import Cards from './Cards';

export default function PopularRecipes(recipes) {
  return `
    <section class="main-section">
    <h2 class="main-section-title">RECIPE OF THE DAY</h2>
      <div class="main-section-recipes">
        ${Cards(recipes)}
      </div>
    </section>`;
}
