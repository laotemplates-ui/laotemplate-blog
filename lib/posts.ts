import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  image?: string;
};

export type Post = PostMeta & {
  content: string;
};

// ແປງ date ໃຫ້ເປັນ string ຮູບແບບ "YYYY-MM-DD" ສະເໝີ
// ຮອງຮັບທັງກໍລະນີ frontmatter ໃສ່ວົງຢືມ (string) ແລະ ບໍ່ໃສ່ວົງຢືມ (Date object ຈາກ YAML)
function normalizeDate(rawDate: unknown): string {
  if (rawDate instanceof Date) {
    return rawDate.toISOString().split("T")[0];
  }
  return String(rawDate);
}

// ດຶງລາຍຊື່ບົດຄວາມທັງໝົດ (ໃຊ້ໃນໜ້າ list) — ຮຽງລຳດັບຕາມວັນທີໃໝ່ສຸດກ່ອນ
export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: normalizeDate(data.date),
        description: data.description,
        category: data.category,
        image: data.image,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ດຶງລາຍຊື່ slug ທັງໝົດ (ໃຊ້ໃນ generateStaticParams)
export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

// ດຶງບົດຄວາມອັນດຽວແບບເຕັມ (ໃຊ້ໃນໜ້າອ່ານບົດຄວາມ)
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: normalizeDate(data.date),
    description: data.description,
    category: data.category,
    image: data.image,
    content,
  };
}

const laoMonths = [
  "ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ",
  "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ",
];

// ແປງວັນທີຮູບແບບ ISO (ຈາກ frontmatter) ໃຫ້ເປັນຮູບແບບພາສາລາວ ໃຊ້ສະແດງຜົນເທົ່ານັ້ນ
// ຕົວຢ່າງ: "2026-07-01" → "1 ກໍລະກົດ 2026"
export function formatLaoDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = laoMonths[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

// --- ເພີ່ມໃໝ່: ລະບົບແບ່ງໜ້າ (Pagination) ---
export const POSTS_PER_PAGE = 9;

export function getPostsPage(page: number, perPage: number = POSTS_PER_PAGE) {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    posts: allPosts.slice(start, start + perPage),
    totalPages,
    currentPage,
    totalPosts,
  };
}

// ==========================================
// --- ຟັງຊັນໃໝ່ທີ່ເພີ່ມເຂົ້າມາ ---
// ==========================================

// ຄິດໄລ່ເວລາອ່ານໂດຍປະມານ (ນາທີ) ຈາກຄວາມຍາວເນື້ອຫາ
export function getReadingTime(content: string): number {
  const plainText = content
    .replace(/```[\s\S]*?```/g, "") // ຕັດ code block ອອກ (ບໍ່ນັບເປັນເນື້ອຫາອ່ານ)
    .replace(/`[^`]*`/g, "") // ຕັດ inline code
    .replace(/!\[.*?\]\(.*?\)/g, "") // ຕັດ markdown image syntax
    .replace(/\[.*?\]\(.*?\)/g, "") // ຕັດ markdown link syntax
    .replace(/[#>*_~-]/g, "") // ຕັດເຄື່ອງໝາຍ Markdown
    .trim();

  const CHARS_PER_MINUTE = 500; // ຄວາມໄວອ່ານພາສາລາວໂດຍປະມານ
  const minutes = Math.ceil(plainText.length / CHARS_PER_MINUTE);
  return Math.max(1, minutes);
}

// ດຶງບົດຄວາມທີ່ກ່ຽວຂ້ອງ (ໝວດໝູ່ດຽວກັນ, ບໍ່ນັບບົດຄວາມປັດຈຸບັນ)
export function getRelatedPosts(
  currentSlug: string,
  category: string | undefined,
  limit: number = 3
): PostMeta[] {
  if (!category) return [];

  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}