export default function Header(title) {
  return `
     <header class="main-header">
          <h1 class="main-header-title title">${title}</h1>
          <button type="button" class="button button-add-recipe">+ ADD NEW RECIPE</button>
        </header>
  `;
}
