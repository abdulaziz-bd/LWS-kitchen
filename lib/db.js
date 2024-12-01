const fs = require("fs");
const path = require("path");

const recipesDirectory = path.join(process.cwd(), "data/recipes.json");

const recipesCategoriesDirectory = path.join(
  process.cwd(),
  "data/categories.json"
);

export function getAllRecipes() {
  const fileContents = fs.readFileSync(recipesDirectory, "utf8");
  const recipes = JSON.parse(fileContents);
  return recipes;
}

export function getAllCategories() {
  const fileContents = fs.readFileSync(recipesCategoriesDirectory, "utf8");
  const categories = JSON.parse(fileContents);
  return categories;
}

export function getRecipeByName(name) {
  const fileContents = fs.readFileSync(recipesDirectory, "utf8");
  const recipes = JSON.parse(fileContents);
  return recipes.find((recipe) => encodeURI(recipe.title) === name);
}

export function getCategoryName(categoryId) {
  const categories = getAllCategories();
  const category = categories.find((category) => category.id === categoryId);
  return category?.name;
}

export const getCategoryId = (categoryName) => {
  const categories = getAllCategories();
  const category = categories.find(
    (category) => category.name === categoryName
  );
  return category?.id;
};
