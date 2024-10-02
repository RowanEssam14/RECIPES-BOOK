import { deleteRecipe } from '../api';

function DeleteModal(recipeId) {
  return `
    <div class="modal delete-modal">
      <div class="modal-header">
        <button class="button modal-close-button" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2 class="modal-title">CONFIRMATION</h2>
        <p class="modal-content">
          Are you sure you want to delete this recipe?
        </p>
        <button class="button modal-button cancel-button">CANCEL</button>
        <button class="button modal-button delete-button" data-id="${recipeId}">
          YES, DELETE
        </button>
      </div>
    </div>
  `;
}

function addDeleteModalEventListeners() {
  const deleteModal = document.querySelector('.delete-modal');
  const closeButtons = deleteModal.querySelectorAll(' .modal-close-button, .cancel-button');

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      deleteModal.remove();
    });
  });

  // Event listener for the delete button
  const deleteButton = deleteModal.querySelector('.delete-button');
  if (deleteButton) {
    deleteButton.addEventListener('click', async () => {
      const recipeId = deleteButton.getAttribute('data-id'); // Get the recipeId
      try {
        await deleteRecipe(recipeId);
        deleteModal.remove();
        window.location.reload();
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}

export { addDeleteModalEventListeners, DeleteModal };
