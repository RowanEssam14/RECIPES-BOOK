async function fetchPopularRecipes() {
  try {
    const response = await fetch('http://localhost:3000/recipes');
    const recipes = await response.json();

    const popularRecipes = recipes.filter((recipe) => recipe.isPopular);
    return popularRecipes;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchExploreRecipes() {
  try {
    const response = await fetch('http://localhost:3000/recipes');
    const recipes = await response.json();

    const popularRecipes = recipes.filter((recipe) => !recipe.isPopular);
    return popularRecipes;
  } catch (error) {
    throw Error(error);
  }
}

export { fetchPopularRecipes, fetchExploreRecipes };
