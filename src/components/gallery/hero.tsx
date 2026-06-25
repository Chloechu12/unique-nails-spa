import { motion } from "framer-motion";

const overlayImages = [
  { src: "/images/ped1.JPG", alt: "Pedicure" },
  { src: "/images/nail1.PNG", alt: "Nail design" },
  { src: "/images/nail2.JPG", alt: "Nail design" },
  { src: "/images/nailcare.PNG", alt: "Manicure" },
  { src: "/images/IMG_3663.JPG", alt: "Salon" },
] as const;

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] overflow-hidden flex items-center justify-center"
      aria-label="Gallery Hero"
    >
      {/* Background (same as home hero) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.JPG"
          alt="Nail Spa Gallery Background"
          className="w-full h-full object-cover brightness-[0.8]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/70" />
      </div>

      {/* Center title */}
      <div className="relative z-10 text-center px-5">
        <motion.h1
          className="font-['Cormorant_Garamond',serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          Our Gallery
        </motion.h1>
        <motion.p
          className="mt-4 mx-auto max-w-2xl font-['Inter',sans-serif] text-base sm:text-lg font-light leading-relaxed text-white/75"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
        >
          A few moments of beauty—crafted with care, comfort, and shine.
        </motion.p>
      </div>

      {/* Moving overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="relative w-full h-full">
          {overlayImages.map((img, i) => {
            const positions = [
              { top: "16%", left: "10%" },
              { top: "10%", right: "8%" },
              { bottom: "20%", left: "12%" },
              { top: "42%", left: "58%" },
              { bottom: "16%", right: "10%" },
            ] as const;

            const pos = positions[i];

            return (
              <motion.div
                key={img.src}
                className="absolute"
                style={pos}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 7 + i * 1.2,
                  delay: i * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                animate={{
                  x: [0, i % 2 === 0 ? 18 : -18, 0],
                  y: [0, i % 2 === 0 ? -10 : 12, 0],
                  rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/10">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent z-0" />
    </section>
  );
}

