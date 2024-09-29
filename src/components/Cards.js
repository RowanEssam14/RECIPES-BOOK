import { fetchRecipeDetails } from '../api';
import { RecipeDetails, showOverlay, addCloseButtonEventListner } from './RecipeDetails';

function addCardEventListeners() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', async () => {
      const recipeId = card.getAttribute('data-id');
      const { recipe, ingredients } = await fetchRecipeDetails(recipeId);

      // Clear previous recipe details
      const existingOverlay = document.querySelector('.overlay');
      if (existingOverlay) {
        existingOverlay.remove(); // Remove the old overlay
      }

      const recipeDetailsHTML = RecipeDetails(recipe, ingredients);
      const mainContentContainer = document.querySelector('.main-content');
      mainContentContainer.insertAdjacentHTML('beforeend', recipeDetailsHTML);

      showOverlay();
      addCloseButtonEventListner();
    });
  });
}

function Cards(recipes) {
  const cardsHTML = recipes
    .map(
      (recipe) => `
    <div class="card" data-id="${recipe.id}">
      <div class="card-actions">
        <span class="card-action action-favourite" aria-label="Add to Favorites"></span>
        <span class="card-action action-edit" aria-label="Edit Recipe"></span>
        <span class="card-action action-delete" aria-label="Delete Recipe"></span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${recipe.name}</h3>
        <div class="card-details">
          <ul class="list card-list">
            <li class="card-list-item">
              <span class="card-list-info">${recipe.ingredients.length} ingredients</span>
            </li>
            <li class="card-list-item">
              <span class="card-list-info">${recipe.cookingTime} min.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  return cardsHTML;
}

export { Cards, addCardEventListeners };
