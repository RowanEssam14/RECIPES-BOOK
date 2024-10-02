export default async function fetchIngredients() {
  const response = await fetch('http://localhost:3000/ingredients');
  const ingredients = await response.json();
  return ingredients;
}
