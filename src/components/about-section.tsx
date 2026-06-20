import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#FAF8F5] py-20 md:py-28"
      aria-label="About us"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
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
  );
}

export default AboutSection;