# Acceptance criteria

All styles and position of components you can see at Figma file inside project.

## Our application consist of 2 part

- Sidebar
- Content/Main page

## Sidebar has two links

- All recipes
    When click on this button we must see Main page
- Favorites recipes
    When click on this button we must see Favorite page

## Main page/Content

Main page consists of a few parts:

- Recipes of the day
- Explore recipes
- Add new recipe button

## Recipes of the day

- you must take it from server and render list of recipes of the day on the page (Look at special key or array)

## Explore recipes

- it takes also from server and render this list of explore recipes, but explore recipes (they aren't have special key or aren't in different array)

- Add new recipe button: must call “Adding recipe popup”
- When click on recipe card we must call “Recipe details drawer”

## Recipe details

***It must have next parts:***

- “close drawer” button. When click on it we close drawer
- when we click outside drawer we close drawer
- add image, title, description, list of ingredients, cooking time
- add “Add to favorite” button. When click on this button we send request to server and add current recipe to favorite list, and change color and background color of this button
- add “Edit” button. Clicking on this button must fire “Editing recipe popup” with corresponding functions
- add “Delete” button. Clicking on this button must fire “Delete popup” with corresponding functions
- If current recipe is in favorite list, add to “favorite button” have different color

## Single recipe card

- This card must include title, image, cooking time, count of ingredients
- add “Add to favorite” button. When click on this button we send request to server and add current recipe to favorite list, and change color and background color of this button
- add “Edit” button. Clicking on this button must fire “Editing recipe popup” with corresponding functions
- add “Delete” button. Clicking on this button must fire “Delete popup” with corresponding functions
- If current recipe is in favorite list, add to “favorite button” have different color
- Click on card must open “Recipe details” drawer

## Delete popup

- Must be fired by clicking on delete button
- Must have title and 3 buttons
- “Close button”. Close modal
- “Cancel button”. Also delete button
- “Yes, delete” button. Delete current recipe from server and our application. Deleted recipe mustn’t be in any list of recipe. After delete close popup

## Adding recipe popup

- This popup must appear after clicking on “Add new recipe” button
- Add ability to add Name, description, cooking time, ingredients (name, quantity of ingredients and cooking Measurements: kg, gr, ml, etc.)
- Get list of ingredients from the server
- Create constant with cooking Measurements in project and use it in this form
- Add “New ingredient” button. After clicking on this button appear new ingredient with empty field (look at Figma template)
- Add “Add new recipe” button. After clicking on it we send request to server with new recipe.  After success response close popup and add new recipe to Explore recipes list
- Add “Close button” click on it close popup

## Editing recipe popup

- This popup must appear after clicking on “edit recipe” button
- Add ability to change Name, description, cooking time, ingredients (name, quantity of ingredients and cooking Measurements: kg, gr, ml, etc.) of recipe
- This field must have corresponding value of current recipe
- Add “New ingredient” button. After clicking on this button appear new ingredient with empty field (look at Figma template)
- Add “delete ingredient” button. After clicking on this button delete ingredient
- Add “edit recipe” button. After clicking on it, we send request to server with edited recipe.  After success response close popup and add edited recipe to list of recipes

## Favorites recipe

- This page we must see after clicking on Favorites recipes button (Look at MainPage template)
- Render list of favorites recipes on this page
- Single recipe card must have “add to favorites” button with different color
- If user click on “add to favorites” on this page we send request on server delete this recipe from “favorites recipe” page. After success response “rerender” this page
