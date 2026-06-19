
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import {
  siteFacebookUrl,
  siteInstagramUrl,
  sitePhone,
  sitePhoneTel,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#171313] text-white p-6">
      <div className="flex w-full items-center justify-center md:justify-start relative top-50% right-50%">
        <img
          src="/images/logo.JPG"
          alt="logo"
          className="h-30 w-30 rounded-full object-cover"
        />
      </div>

      <div className="mt-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex justify-center gap-6"
        >
          <a
            href={siteFacebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#efe76f] transition-colors hover:text-neutral-400"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href={siteInstagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#efe76f] transition-colors hover:text-neutral-400"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href={`tel:${sitePhoneTel}`}
            className="font-['Inter',sans-serif] text-sm text-[#efe76f] transition-colors hover:text-white"
          >
            {sitePhone}
          </a>
        </motion.div>
      </div>

      <div className="mt-6 text-center text-xs text-[#efe76f]">
        © {new Date().getFullYear()} Unique Nails and Spa
      </div>
    </footer>
  );
}

