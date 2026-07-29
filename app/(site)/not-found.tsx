import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 text-center">
      <p className="text-8xl font-lao-serif font-bold text-gold mb-4">404</p>
      <h1 className="text-2xl font-lao-serif font-bold text-ink mb-3">
        ບໍ່ພົບໜ້າທີ່ທ່ານກຳລັງຊອກຫາ
      </h1>
      <p className="text-ink/60 mb-10">
        ໜ້ານີ້ອາດຖືກຍ້າຍ, ລຶບອອກ, ຫຼື ລິ້ງທີ່ທ່ານກົດອາດພິມຜິດ
      </p>

      <div className="flex items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-block text-sm font-medium text-paper bg-gold px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
        >
          ກັບຄືນໜ້າຫຼັກ
        </Link>
        
        <a  href="https://laotemplate.com"
          className="inline-block text-sm font-medium text-ink border border-ink/15 px-6 py-3 rounded-full hover:border-gold/40 hover:text-gold transition-colors"
        >
          ໄປເວັບໄຊຫຼັກ
        </a>
      </div>
    </main>
  );
}