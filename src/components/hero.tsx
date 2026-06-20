import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.JPG"
          alt="Nail Spa Hero Background"
          className="w-full h-full object-cover brightness-[0.8]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

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
  );
}

export default Hero;