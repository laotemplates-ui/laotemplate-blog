"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search, X } from "lucide-react";

type SearchItem = {
  slug: string;
  title: string;
  description: string;
  category?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: Props) {
  const [posts, setPosts] = useState<SearchItem[]>([]);
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(false);

  // ດຶງ search index ຄັ້ງດຽວ ຕອນເປີດ modal ຄັ້ງທຳອິດ (lazy load, ບໍ່ໂຫຼດຕັ້ງແຕ່ໜ້າ page load)
  useEffect(() => {
    if (isOpen && !loaded) {
      fetch("/api/search")
        .then((res) => res.json())
        .then((data: SearchItem[]) => {
          setPosts(data);
          setLoaded(true);
        })
        .catch(() => setLoaded(true));
    }
  }, [isOpen, loaded]);

  // ປິດດ້ວຍປຸ່ມ Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  // ລ້າງຄຳຄົ້ນຫາທຸກຄັ້ງທີ່ modal ປິດ
  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ["title", "description"],
        threshold: 0.35,
      }),
    [posts]
  );

  const results = query.trim()
    ? fuse.search(query).map((r) => r.item).slice(0, 8)
    : [];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
      onClick={onClose}
    >
      <div
        className="bg-paper rounded-2xl shadow-xl w-full max-w-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-ink/10 px-5 py-4">
          <Search size={20} className="text-ink/40 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ຄົ້ນຫາບົດຄວາມ..."
            className="flex-1 bg-transparent outline-none text-ink placeholder:text-ink/40 font-lao-sans"
          />
          <button
            onClick={onClose}
            className="text-ink/40 hover:text-gold transition-colors shrink-0"
            aria-label="ປິດ"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {!loaded ? (
            <p className="px-5 py-6 text-sm text-ink/50">ກຳລັງໂຫຼດ...</p>
          ) : query.trim() && results.length === 0 ? (
            <p className="px-5 py-6 text-sm text-ink/50">
              ບໍ່ພົບບົດຄວາມທີ່ກ່ຽວຂ້ອງກັບ &quot;{query}&quot;
            </p>
          ) : (
            results.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                onClick={onClose}
                className="block px-5 py-4 hover:bg-gold/5 transition-colors border-b border-ink/5 last:border-0"
              >
                {item.category ? (
                  <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full mb-1.5">
                    {item.category}
                  </span>
                ) : null}
                <p className="font-lao-serif font-semibold text-ink">
                  {item.title}
                </p>
                <p className="text-sm text-ink/60 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}