async function fetchRecipeById(recipeId) {
  try {
    const response = await fetch(`http://localhost:3000/recipes/${recipeId}`);
    if (!response.ok) throw new Error('Recipe not found');
    const recipe = await response.json();
    return recipe;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchIngredientById(ingredientId) {
  try {
    const response = await fetch(`http://localhost:3000/ingredients/${ingredientId}`);
    if (!response.ok) throw new Error('Ingredient not found');
    const ingredient = await response.json();
    return ingredient;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function fetchRecipeDetails(recipeId) {
  const recipe = await fetchRecipeById(recipeId);

  const ingredientPromises = recipe.ingredients.map(async (ingredient) => {
    const ingredientDetails = await fetchIngredientById(ingredient.ingredientId);
    return {
      amount: ingredient.amount,
      amountType: ingredient.amountType,
      name: ingredientDetails.name,
    };
  });
  const ingredients = await Promise.all(ingredientPromises);

  return { recipe, ingredients };
}
