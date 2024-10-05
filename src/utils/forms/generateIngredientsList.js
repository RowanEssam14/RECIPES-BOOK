function generateIngredientsList(ingredients, units, index = 1, isEditing = false, currentIngredient = null) {
  return `
    <div class="form-group ingredients-form-group" data-index="${index}">
      <div class="form-field">
        <label for="ingredients-${index}" class="form-label">Ingredients:</label>
        <select id="ingredients-${index}" name="ingredients" class="form-input" required>
          <option value="" disabled ${isEditing ? '' : 'selected'}>${
    isEditing ? 'Select Ingredient' : ingredients[1].name
  }</option>
          ${
            isEditing
              ? ingredients
                  .map(
                    (ingredient) => `
              <option value="${ingredient.id}" ${currentIngredient.name === ingredient.name ? 'selected' : ''}>
                ${ingredient.name}
              </option>`
                  )
                  .join('')
              : ingredients.map((ingredient) => `<option value="${ingredient.id}">${ingredient.name}</option>`).join('')
          }
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
            value="${isEditing ? currentIngredient.amount : ''}"
            min="1"
            required
          />
          <select id="unit-${index}" name="unit" class="form-input form-input-unit">
            ${units
              .map(
                (unit) => `
              <option value="${unit}" ${isEditing && unit === currentIngredient.amountType ? 'selected' : ''}>
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

function addNewIngredientEventListener(ingredients, units) {
  const addIngredientLink = document.querySelector('.add-ingredient-link');

  addIngredientLink.addEventListener('click', (event) => {
    event.preventDefault();
    const ingredientsContainers = document.querySelectorAll('.ingredients-form-group');
    const lastIngredientsContainer = ingredientsContainers[ingredientsContainers.length - 1];
    const ingredientCount = ingredientsContainers.length + 1;
    lastIngredientsContainer.insertAdjacentHTML(
      'afterEnd',
      generateIngredientsList(ingredients, units, ingredientCount)
    );
  });
}

export { generateIngredientsList, addNewIngredientEventListener };
