export default function Sidebar() {
  return `
    <div class="sidebar">
      <aside class="nav">
        <ul class="nav-list list">
          <li class="nav-item">
            <span class="visually-hidden">All Recipes</span>
            <a href="#" class="nav-link">
              <span class="nav-icon icon icon-recipes"></span>
            </a>
          </li>
          <li class="nav-item">
            <span class="visually-hidden">Favourite Recipes</span>
            <a href="#" class="nav-link">
              <span class="nav-icon icon icon-favourite-recipes"></span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  `;
}
