import { getAllRecipes, getCategoryId } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage({ params: { categoryName } }) {
  const recipes = getAllRecipes();
  const categoryId = getCategoryId(categoryName);

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
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Desserts{" "}
            {categoryRecipes.length > 0 && (
              <span className="text-gray-500 text-2xl font-normal">
                ({categoryRecipes.length} Recipes)
              </span>
            )}
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryRecipes &&
          categoryRecipes.map((recipe, index) => (
            <Link
              href={`/${categoryName}/${recipe.title}`}
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                className="w-full h-48 object-cover"
                width={100}
                height={100}
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
              </div>
            </Link>
          ))}

        {categoryRecipes.length === 0 && (
          <div className="text-center text-gray-600">
            No recipes found for this category.
          </div>
        )}
      </div>
    </main>
  );
}
