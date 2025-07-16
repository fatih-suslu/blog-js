import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md mb-4 dark:bg-gray-900">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-500">
          Blog
        </Link>
        <Link
          href="https://github.com/fatih-suslu"
          target="__blank"
          className="text-2xl font-bold hover:text-blue-500"
        >
          About
        </Link>
      </div>
    </header>
  );
}
