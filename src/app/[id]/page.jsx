import Image from "next/image";
import React from "react";

async function getPost(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  return res.json();
}

export default async function Page({ params }) {
  const { id, title, body } = await getPost(params.id);
  return (
    <div className=" container mx-auto p-4 flex flex-col items-center text-center space-y-4">
      <div className="relative w-full h-96">
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h1 className="text-5xl mt-2">{title}</h1>
      <p>{body}</p>
    </div>
  );
}
