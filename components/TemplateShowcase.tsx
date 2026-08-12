import Image from "next/image";
import { featuredTemplates } from "@/lib/templates";

export default function TemplateShowcase() {
  return (
    <section className="border-t border-ink/10 bg-ink/[0.02]">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 py-16 2xl:py-20">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-4 py-1.5 rounded-full mb-4">
            Template ຂອງພວກເຮົາ
          </span>
          <h2 className="text-2xl 2xl:text-3xl font-lao-serif font-bold text-ink mb-3">
            ພ້ອມສ້າງເວັບໄຊທຸລະກິດຂອງທ່ານແລ້ວບໍ່?
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            ເລືອກ Template ອອກແບບໄວ້ລ່ວງໜ້າ ໂຫຼດໄວ, ໃຊ້ງານງ່າຍ ແລະ ຮອງຮັບພາສາລາວ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8 mb-10">
          {featuredTemplates.map((template) => (
            
            <a  key={template.name}
              href={template.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-paper border border-ink/10 rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-md transition-all"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                    src={template.image}
                    alt={template.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
              </div>
              <div className="p-5">
                <h3 className="font-lao-serif font-semibold text-ink group-hover:text-gold transition-colors mb-1">
                  {template.name}
                </h3>
                <p className="text-sm text-ink/50">{template.price}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          
          <a  href="https://laotemplate.com"
            className="inline-block text-sm font-medium text-paper bg-gold px-8 py-3 rounded-full hover:bg-gold/90 transition-colors"
          >
            ເບິ່ງ Template ທັງໝົດ
          </a>
        </div>
      </div>
    </section>
  );
}