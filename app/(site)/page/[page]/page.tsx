import { getAllPosts, getPostsPage, POSTS_PER_PAGE } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ page: string }>;
};

export function generateStaticParams() {
  const totalPosts = getAllPosts().length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));

  // ໜ້າ 1 ຖືກຄຸມໂດຍ app/(site)/page.tsx ຢູ່ແລ້ວ, ສ້າງສະເພາະໜ້າ 2 ຂຶ້ນໄປ
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `ບົດຄວາມທັງໝົດ - ໜ້າ ${page}`,
  };
}

export default async function PostsListPage({ params }: Props) {
  const { page } = await params;
  const pageNum = Number(page);

  if (!Number.isInteger(pageNum) || pageNum < 2) {
    notFound();
  }

  const { posts, totalPages, currentPage } = getPostsPage(pageNum);

  if (pageNum > totalPages) {
    notFound();
  }

  return (
    <main className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-lao-serif font-bold text-ink mb-8">
        ບົດຄວາມທັງໝົດ — ໜ້າ {currentPage}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}