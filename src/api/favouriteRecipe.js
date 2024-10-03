export default async function favouriteRecipe(id, isFavorite = false) {
  try {
    const updateResponse = await fetch(`http://localhost:3000/recipes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isFavorite }),
    });

    if (!updateResponse.ok) {
      throw new Error(`Failed to update recipe with ID: ${id}`);
    }

    const updatedRecipe = await updateResponse.json();
    return updatedRecipe;
  } catch (error) {
    throw error;
  }
}
