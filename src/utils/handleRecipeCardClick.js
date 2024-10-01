import { fetchRecipeDetails } from '../api';
import {
  renderRecipeDetails,
  toggleOverlay,
  addCloseButtonEventListener,
  addRecipeDetailsEventListeners,
} from './renderRecipeDetails';

export default async function handleRecipeCardClick(card, mainContentContainer) {
  const recipeId = card.getAttribute('data-id');

  const { recipe, ingredients } = await fetchRecipeDetails(recipeId);

  // Clear previous recipe details
  const existingOverlay = document.querySelector('.overlay');
  if (existingOverlay) {
    existingOverlay.remove(); // Remove the old overlay
  }
  mainContentContainer.insertAdjacentHTML('beforeend', renderRecipeDetails(recipe, ingredients));
  addRecipeDetailsEventListeners(recipeId);

  toggleOverlay(true);
  addCloseButtonEventListener();
}
