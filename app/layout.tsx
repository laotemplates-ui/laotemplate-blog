import type { Metadata } from "next";
import { Noto_Serif_Lao, Noto_Sans_Lao } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}