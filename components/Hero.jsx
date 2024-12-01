import { getCategoryName } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function Hero({ topRatedRecipe }) {
  const categoryName = await getCategoryName(topRatedRecipe.category_id);
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/thumbs/${topRatedRecipe.thumbnail}`}
            alt="Mighty Super Cheesecake"
            className="w-full h-[450px] object-cover rounded-lg"
            width={100}
            height="450"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{topRatedRecipe.title}</h1>
          <p className="text-gray-600 mb-4 line-clamp-6">
            {topRatedRecipe.description}
          </p>
          <Link
            href={`/${categoryName}/${topRatedRecipe.title}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
