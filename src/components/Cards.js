import { fetchRecipeDetails } from '../api';
import { RecipeDetails, showOverlay, addCloseButtonEventListner } from './RecipeDetails';

function addCardEventListeners() {
  const cards = document.querySelectorAll('.card');
  const modal = document.querySelector('.delete-modal');

  cards.forEach((card) => {
    // Event listener for card click (to show recipe details)
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

    // Event listener for delete action
    const deleteButton = card.querySelector('.action-delete');
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent triggering the card click event
      modal.style.display = 'flex'; // Show the delete modal
    });
  });
}

function Cards(recipes) {
  return recipes
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
}

export { Cards, addCardEventListeners };
