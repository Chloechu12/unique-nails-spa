import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  openingHours,
  siteAddress,
  siteFacebookUrl,
  siteInstagramUrl,
  siteMapEmbedUrl,
  siteMapUrl,
  sitePhone,
  sitePhoneTel,
} from "@/data/site";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#171313] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr]">
          {/* Opening Hours */}
          <div>
            <h3 className="mb-5 font-['Inter',sans-serif] text-xs font-medium uppercase tracking-[0.15em] text-sage-light">
              Opening Hours
            </h3>

            <ul className="space-y-4 font-['Inter',sans-serif]">
              {openingHours.map(({ days, hours }) => (
                <li key={days} className="flex flex-col">
                  <span className="text-xs text-white/40">{days}</span>
                  <span className="text-sm text-white/75">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="mb-5 font-['Inter',sans-serif] text-xs font-medium uppercase tracking-[0.15em] text-sage-light">
              Find Us
            </h3>

            <address className="not-italic space-y-4 font-['Inter',sans-serif]">
              <a
                href={siteMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm  bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent underline decoration-white/40 underline-offset-4 transition-all hover:text-white hover:decoration-white"
              >
                {siteAddress}
              </a>

              <a
                href={`tel:${sitePhoneTel}`}
                className="block text-sm  bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent underline decoration-white/40 underline-offset-4 transition-all hover:text-white hover:decoration-white"
              >
                {sitePhone}
              </a>
            </address>
          </div>

          {/* Map */}
          <div>
            <h3 className="mb-5 font-['Inter',sans-serif] text-xs font-medium uppercase tracking-[0.15em] text-sage-light">
              Location
            </h3>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Location map"
                src={siteMapEmbedUrl}
                width="100%"
                height="240"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-6 sm:flex-row bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-['Inter',sans-serif] text-sm text-white/80 transition-colors duration-300 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={siteFacebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-2 bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent transition-all duration-300 hover:border-white hover:text-white"
            >
              <FaFacebookF size={14} className="text-[#B8860B]" />
            </a>

            <a
              href={siteInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-2  bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent transition-all duration-300 hover:border-white hover:text-white"
            >
              <FaInstagram size={14} className="text-[#B8860B]" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center font-['Inter',sans-serif] text-sm text-white/60">
            © {new Date().getFullYear()} Unique Nails Spa By Chloe
          </p>
        </div>
      </div>
    </footer>
  );
}