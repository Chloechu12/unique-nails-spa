import { Button } from "@/components/ui/button";
import { SERVICE_TYPES, services, type ServiceType } from "@/data/services";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const SERVICE_TYPES_FILTER_OPTIONS = ["All", ...SERVICE_TYPES];

type ServiceTypeFilterOption = (typeof SERVICE_TYPES_FILTER_OPTIONS)[number];

const anchorIdByServiceType: Partial<Record<ServiceType, string>> = {
  Pedicure: "pedicure",
  Manicure: "manicure",
  Acrylic: "acrylic",
  "Dipping Powder": "dipping-powder",
  "Builder Gel": "builder-gel",
  "Gel X": "gel-x",
  "Additional Services": "additional-services",
  "Kid Menu (under 12)": "kid-menu",
  Waxing: "waxing",
};

const ServicesSection = () => {
  const [filterOption, setFilterOption] =
    useState<ServiceTypeFilterOption>("All");

  const filteredList = useMemo(
    () =>
      filterOption === "All"
        ? services
        : services.filter((s) => s.type === filterOption),
    [filterOption],
  );

  return (
    <section
      className="bg-gray-800 py-16 md:py-24"
      aria-label="Service listings"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 space-y-8">
        <div className="scrollbar-none flex items-center gap-2 overflow-x-auto">
          {SERVICE_TYPES_FILTER_OPTIONS.map((option) => (
            <Button
              key={option}
              type="button"
              variant={filterOption === option ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterOption(option)}
              className="shrink-0 whitespace-nowrap rounded-full"
            >
              {option}
            </Button>
          ))}
        </div>

        {/* Anchors for home section links */}
        {SERVICE_TYPES_FILTER_OPTIONS.filter((o) => o !== "All").map((t) => (
          <div
            key={t}
            id={anchorIdByServiceType[t as ServiceType]}
            className="scroll-mt-24"
          />
        ))}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredList.map((service, i) => (
            <motion.div
              key={`${service.type}-${service.title}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: i * 0.03,
              }}
              className="rounded-2xl border border-[rgba(138,158,138,0.1)] bg-amber-50 p-5 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2 border-b border-[rgba(138,158,138,0.12)] pb-3">
                <span className="rounded-full border border-transparent bg-[rgba(250,248,245,0.9)] px-2.5 py-1 font-['Inter',sans-serif] text-[10px] font-medium uppercase tracking-wider text-sage-dark backdrop-blur-[6px]">
                  {service.type}
                </span>
                <span className="flex-1" />
                <span className="font-['Cormorant_Garamond',serif] text-base font-medium text-sage-dark">
                  {service.price}
                </span>
              </div>

              <h2 className="mb-2.5 font-['Cormorant_Garamond',serif] text-xl font-medium leading-tight text-charcoal">
                {service.title}
              </h2>

              <div className="whitespace-pre-line">
                <p className="font-['Inter',sans-serif] text-xs leading-relaxed text-warm-gray">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServicesSection;
