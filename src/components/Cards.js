import { handleRecipeCardClick, handleDeleteButtonClick, handleFavouriteClick } from '../utils';

function addCardEventListeners() {
  const cards = document.querySelectorAll('.card');
  const mainContentContainer = document.querySelector('.main-content');

  cards.forEach((card) => {
    const recipeId = card.getAttribute('data-id');

    card.addEventListener('click', () => {
      handleRecipeCardClick(card, mainContentContainer);
    });

    const deleteButton = card.querySelector('.action-delete');
    handleDeleteButtonClick(deleteButton, recipeId);

    // Favourite button click event
    const favouriteButton = card.querySelector('.action-favourite');
    const isFavorite = favouriteButton.getAttribute('data-is-favourite') === 'true';
    handleFavouriteClick(favouriteButton, recipeId, isFavorite);
  });
}

function Cards(recipes) {
  return recipes
    .map(
      (recipe) => `
    <div class="card" data-id="${recipe.id}">
      <div class="card-actions">
        <span class="card-action action-favourite ${
          recipe.isFavorite ? 'favourited' : ''
        }" aria-label="Add to Favorites" data-id="${recipe.id}"
            data-is-favourite="${recipe.isFavorite}"></span>
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
