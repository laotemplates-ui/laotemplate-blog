import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";
import { getCategorySlug } from "@/lib/categories";

export default function PostCard({ post }: { post: PostMeta }) {
  const categorySlug = post.category ? getCategorySlug(post.category) : undefined;

  return (
    <div className="group border border-ink/10 rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-md transition-all">
      <Link href={`/${post.slug}`} className="block">
        {post.image ? (
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : null}
      </Link>

      <div className="p-6">
        {post.category ? (
          categorySlug ? (
            <Link
              href={`/category/${categorySlug}`}
              className="relative z-10 inline-block text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full mb-3 hover:bg-gold/20 transition-colors"
            >
              {post.category}
            </Link>
          ) : (
            <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>
          )
        ) : null}

        <Link href={`/${post.slug}`} className="block">
          <p className="text-xs text-ink/40 mb-2">{post.date}</p>
          <h2 className="text-xl font-lao-serif font-semibold text-ink group-hover:text-gold transition-colors mb-2">
            {post.title}
          </h2>
          <p className="text-sm text-ink/70 line-clamp-3">
            {post.description}
          </p>
        </Link>
      </div>
    </div>
  );
}