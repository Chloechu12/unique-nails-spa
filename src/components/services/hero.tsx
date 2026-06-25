import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section
        className="relative h-screen overflow-hidden"
        aria-label="Services hero"
      >
        <div className="absolute inset-0">
          <img
            src="/images/bg.JPG"
            alt="Nail Spa Hero"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

        <div className="relative z-10 flex h-full items-center justify-center px-5">
          <div className="text-center text-amber-50">
            <motion.p
              className="mb-4 text-xs uppercase tracking-[0.4em]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Luxury Nail Spa
            </motion.p>

            <motion.h1
              className="font-['Cormorant_Garamond',serif] text-5xl font-light md:text-7xl lg:text-8xl bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] after:scale-x-100 after:bg-[#D4AF37]"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Services & Rituals
            </motion.h1>

            <motion.div
              className="mt-6 flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span>Home</span>
              <span>/</span>
              <span>Services</span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto fill-amber-50"
            preserveAspectRatio="none"
          >
            <path d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
