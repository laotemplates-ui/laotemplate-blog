import { getAllPosts, getPostsPage } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import TemplateShowcase from "@/components/TemplateShowcase";

export const metadata = {
  title: "ບົດຄວາມທັງໝົດ",
  description: "ບົດຄວາມ ແລະ ຄຳແນະນຳກ່ຽວກັບເວັບໄຊ ແລະ template ຈາກ laotemplate.com",
};

export default function HomePage() {
  const totalPosts = getAllPosts().length;
  const { posts, totalPages, currentPage } = getPostsPage(1);

  return (
    <>
      <Hero postCount={totalPosts} />

      <main className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </main>

      <TemplateShowcase />
    </>
  );
}