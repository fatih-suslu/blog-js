import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-500">
          Blog
        </Link>
        <Link href="/" className="text-2xl font-bold hover:text-blue-500">
          About
        </Link>
      </div>
    </header>
  );
}
