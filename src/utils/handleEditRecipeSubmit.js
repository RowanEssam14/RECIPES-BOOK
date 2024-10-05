import { updateRecipeById } from '../api';

export default function handleEditRecipeSubmit(form, recipeId) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get form values
    const name = document.querySelector('#recipe-name').value;
    const description = document.querySelector('#description').value;
    const cookingTime = document.querySelector('#cooking-time').value;

    // Gather the ingredients from the form
    const ingredients = Array.from(document.querySelectorAll('.ingredients-form-group')).map((group) => {
      const index = group.getAttribute('data-index');
      const ingredientId = document.querySelector(`#ingredients-${index}`).value;
      const amount = document.querySelector(`#quantity-${index}`).value;
      const amountType = document.querySelector(`#unit-${index}`).value;

      return {
        ingredientId: parseInt(ingredientId, 10), // Added radix 10 here
        amount: parseFloat(amount),
        amountType,
      };
    });

    // Prepare the data for the PATCH request
    const updatedRecipe = {
      name,
      description,
      cookingTime: parseInt(cookingTime, 10), // Added radix 10 here
      ingredients,
    };

    // Send the PATCH request to update the recipe
    try {
      await updateRecipeById(recipeId, updatedRecipe);
      document.querySelector('.editRecipe-modal').remove();
    } catch (error) {
      throw new Error(error);
    }
  });
}
