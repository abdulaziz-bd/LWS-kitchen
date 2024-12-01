import Image from "next/image";
import Link from "next/link";

export default function PopularCategories({ categories }) {
  const topCategories = categories.slice(0, 6);
  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <a href="./category.html" className="text-orange-500">
          View All
        </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {topCategories.map((category) => (
          <Link
            key={category.id}
            href={`/recipes/${category.id}`}
            class="cursor-pointer text-center group"
          >
            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
              <Image
                src={category.image}
                alt="Chocolate"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={100}
                height={100}
              />
            </div>
            <p class="transition-transform duration-300 group-hover:scale-105">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
