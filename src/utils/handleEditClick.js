import { fetchRecipeDetails, fetchIngredients } from '../api';
import EditRecipeModal from '../components/EditRecipeModal';
import addCloseModalEventListener from './handleModalButtons';
import { addNewIngredientEventListener } from '../components/AddRecipeModal';
import handleEditRecipeSubmit from './handleEditRecipeSubmit';

export default function handleEditClick(editButton, recipeId) {
  editButton.addEventListener('click', async (event) => {
    event.stopPropagation();
    const { recipe, ingredients } = await fetchRecipeDetails(recipeId);
    const allIngredients = await fetchIngredients();
    const units = ['cup', 'piece', 'ounces', 'pound', 'tablespoon', 'cloves'];

    const mainContentContainer = document.querySelector('.main-content');

    mainContentContainer.insertAdjacentHTML('beforeend', EditRecipeModal(recipe, allIngredients, units, ingredients));
    addCloseModalEventListener();
    addNewIngredientEventListener(allIngredients, units);

    const editForm = document.querySelector('.modal-form');
    handleEditRecipeSubmit(editForm, recipeId, allIngredients);
  });
}
