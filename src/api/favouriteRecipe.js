export default async function favouriteRecipe(id, isFavorite) {
  const updateResponse = await fetch(`http://localhost:3000/recipes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isFavorite: !isFavorite }),
  });

  if (!updateResponse.ok) {
    throw new Error(`Failed to update recipe with ID: ${id}`);
  }

  await updateResponse.json();
}
