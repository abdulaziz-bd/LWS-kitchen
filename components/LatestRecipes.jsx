import { getCategoryName } from "@/lib/db";
import Link from "next/link";

export default function LatestRecipes({ recipes }) {
  return (
    <section className="mb-16" id="latest-recipes">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {recipes.map((recipe, index) => (
          <Link
            key={index}
            href={`/${getCategoryName(recipe.category_id)}/${recipe.title}`}
          >
            <img
              src={`/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              width={100}
              height={300}
            />
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600">
              {getCategoryName(recipe.category_id)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
