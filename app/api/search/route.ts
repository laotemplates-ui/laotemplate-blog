import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

// ບອກ Next.js ໃຫ້ generate ໄຟລ໌ນີ້ເປັນ static JSON ຕອນ build (ບໍ່ແມ່ນ query ທຸກຄັ້ງທີ່ request)
export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const searchIndex = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
  }));

  return NextResponse.json(searchIndex);
}