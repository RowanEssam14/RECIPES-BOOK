export default function Cards(recipes) {
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
