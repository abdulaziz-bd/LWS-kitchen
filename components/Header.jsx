import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            <Image
              src="/lws-kitchen.png"
              className="h-10"
              alt="lws-kitchen"
              width={100}
              height={10}
            />
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/#latest-recipes"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Latest Recipes
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
