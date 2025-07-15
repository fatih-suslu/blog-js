import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ title, body, id }) {
  return (
    <Link
      href={`/${id}`}
      className="flex items-center gap-4 border rounded-lg hover:shadow-md transition-shadow"
    >
      <div className="w-24 h-24 relative flex-shrink-0">
        <Image
          className="object-cover rounded-lg"
          src={`https://picsum.photos/200/300?random=${id}}`}
          alt="Blog Image"
          fill
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 ">{body}</p>
      </div>
    </Link>
  );
}
