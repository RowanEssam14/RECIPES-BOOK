const overlay = document.querySelector('.overlay');
const closeOverlayButton = document.querySelector('.close-overlay');
const overlayTitle = document.querySelector('.overlay-title');
const overlayTime = document.querySelector('.overlay-time');
const overlayDescription = document.querySelector('.overlay-description');
const overlayIngredientsList = document.querySelector('.overlay-list');

closeOverlayButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

function showOverlay() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

async function fetchRecipeById(recipeId) {
  try {
    const response = await fetch(`http://localhost:3000/recipes/${recipeId}`);
    if (!response.ok) throw new Error('Recipe not found');
    const recipe = await response.json();
    return recipe;
  } catch (error) {
    throw Error(error);
  }
}

async function fetchIngredientById(ingredientId) {
  try {
    const response = await fetch(`http://localhost:3000/ingredients/${ingredientId}`);
    if (!response.ok) throw new Error('Ingredient not found');
    const ingredient = await response.json();
    return ingredient;
  } catch (error) {
    throw Error(error);
  }
}

async function displayRecipeInModal(recipeId) {
  const recipe = await fetchRecipeById(recipeId);
  if (recipe) {
    overlayTitle.textContent = recipe.name;
    overlayTime.textContent = `${recipe.cookingTime} min.`;
    overlayDescription.textContent = recipe.description;

    // Clear existing ingredients
    overlayIngredientsList.innerHTML = '';

    // Populate ingredients
    recipe.ingredients.forEach(async (ingredient) => {
      const ingredientDetails = await fetchIngredientById(ingredient.ingredientId);
      const listItem = document.createElement('li');
      listItem.classList.add('overlay-list-item');
      listItem.textContent = `${ingredient.amount} ${ingredient.amountType} of ${ingredientDetails.name}`;
      overlayIngredientsList.appendChild(listItem);
    });

    showOverlay();
  }
}

export default function addCardEventListeners() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', async () => {
      const recipeId = card.getAttribute('data-id');
      await displayRecipeInModal(recipeId);
    });
  });
}
