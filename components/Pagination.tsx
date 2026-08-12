import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null;

  function pageHref(page: number) {
    return page === 1 ? "/" : `/page/${page}`;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-12"
      aria-label="ການແບ່ງໜ້າ"
    >
      {currentPage > 1 ? (
        <Link
          href={pageHref(currentPage - 1)}
          className="text-sm text-ink/70 border border-ink/15 rounded-full px-4 py-2 hover:border-gold/40 hover:text-gold transition-colors"
        >
          ← ກ່ອນໜ້າ
        </Link>
      ) : null}

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={pageHref(page)}
            className={`w-9 h-9 flex items-center justify-center text-sm rounded-full transition-colors ${
              page === currentPage
                ? "bg-gold text-paper font-medium"
                : "text-ink/70 hover:bg-gold/10 hover:text-gold"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link
          href={pageHref(currentPage + 1)}
          className="text-sm text-ink/70 border border-ink/15 rounded-full px-4 py-2 hover:border-gold/40 hover:text-gold transition-colors"
        >
          ຖັດໄປ →
        </Link>
      ) : null}
    </nav>
  );
}