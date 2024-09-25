const recipeContainer = document.querySelector('.main-section-recipes');
const exploreRecipeContainer = document.querySelector('.main-section-explore');

function addRecipeCard(cardTemplate, recipe) {
  const card = cardTemplate; // added a local var. to prevent no-parameter re-assign eslint error
  card.querySelector('.card-title').textContent = recipe.name;
  const cardInfoElements = card.querySelectorAll('.card-list-info');
  cardInfoElements[0].textContent = `${recipe.ingredients.length} ingredients`;
  cardInfoElements[1].textContent = `${recipe.cookingTime} min.`;
}

// Fetch the popular recipes
async function fetchPopularRecipes() {
  try {
    const response = await fetch('http://localhost:3000/recipes');
    const recipes = await response.json();
    const popularRecipes = recipes.filter((recipe) => recipe.isPopular);
    recipeContainer.innerHTML = ''; // Clear any existing cards

    popularRecipes.forEach((recipe) => {
      const cardTemplate = document.querySelector('.card').cloneNode(true);
      addRecipeCard(cardTemplate, recipe);
      recipeContainer.appendChild(cardTemplate); // Append it to the container
    });
  } catch (error) {
    throw Error(error);
  }
}

async function fetchExploreRecipes() {
  try {
    const response = await fetch('http://localhost:3000/recipes');
    const recipes = await response.json();
    const popularRecipes = recipes.filter((recipe) => !recipe.isPopular);
    exploreRecipeContainer.innerHTML = ''; // Clear any existing cards

    popularRecipes.forEach((recipe) => {
      const cardTemplate = document.querySelector('.card').cloneNode(true);
      addRecipeCard(cardTemplate, recipe);
      exploreRecipeContainer.appendChild(cardTemplate); // Append it to the container
    });
  } catch (error) {
    throw Error(error);
  }
}

fetchPopularRecipes();
fetchExploreRecipes();

module.exports = { fetchPopularRecipes, fetchExploreRecipes };
