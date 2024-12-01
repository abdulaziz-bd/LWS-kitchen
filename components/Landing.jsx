import { getAllCategories, getAllRecipes } from "@/lib/db";
import HandPickedCollections from "./HandPickedCollections";
import Hero from "./Hero";
import LatestRecipes from "./LatestRecipes";
import PopularCategories from "./PopularCategories";
import SuperDelicious from "./SuperDelicious";

export default function Landing() {
  const recipes = getAllRecipes();
  const categories = getAllCategories();

  const topRecipes = recipes.filter(
    (recipe) => recipe.rating.average_rating > 4
  );

  const randomHeroRecipe =
    topRecipes[Math.floor(Math.random() * topRecipes.length)];

  const superDeliciousRecipes = recipes
    .sort((a, b) => b.rating.rating_count - a.rating.rating_count)
    .slice(0, 3);

  const groupedRecipes = recipes.reduce((acc, recipe) => {
    const category = recipe.category_id;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(recipe);
    return acc;
  }, {});

  const sortedCategories = categories.sort((a, b) => {
    const aCount = groupedRecipes[a.id] ? groupedRecipes[a.id].length : 0;
    const bCount = groupedRecipes[b.id] ? groupedRecipes[b.id].length : 0;
    return bCount - aCount;
  });

  const sortedTopTwoRecipes = topRecipes
    .sort((a, b) => b.rating.average_rating - a.rating.average_rating)
    .slice(0, 2);

  const latestRecipes = recipes
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 4);

  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <Hero topRatedRecipe={randomHeroRecipe} />

      <SuperDelicious recipes={superDeliciousRecipes} />

      <PopularCategories categories={sortedCategories} />

      <section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
        <p className="text-gray-600 mb-4">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow px-4 py-2 rounded-full"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
          >
            Join
          </button>
        </form>
      </section>

      <HandPickedCollections recipes={sortedTopTwoRecipes} />

      <LatestRecipes recipes={latestRecipes} />
    </main>
  );
}
