import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.JPG"
          alt="Nail Spa Hero Background"
          className="w-full h-full object-cover brightness-[0.8]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 text-center text-white space-y-8">
        <motion.h1
          className="font-['Cormorant_Garamond',serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] after:scale-x-100 after:bg-[#D4AF37] leading-none tracking-tight max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Relax, Refresh
          <br />
          <span className="bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] after:scale-x-100 after:bg-[#D4AF37]"> Shine</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-xl font-['Inter',sans-serif] text-base font-light leading-relaxed text-white/75 md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Where beauty, comfort, and self-care come together. Enjoy professional nail care in a relaxing and welcoming environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex items-center justify-center gap-4">
          <a
            href="#booking"
            className="px-8 py-4 rounded-full bg-stone-600 inline-flex items-center justify-center text-sm text-white shadow-md transition-all duration-300 hover:bg-stone-500 hover:shadow-lg"
          >
            Book Now
          </a>

          <Link
            to="/services"
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/40 group inline-flex items-center justify-center gap-2 text-sm text-white/90 shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/70 hover:text-white hover:shadow-lg"
          >
            Our Services
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section >
  );
}

export default Hero;