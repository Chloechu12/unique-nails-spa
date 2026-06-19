import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        aria-label="Hero Section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg.JPG"
            alt="Nail Spa Hero Background"
            className="w-full h-full object-cover brightness-[0.8]"
            loading="eager"
          />

          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <p className="text-5xl font-['Cormorant_Garamond',serif] mb-5 font-light">
            Relax, Refresh & <br />
            <em className="text-6xl italic text-rose-dark">Shine</em>
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#booking"
              className="rounded-full font-semibold transition-[background-color, text-color] duration-300 hover:bg-white px-6 py-3 text-white hover:text-black bg-transparent border"
            >
              Book Now
            </a>

            <Link
              to="/services"
              className="flex items-center gap-2 rounded-full font-semibold transition-[background-color, text-color] duration-300 hover:bg-white px-6 py-3 text-white hover:text-black bg-transparent border"
            >
              Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="bg-[#FAF8F5] py-20 md:py-28"
        aria-label="About us"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image collage */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/images/IMG_3663.JPG"
                  alt="pedicure design"
                  className="h-56 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/nail1.PNG"
                  alt="nail art design"
                  className="mt-8 h-56 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/nail2.JPG"
                  alt="nail art design basic"
                  className="h-44 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/ped1.JPG"
                  alt="pedicure design"
                  className="h-44 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
            >
              <p className="mb-3 font-['Inter',sans-serif] text-xs uppercase tracking-[0.25em] text-[#6b8a6b]">
                Our Story
              </p>
              <p className="font-['Cormorant_Garamond',serif] mb-3 text-xs font-light leading-tight text-[#1f1616] md:text-xs">
                For Your Youthfull Look & Beautiful Nails <br />
                <em className="italic text-[#a07060]">from Passion</em>
              </p>
              <div className="mb-6 h-0.5 w-12 bg-[#6b8a6b]/40" aria-hidden />
              <p className="mb-4 font-['Inter',sans-serif] text-sm leading-relaxed text-[#5c5c5c]">
                At Unique Nails Spa you can find a highly motivated and trained
                team of therapists to provide you with a welcoming atmosphere of
                relaxation and a first class service not only the first time,
                but every time. We aim to combine excellent treatments carried
                out in a relaxing environment by the best therapists using the
                best products. We also offer a variety of spa treatments
                alongside beauty maintenance and nail services.
              </p>
              <p className="mb-4 font-['Inter',sans-serif] text-sm leading-relaxed text-[#5c5c5c]">
                Unique Nails Spa goal is to serve our customers with services
                that beyond expectation and to offer the best results that
                deliver. All in a relaxing, comfort, honest and loving
                environment.
              </p>
              <p className="mb-8 font-['Inter',sans-serif] text-sm leading-relaxed text-[#5c5c5c]">
                If you are looking for the nail salon that can bring you
                satisfaction in perfect manicure and pedicure, nail extensions
                or nail arts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* service */}
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

          {/* Service cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}

            <motion.div
              className="bg-red-50 rounded-xl border p-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/services">
                <img
                  src="/images/nailcare.PNG"
                  alt="Nail Care"
                  className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
                  loading="lazy"
                />

                <h3 className="mt-4 mb-2 text-xl font-semibold">Nail Care</h3>

                <p className="text-sm text-[#5c5c5c]">
                  From classic elegance to creative nail designs, our manicure
                  and pedicure services provide the perfect touch of beauty and
                  relaxation.
                </p>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-red-50 rounded-xl border p-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link to="/services">
                <img
                  src="/images/lash.webp"
                  alt="Lash Services"
                  className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 mb-2 text-xl font-semibold">
                  Lash Services
                </h3>
                <p className="text-sm text-[#5c5c5c]">
                  Enhance your natural beauty with our expert lash services,
                  designed to make you feel confident and beautiful.
                </p>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-red-50 rounded-xl border p-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link to="/services">
                <img
                  src="/images/waxing.jpg"
                  alt="Waxing"
                  className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
                  loading="lazy"
                />
                <h3 className="mb-2 text-xl font-semibold">Waxing</h3>
                <p className="text-sm text-[#5c5c5c]">
                  Achieve smooth, hair-free skin with our professional waxing
                  services.
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
