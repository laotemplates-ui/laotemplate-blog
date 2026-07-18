import type { Metadata } from "next";
import { Noto_Serif_Lao, Noto_Sans_Lao } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const notoSerifLao = Noto_Serif_Lao({
  subsets: ["lao"],
  weight: ["400", "700"],
  variable: "--font-lao-serif",
});

const notoSansLao = Noto_Sans_Lao({
  subsets: ["lao"],
  weight: ["400", "500", "700"],
  variable: "--font-lao-sans",
});

const siteUrl = "https://blog.laotemplate.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blog ລາວເທັມເພລດ | ແຫຼ່ງລວມຄວາມຮູ້ສຳລັບທຸລະກິດລາວ",
    template: "%s | ລາວເທັມເພລດ",
  },
  description:
    "ບົດຄວາມ ແລະ ຄຳແນະນຳກ່ຽວກັບການຕະຫຼາດ, SEO ແລະ ການອອກແບບເວັບໄຊ ເພື່ອຊ່ວຍໃຫ້ທຸລະກິດລາວເຕີບໃຫຍ່ອອນລາຍ.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Blog ລາວເທັມເພລດ | ແຫຼ່ງລວມຄວາມຮູ້ສຳລັບທຸລະກິດລາວ",
    description:
      "ບົດຄວາມ ແລະ ຄຳແນະນຳກ່ຽວກັບການຕະຫຼາດ, SEO ແລະ ການອອກແບບເວັບໄຊ ເພື່ອຊ່ວຍໃຫ້ທຸລະກິດລາວເຕີບໃຫຍ່ອອນລາຍ.",
    url: siteUrl,
    siteName: "ລາວເທັມເພລດ Blog",
    locale: "lo_LA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo" className={`${notoSerifLao.variable} ${notoSansLao.variable}`}>
      <body className="font-lao-sans bg-paper text-ink flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1">{children}</div>

        <footer className="border-t border-ink/10 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/50">
            <p>
              © {new Date().getFullYear()}{" "}
              
              <a  href="https://laotemplate.com"
                className="hover:text-gold transition-colors"
              >
                laotemplate.com
              </a>{" "}
              — ສ້າງໂດຍຄົນລາວ ສຳລັບຕະຫຼາດລາວ ແລະ ໂລກ 🇱🇦
            </p>

            <div className="flex items-center gap-5">
              {[
                { label: "Facebook", href: "https://facebook.com/laotemplate" },
                { label: "ຕິດຕໍ່ເຮົາ", href: "mailto:support@laotemplate.com" },
                { label: "ເວັບໄຊຫຼັກ", href: "https://laotemplate.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}