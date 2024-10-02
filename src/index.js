import './index.css';
import { fetchRecipes, fetchIngredients } from './api';
import {
  AddRecipeModal,
  Sidebar,
  Recipes,
  addCardEventListeners,
  addNewIngredientEventListener,
  Header,
} from './components';
import { addCloseModalEventListener, handleRecipeFormSubmission } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.querySelector('#root');
  const mainContainer = document.querySelector('.main');
  const mainContentContainer = document.querySelector('.main-content');

  const ingredients = await fetchIngredients();
  const units = ['cup', 'piece', 'ounces', 'pound', 'tablespoon', 'cloves'];

  // Insert Sidebar and Header
  root.insertAdjacentHTML('afterbegin', Sidebar());
  mainContainer.insertAdjacentHTML('afterbegin', Header('RECIPES'));

  // Utility function to update header and content
  const updateMainContent = (title, content) => {
    document.querySelector('.main-header-title').textContent = title;
    mainContentContainer.innerHTML = content;
  };

  // Function to display recipes
  async function displayRecipes() {
    const popularRecipes = await fetchRecipes({ isPopular: true });
    const exploreRecipes = await fetchRecipes({ isPopular: false });
    const content = Recipes(popularRecipes, 'RECIPE OF THE DAY') + Recipes(exploreRecipes, 'EXPLORE RECIPES');
    updateMainContent('RECIPES', content);
    addCardEventListeners();
  }

  // Add Recipe Modal Event Listener
  document.querySelector('.button-add-recipe').addEventListener('click', () => {
    mainContentContainer.insertAdjacentHTML('beforeend', AddRecipeModal(ingredients, units));
    addCloseModalEventListener();
    addNewIngredientEventListener(ingredients, units);
    handleRecipeFormSubmission();
  });

  // Favourite Recipes Link Event Listener
  document.querySelector('.icon-favourite-recipes').addEventListener('click', async (event) => {
    event.preventDefault();
    const favouriteRecipes = await fetchRecipes({ isFavorite: true });
    updateMainContent('FAVOURITE RECIPES', Recipes(favouriteRecipes));
    addCardEventListeners();
  });

  // Recipes Icon Link Event Listener
  document.querySelector('.icon-recipes').addEventListener('click', (event) => {
    event.preventDefault();
    displayRecipes();
  });

  // Display recipes on initial load
  displayRecipes();
});
