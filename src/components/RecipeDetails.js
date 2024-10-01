function RecipeDetails(recipe, ingredients) {
  if (!recipe) return '';

  return `
    <div class="overlay">
        <div class="overlay-media">
          <img class="overlay-image" />
        </div>
        <span class="close-overlay"></span>

        <div class="overlay-body">
          <div class="overlay-info">
            <div class="overlay-title-wrapper">
              <h3 class="overlay-title">${recipe.name}</h3>
              <strong class="overlay-time">${recipe.cookingTime} min.</strong>
            </div>
            <p class="overlay-description">${recipe.description}</p>
          </div>
          <div class="overlay-ingredients">
            <h3 class="overlay-ingredients-title">INGREDIENTS</h3>
            <ul class="overlay-list list"> ${ingredients
              .map(
                (ingredient) =>
                  `<li class="overlay-list-item">${ingredient.amount} ${ingredient.amountType} ${ingredient.name}</li>`
              )
              .join('')}
            </ul>
          </div>

          <div class="overlay-actions">
            <span class="overlay-action action-favourite" aria-label="Add to Favorites"></span>
            <span class="overlay-action action-edit" aria-label="Edit Recipe"></span>
            <span class="overlay-action action-delete" aria-label="Delete Recipe"></span>
          </div>
        </div>
      </div>

  `;
}

function toggleOverlay(show) {
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.style.display = show ? 'block' : 'none';
    document.body.style.overflow = show ? 'hidden' : 'auto';
  }
}

function addCloseButtonEventListener() {
  const closeOverlayButton = document.querySelector('.close-overlay');
  if (closeOverlayButton) {
    closeOverlayButton.addEventListener('click', () => toggleOverlay(false));
  }
}

export { RecipeDetails, addCloseButtonEventListener, toggleOverlay };
