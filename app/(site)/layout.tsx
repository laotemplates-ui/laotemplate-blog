import Navbar from "@/components/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <footer className="border-t border-ink/10 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/50">
          {/* ... ເນື້ອຫາ footer ເກົ່າຈາກ app/layout.tsx ... */}
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
        </div>
      </footer>
    </>
  );
}