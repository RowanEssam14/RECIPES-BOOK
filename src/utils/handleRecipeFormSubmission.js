import { addRecipe } from '../api';

export default function handleRecipeFormSubmission() {
  const modalContainer = document.querySelector('.modal');
  const form = modalContainer.querySelector('.modal-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const recipeName = document.getElementById('recipe-name').value;
    const cookingTime = document.getElementById('cooking-time').value;
    const description = document.getElementById('description').value;

    // Gather all ingredients
    const ingredientElements = modalContainer.querySelectorAll('.ingredients-form-group');
    const ingredients = Array.from(ingredientElements).map((ingredientGroup) => {
      const ingredientId = ingredientGroup.querySelector('select[name="ingredients"]').value;
      const quantity = ingredientGroup.querySelector('input[name="quantity"]').value;
      const unit = ingredientGroup.querySelector('select[name="unit"]').value;

      return {
        ingredientId: parseInt(ingredientId, 10),
        amount: parseFloat(quantity),
        amountType: unit,
      };
    });

    // Create new recipe object
    const newRecipe = {
      name: recipeName,
      description,
      cookingTime: parseInt(cookingTime, 10),
      ingredients, // Include all ingredients
      isFavorite: false,
      isPopular: false,
    };

    try {
      await addRecipe(newRecipe);
      modalContainer.remove();
      window.location.reload();
    } catch (error) {
      throw new Error(error);
    }
  });
}
