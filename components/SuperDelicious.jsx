import { getCategoryName } from "@/lib/db";
import { EmptyStar, FillStar } from "@/public/SVG";
import Image from "next/image";
import Link from "next/link";

export default function SuperDelicious({ recipes }) {
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <Link
            key={index}
            href={`/${getCategoryName(recipe.category_id)}/${recipe.title}`}
          >
            <Image
              src={`/thumbs/${recipe.thumbnail}`}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              width={100}
              height={300}
              alt={recipe.title}
            />
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <div className="flex items-center text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => {
                if (i < recipe.rating.average_rating) {
                  return <FillStar key={i} />;
                } else {
                  return <EmptyStar key={i} />;
                }
              })}
            </div>
            <p className="text-gray-600">{recipe.cooking_time}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
