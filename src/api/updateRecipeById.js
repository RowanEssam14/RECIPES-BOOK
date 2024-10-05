export default async function updateRecipeById(recipeId, updatedRecipe) {
  try {
    const response = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    });

    if (!response.ok) {
      throw new Error('Failed to update recipe');
    }
  } catch (error) {
    throw new Error(error);
  }
}
