export default function addCloseModalEventListener() {
  const closeModalButton = document.querySelector('.modal-close-button');

  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      closeModalButton.closest('.modal').remove();
    });
  }
}
