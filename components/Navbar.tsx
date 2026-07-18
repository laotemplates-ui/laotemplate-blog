"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import SearchModal from "@/components/SearchModal";

const navLinks = [
  { label: "ໜ້າຫຼັກ", href: "/" },
  { label: "ການຕະຫຼາດ", href: "/category/marketing" },
  { label: "SEO", href: "/category/seo" },
  { label: "ອອກແບບເວັບໄຊ", href: "/category/design" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 outline-none focus:outline-none focus:ring-0"
          >
            <Image
              src="/logo-horizontal.png"
              alt="Blog ລາວເທັມເພລດ"
              width={170}
              height={42}
              className="h-auto w-[170px]"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-gold font-medium"
                    : "text-ink/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-ink/70 hover:text-gold transition-colors p-1"
              aria-label="ຄົ້ນຫາບົດຄວາມ"
            >
              <Search size={20} />
            </button>

            
            <a  href="https://laotemplate.com"
              className="hidden md:inline-block text-sm font-medium text-paper bg-gold px-4 py-2 rounded-full hover:bg-gold/90 transition-colors"
            >
              ກັບຄືນເວັບຫຼັກ
            </a>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden text-ink p-1"
              aria-label={mobileOpen ? "ປິດເມນູ" : "ເປີດເມນູ"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="md:hidden border-t border-ink/10 bg-paper">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? "text-gold font-medium"
                      : "text-ink/70 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <a  href="https://laotemplate.com"
                className="text-sm font-medium text-paper bg-gold px-4 py-2 rounded-full hover:bg-gold/90 transition-colors text-center"
              >
                ກັບຄືນເວັບຫຼັກ
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}