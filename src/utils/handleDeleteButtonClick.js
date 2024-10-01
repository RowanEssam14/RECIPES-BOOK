import { DeleteModal, addDeleteModalEventListeners } from './createDeleteModal';

export default function handleDeleteButtonClick(deleteButton, recipeId) {
  deleteButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering any parent event, e.g., card click event
    const mainContentContainer = document.querySelector('.main-content');
    mainContentContainer.insertAdjacentHTML('beforeend', DeleteModal(recipeId));
    addDeleteModalEventListeners();

    const deleteModalContainer = document.querySelector('.delete-modal');
    deleteModalContainer.style.display = 'flex'; // Show the modal
  });
}
