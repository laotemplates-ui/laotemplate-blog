// Mapping ລະຫວ່າງ slug (ພາສາອັງກິດ, ໃຊ້ໃນ URL) ກັບ label (ພາສາລາວ, ໃຊ້ໃນ frontmatter ແລະ ສະແດງຜົນ)
export const categories = [
  { slug: "marketing", label: "ການຕະຫຼາດ" },
  { slug: "seo", label: "SEO" },
  { slug: "design", label: "ອອກແບບເວັບໄຊ" },
] as const;

// slug → label (ໃຊ້ໃນໜ້າ category ເພື່ອຮູ້ວ່າຈະ filter ບົດຄວາມດ້ວຍຄ່າໃດ)
export function getCategoryLabel(slug: string): string | undefined {
  return categories.find((c) => c.slug === slug)?.label;
}

// label → slug (ໃຊ້ໃນ Badge ຂອງ post card ເພື່ອຮູ້ວ່າຈະລິ້ງໄປໜ້າໃດ)
export function getCategorySlug(label: string): string | undefined {
  return categories.find((c) => c.label === label)?.slug;
}

// ໃຊ້ໃນ generateStaticParams ຂອງໜ້າ category
export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}