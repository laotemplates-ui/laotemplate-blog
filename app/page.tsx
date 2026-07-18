import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "ບົດຄວາມທັງໝົດ",
  description: "ບົດຄວາມ ແລະ ຄຳແນະນຳກ່ຽວກັບເວັບໄຊ ແລະ template ຈາກ laotemplate.com",
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-lao-serif font-bold mb-2 text-ink">
        ແຫຼ່ງລວມຄວາມຮູ້ສຳລັບທຸລະກິດລາວ
      </h1>
      <p className="text-ink/60 mb-12">
        ອັບເດດເທັກນິກການຕະຫຼາດ, SEO ແລະ ການອອກແບບເວັບໄຊ ເພື່ອເພີ່ມຍອດຂາຍໃຫ້ທຸລະກິດຂອງທ່ານ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}