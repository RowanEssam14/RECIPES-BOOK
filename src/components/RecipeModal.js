import { generateIngredientsList } from '../utils/forms/generateIngredientsList';

export default function RecipeModal(allIngredients, units, ingredients = [], recipe = {}) {
  const isEditMode = !!recipe.name; // Determine if we're in edit mode based on the presence of a recipe

  return `
    <div class="modal ${isEditMode ? 'editRecipe-modal' : 'addRecipe-modal'}">
      <div class="modal-body">
        <button class="button modal-close-button" aria-label="Close"></button>
        <h2 class="modal-title">${isEditMode ? 'EDIT RECIPE' : 'ADDING NEW RECIPE'}</h2>
        <form class="modal-form">
          <div class="form-group">
            <div class="form-field">
              <label for="recipe-name" class="form-label">Name of recipe</label>
              <input
                type="text"
                id="recipe-name"
                name="recipe-name"
                class="form-input"
                value="${isEditMode ? recipe.name : ''}"
                placeholder="${isEditMode ? '' : 'Name'}"
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
                value="${isEditMode ? recipe.cookingTime : ''}"
                placeholder="${isEditMode ? '' : '15'}"
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
            >${isEditMode ? recipe.description : ''}</textarea>
          </div>
          ${
            isEditMode
              ? ingredients
                  .map((ingredient, index) =>
                    generateIngredientsList(allIngredients, units, index + 1, true, ingredient)
                  )
                  .join('')
              : generateIngredientsList(allIngredients, units)
          }
          <div class="modal-footer">
            <div class="form-${isEditMode ? 'edit' : 'add'}-ingredient">
              <a href="#" class="add-ingredient-link"> + Add ingredient</a>
            </div>
            <div class="form-submit">
              <button type="submit" class="button button-${isEditMode ? 'edit' : 'add'}-recipe">
                ${isEditMode ? 'EDIT RECIPE' : 'ADD NEW RECIPE'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}
