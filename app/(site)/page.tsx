import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";

export const metadata = {
  title: "ບົດຄວາມທັງໝົດ",
  description: "ບົດຄວາມ ແລະ ຄຳແນະນຳກ່ຽວກັບເວັບໄຊ ແລະ template ຈາກ laotemplate.com",
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero postCount={posts.length} />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}