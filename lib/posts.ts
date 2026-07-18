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
        date: data.date,
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
    date: data.date,
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