export default async function fetchRecipes({ isPopular = null, isFavorite = null } = {}) {
  try {
    const response = await fetch('http://localhost:3000/recipes');
    const recipes = await response.json();

    // Filter recipes based on isPopular or isFavorite
    if (isPopular !== null) {
      return recipes.filter((recipe) => recipe.isPopular === isPopular);
    }
    if (isFavorite !== null) {
      return recipes.filter((recipe) => recipe.isFavorite === isFavorite);
    }

    // If neither filter is provided, return all recipes
    return recipes;
  } catch (error) {
    throw new Error(error);
  }
}
