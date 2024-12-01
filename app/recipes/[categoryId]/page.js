import { getAllRecipes, getCategoryName } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default function RecipesPage({ params: { categoryId } }) {
  const recipes = getAllRecipes();

  const groupedRecipes = recipes.reduce((acc, recipe) => {
    const category = recipe.category_id;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(recipe);
    return acc;
  }, {});

  const categoryRecipes = groupedRecipes[categoryId] || [];

  return (
    <main class="container mx-auto px-4 py-8 mt-[100px]">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-4xl font-bold mb-2">
            Desserts{" "}
            {categoryRecipes.length > 0 && (
              <span class="text-gray-500 text-2xl font-normal">
                ({categoryRecipes.length} Recipes)
              </span>
            )}
          </h1>
          <p class="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryRecipes &&
          categoryRecipes.map((recipe, index) => (
            <Link
              href={`/${getCategoryName(recipe.category_id)}/${recipe.title}`}
              key={index}
              class="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                class="w-full h-48 object-cover"
                width={100}
                height={100}
              />
              <div class="p-4">
                <h2 class="font-semibold text-lg mb-2">{recipe.title}</h2>
              </div>
            </Link>
          ))}

        {categoryRecipes.length === 0 && (
          <div class="text-center text-gray-600">
            No recipes found for this category.
          </div>
        )}
      </div>
    </main>
  );
}
