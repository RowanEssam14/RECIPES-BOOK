import { fetchRecipeDetails } from '../api';
import { RecipeDetails, toggleOverlay, addCloseButtonEventListener } from '../components/RecipeDetails';

export default async function handleRecipeCardClick(card, mainContentContainer) {
  const recipeId = card.getAttribute('data-id');

  const { recipe, ingredients } = await fetchRecipeDetails(recipeId);

  // Clear previous recipe details
  const existingOverlay = document.querySelector('.overlay');
  if (existingOverlay) {
    existingOverlay.remove(); // Remove the old overlay
  }

  const recipeDetailsHTML = RecipeDetails(recipe, ingredients);
  mainContentContainer.insertAdjacentHTML('beforeend', recipeDetailsHTML);

  toggleOverlay(true);
  addCloseButtonEventListener();
}
