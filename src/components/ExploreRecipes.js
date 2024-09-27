import Cards from './Cards';

export default function ExploreRecipes(recipes) {
  return `
              <section class="main-section">
            <h2 class="main-section-title">EXPLORE RECIPES</h2>
            <div class="main-section-explore">${Cards(recipes)}</div>
          </section>`;
}
