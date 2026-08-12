import Link from "next/link";
import { categories } from "@/lib/categories";

type Props = {
  postCount: number;
};

export default function Hero({ postCount }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
        <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-4 py-1.5 rounded-full mb-6">
          {postCount}+ ບົດຄວາມ ແລະ ນັບມື້ນັບຫຼາຍຂຶ້ນ
        </span>

        <h1 className="text-4xl md:text-5xl font-lao-serif font-bold text-ink mb-5 leading-tight">
          ແຫຼ່ງລວມຄວາມຮູ້ສຳລັບທຸລະກິດລາວ
        </h1>

        <p className="text-lg text-ink/60 max-w-2xl mx-auto mb-10">
          ອັບເດດເທັກນິກການຕະຫຼາດ, SEO ແລະ ການອອກແບບເວັບໄຊ
          ເພື່ອເພີ່ມຍອດຂາຍໃຫ້ທຸລະກິດຂອງທ່ານ
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="text-sm font-medium text-ink border border-ink/15 px-5 py-2.5 rounded-full hover:border-gold/40 hover:text-gold transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}