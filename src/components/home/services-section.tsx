import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import type { ServiceType } from "@/data/services";
import { services } from "@/data/services";


const sectionIdByServiceType: Partial<Record<ServiceType, string>> = {
  Pedicure: "pedicure",
  Manicure: "manicure",
  "Additional Services": "additional-services",
  Waxing: "waxing",
  "Kid Menu (under 12)": "kid-menu",
  Acrylic: "acrylic",
  "Dipping Powder": "dipping-powder",
  "Builder Gel": "builder-gel",
  "Gel X": "gel-x",
};

const firstServiceByType = (type: ServiceType) =>
  services.find((s) => s.type === type);

const SERVICES_TYPES_TO_SHOW: ServiceType[] = ["Pedicure", "Manicure", "Waxing"];

const ServicesSection = () => {
  const tiles = SERVICES_TYPES_TO_SHOW.map((type) => {
    const item = firstServiceByType(type);
    if (!item) return null;
    const anchor = sectionIdByServiceType[type] ?? "services";

    return {
      item,
      to: `/services#${anchor}`,
    };
  }).filter(Boolean) as { item: (typeof services)[number]; to: string }[];

  return (
    <section
      id="services"
      className="bg-[#f3e3cd] py-20 md:py-28"
      aria-label="Services"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <p className="mb-3 font-['Inter',sans-serif] text-xs uppercase tracking-[0.25em] text-[#6b8a6b]">
            Our Services
          </p>
          <p className="font-['Cormorant_Garamond',serif] mb-3 text-xl font-light leading-tight text-[#1f1616] md:text-xl">
            What We Offer
          </p>
          <div
            className="mb-6 h-0.5 w-12 bg-[#6b8a6b]/40 mx-auto"
            aria-hidden
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiles.map(({ item, to }, index) => (
            <motion.div
              key={`${item.type}-${item.title}`}
              className="bg-red-50 rounded-xl border p-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            >
              <Link to={to}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 mb-2 text-xl font-semibold">{item.type}</h3>
                <p className="text-sm text-[#5c5c5c]">{item.title}</p>
                <p className="text-sm font-semibold text-[#1f1616]">{item.price}</p>
                <p className="text-xs text-[#5c5c5c] mt-2 whitespace-pre-line">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


