import BlogCard from "@/components/BlogCard";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  return res.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div className="container mx-auto min-h-screen px-4 space-y-6">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
