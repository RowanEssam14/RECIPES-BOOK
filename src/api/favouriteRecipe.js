async function fetchRecipeById(id) {
  const response = await fetch(`http://localhost:3000/recipes/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch recipe with ID: ${id}`);
  }
  const recipe = await response.json();
  return recipe;
}

export default async function favouriteRecipe(id) {
  try {
    const recipe = await fetchRecipeById(id);
    recipe.isFavorite = !recipe.isFavorite;

    const updateResponse = await fetch(`http://localhost:3000/recipes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });

    if (!updateResponse.ok) {
      throw new Error(`Failed to update recipe with ID: ${id}`);
    }

    await updateResponse.json();
  } catch (error) {
    throw new Error(error);
  }
}
