export default async function addRecipe(newRecipe) {
  try {
    const response = await fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });

    if (!response.ok) {
      throw new Error('Failed to add the recipe');
    }

    await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
