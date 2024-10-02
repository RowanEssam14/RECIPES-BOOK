export default function addRecipeModal() {
  return `        <div class="modal addRecipe-modal">
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
              <div class="form-group">
                <div class="form-field">
                  <label for="ingredients" class="form-label">Ingredients:</label>
                  <select id="ingredients" name="ingredients" class="form-input" required>
                    <option value="" disabled selected>Ingredient #1</option>
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="avocado">Avocado</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="quantity" class="form-label">Quantity:</label>
                  <div class="quantity-input-field">
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      class="form-input form-input-quantity"
                      placeholder="15"
                      min="1"
                      required
                    />
                    <select id="unit" name="unit" class="form-input form-input-unit">
                      <option value="pc">pc</option>
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                    </select>
                  </div>
                </div>
              </div>
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
        </div>`;
}
