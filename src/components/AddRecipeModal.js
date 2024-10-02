function generateIngredientsList(ingredients, units, index) {
  return `
    <div class="form-group ingredients-form-group" data-index="${index}">
      <div class="form-field">
        <label for="ingredients-${index}" class="form-label">Ingredients:</label>
        <select id="ingredients-${index}" name="ingredients" class="form-input" required>
          <option value="" disabled selected>${ingredients[1].name}</option>
          ${ingredients.map((ingredient) => `<option value="${ingredient.id}">${ingredient.name}</option>`).join('')}
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
            placeholder="15"
            min="1"
            required
          />
          <select id="unit-${index}" name="unit" class="form-input form-input-unit">
            ${units.map((unit) => `<option value="${unit}">${unit}</option>`).join('')}
          </select>
        </div>
      </div>
    </div>
  `;
}

function addNewIngredientEventListener(ingredients, units) {
  const addIngredientLink = document.querySelector('.add-ingredient-link');
  let ingredientCount = 1; // Start from 1, since one ingredient is already added

  addIngredientLink.addEventListener('click', (event) => {
    event.preventDefault();
    const ingredientsContainer = document.querySelector('.ingredients-form-group');
    ingredientsContainer.insertAdjacentHTML('afterend', generateIngredientsList(ingredients, units, ingredientCount));
    ingredientCount += 1; // Increment the counter for the next ingredient
  });
}

function AddRecipeModal(ingredients, units) {
  return `
    <div class="modal addRecipe-modal">
      <div class="modal-body">
        <button class="button modal-close-button" aria-label="Close"></button>
        <h2 class="modal-title">ADDING NEW RECIPE</h2>
        <form class="modal-form">
          <div class="form-group">
            <div class="form-field">
              <label for="recipe-name" class="form-label">Name of recipe</label>
              <input
                type="text"
                id="recipe-name"
                name="recipe-name"
                class="form-input"
                placeholder="Name"
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
                placeholder="15"
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
              placeholder="Description description description"
            ></textarea>
          </div>
          ${generateIngredientsList(ingredients, units)}
          <div class="modal-footer">
            <div class="form-add-ingredient">
              <a href="#" class="add-ingredient-link">+ Add ingredient</a>
            </div>
            <div class="form-submit">
              <button type="submit" class="button button-add-recipe">ADD NEW RECIPE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
}

export { AddRecipeModal, generateIngredientsList, addNewIngredientEventListener };
