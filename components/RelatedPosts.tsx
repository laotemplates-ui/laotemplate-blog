import type { PostMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";

type Props = {
  posts: PostMeta[];
};

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 2xl:mt-20">
      <h2 className="text-xl 2xl:text-2xl font-lao-serif font-bold text-ink mb-6">
        ບົດຄວາມທີ່ກ່ຽວຂ້ອງ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}