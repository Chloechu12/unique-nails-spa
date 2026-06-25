import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/ped1.JPG", alt: "Pedicure" },
  { src: "/images/nail1.PNG", alt: "Nail design" },
  { src: "/images/nail2.JPG", alt: "Nail design" },
  { src: "/images/nailcare.PNG", alt: "Manicure" },
  { src: "/images/room.HEIC", alt: "Salon room" },
  { src: "/images/IMG_3663.JPG", alt: "Salon" },
  { src: "/images/servicespage.jpg", alt: "Services" },
  { src: "/images/waxing.jpg", alt: "Waxing" },
  { src: "/images/bg.JPG", alt: "Beauty background" },
  { src: "/images/lash.webp", alt: "Lashes" },
] as const;

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-[#f3e3cd] py-14 md:py-20"
      aria-label="Gallery"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <p className="mb-3 font-['Inter',sans-serif] text-xs uppercase tracking-[0.25em] text-[#6b8a6b]">
            Gallery
          </p>
          <p className="font-['Cormorant_Garamond',serif] mb-3 text-xl font-light leading-tight text-[#1f1616] md:text-2xl">
            Real moments, real results
          </p>
          <div
            className="mb-10 h-0.5 w-14 bg-[#6b8a6b]/40 mx-auto"
            aria-hidden
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {galleryImages.map((img, idx) => (
            <motion.article
              key={img.src}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="aspect-square w-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

