export default async function fetchRecipes(isPopular) {
  try {
    const response = await fetch('http://localhost:3000/recipes');
    const recipes = await response.json();

    const popularRecipes = recipes.filter((recipe) => recipe.isPopular === isPopular);
    return popularRecipes;
  } catch (error) {
    throw new Error(error);
  }
}
