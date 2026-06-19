import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <nav
        className={cn(
          "px-4 h-20 flex items-center fixed top-0 left-0 right-0 z-30 bg-transparent text-white text-2xl font-bold transition-[background-color,border-color,box-shadow] duration-300",
          scrolled && "bg-white/80 shadow-sm backdrop-blur-sm text-black",
        )}
      >
        <div className="flex w-full items-center justify-center md:justify-start relative">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-20 w-20 rounded-full object-cover"
          />
          {/* <div>
              <span className="font-['Cormorant_Garamond',serif] text-black text-2xl leading-none tracking-wide text-charcoal">
                Unique
              </span>
              <span className="mt-0.5 block font-['Inter',sans-serif] text-black text-xs font-light uppercase leading-none tracking-[0.2em] text-warm-gray">
                Nail Spa at Pearland
              </span>
            </div> */}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map(({ to, label }) => {
                const isActive = location.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    className={cn(
                      "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:content-[''] after:bg-current after:transition-transform after:duration-300 after:origin-left",
                      isActive
                        ? "text-muted after:scale-x-100"
                        : "text-foreground after:scale-x-0 hover:after:scale-x-100"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                )
              })}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          type="button"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </nav>

      {/* Mobile Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="p-4 flex flex-col gap-4">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="hover:text-neutral-400 hover:underline after::content"
            >
              {label}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </>
  );
}
