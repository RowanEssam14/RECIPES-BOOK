const overlay = document.querySelector('.overlay');

function showOverlay() {
  overlay.style.display = 'block';
  overlay.style.overflow = 'scroll';
  document.body.style.overflow = 'hidden';
}

// function closeOverlay() {
//   const closeButton = document.querySelector('.close-overlay');
//   closeButton.addEventListener('click', () => {
//     overlay.style.display = 'none';
//     document.body.style.overflow = 'auto'; // Re-enable scrolling for the body
//   });
// }

module.exports = { showOverlay };
