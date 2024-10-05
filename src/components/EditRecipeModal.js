function generateIngredientsListEdit(ingredient, units, index, allIngredients) {
  return `
    <div class="form-group ingredients-form-group" data-index="${index}">
      <div class="form-field">
        <label for="ingredients-${index}" class="form-label">Ingredients:</label>
        <select id="ingredients-${index}" name="ingredients" class="form-input" required>
          <option value="" disabled>Select Ingredient</option>
          ${allIngredients
            .map(
              (currentIngredient) => `
            <option value="${currentIngredient.id}"
              ${currentIngredient.name === ingredient.name ? 'selected' : ''}>
              ${currentIngredient.name}
            </option>`
            )
            .join('')}
        </select>
      </div>
      <div class="form-field">
        <label for="quantity-${index}" class="form-label">Quantity:</label>
        <div class="quantity-input-field">
          <input
            id="quantity-${index}"
            name="quantity"
            type="number"
            class="form-input form-input-quantity"
            placeholder="1"
            value="${ingredient.amount}"
            required
          />
          <select id="unit-${index}" name="unit" class="form-input form-input-unit">
            ${units
              .map(
                (unit) => `
              <option value="${unit}" ${unit === ingredient.amountType ? 'selected' : ''}>
                ${unit}
              </option>`
              )
              .join('')}
          </select>
        </div>
      </div>
    </div>
  `;
}

export default function EditRecipeModal(recipe, allIngredients, units, ingredients) {
  return `
    <div class="modal editRecipe-modal">
      <div class="modal-body">
        <button class="button modal-close-button" aria-label="Close"></button>
        <h2 class="modal-title">EDIT RECIPE</h2>
        <form class="modal-form">
          <div class="form-group">
            <div class="form-field">
              <label for="recipe-name" class="form-label">Name of recipe</label>
              <input
                type="text"
                id="recipe-name"
                name="recipe-name"
                class="form-input"
                value="${recipe.name}"
                required
              />
            </div>
            <div class="form-field">
              <label for="cooking-time" class="form-label">Cooking time</label>
              <input
                type="number"
                id="cooking-time"
                name="cooking-time"
                class="form-input"
                value="${recipe.cookingTime}"
                required
              />
            </div>
          </div>
          <div class="form-field">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              class="form-input description-input"
              required
            >${recipe.description}</textarea>
          </div>
          ${ingredients
            .map((ingredient, index) => generateIngredientsListEdit(ingredient, units, index + 1, allIngredients))
            .join('')}
          <div class="modal-footer">
            <div class="form-edit-ingredient">
              <a href="#" class="add-ingredient-link"> + Add ingredient</a>
            </div>
            <div class="form-submit">
              <button type="submit" class="button button-edit-recipe">EDIT RECIPE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}
