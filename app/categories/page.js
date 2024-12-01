import { getAllCategories } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/${category.name}`}
            className="text-center"
          >
            <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
              <Image
                src={category.image}
                alt={category.name}
                className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
