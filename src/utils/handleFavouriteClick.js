import { favouriteRecipe } from '../api';

export default function handleFavouriteClick(favouriteButton, recipeId) {
  favouriteButton.addEventListener('click', async (event) => {
    event.stopPropagation(); // Prevent triggering card click event
    await favouriteRecipe(recipeId);
    window.location.reload();
  });
}
