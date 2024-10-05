import { fetchRecipeDetails, fetchIngredients } from '../api';
import RecipeModal from '../components/RecipeModal';
import addCloseModalEventListener from './handleModalButtons';
import { addNewIngredientEventListener } from './forms/generateIngredientsList';
import handleEditRecipeSubmit from './handleEditRecipeSubmit';

export default function handleEditClick(editButton, recipeId) {
  editButton.addEventListener('click', async (event) => {
    event.stopPropagation();
    const { recipe, ingredients } = await fetchRecipeDetails(recipeId);
    const allIngredients = await fetchIngredients();
    const units = ['cup', 'piece', 'ounces', 'pound', 'tablespoon', 'cloves'];

    const mainContentContainer = document.querySelector('.main-content');
    mainContentContainer.insertAdjacentHTML('beforeend', RecipeModal(allIngredients, units, ingredients, recipe));
    addCloseModalEventListener();
    addNewIngredientEventListener(allIngredients, units);
    const editForm = document.querySelector('.modal-form');
    handleEditRecipeSubmit(editForm, recipeId, allIngredients);
  });
}
