export default async function deleteRecipe(recipeId) {
  try {
    const response = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Error deleting recipe: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
