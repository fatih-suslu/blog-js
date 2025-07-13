import Link from "next/link";
import Image from "next/image";

export default function BlogCard() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 border rounded-lg hover:shadow-md transition-shadow"
    >
      <div className="w-24 h-24 relative">
        <Image
          className="object-cover rounded-lg"
          src="https://picsum.photos/id/1/200/300"
          alt="Blog Image"
          fill
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-2">Blog Title</h3>
        <p className="text-sm text-gray-600 line-clamp-2 ">
          Short description of the blog post.
        </p>
      </div>
    </Link>
  );
}
