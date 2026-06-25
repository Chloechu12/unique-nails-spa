import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <nav
        className={cn(
          "px-4 h-25 fixed flex items-center top-0 left-0 right-0 z-30 bg-transparent transition-[background-color,border-color,box-shadow] duration-300",
          scrolled && "bg-[#171313]/90 shadow-md backdrop-blur-sm",
        )}
      >
        <div className="max-w-7xl mx-auto flex w-full items-center justify-between">
          <NavLink to="/" end aria-label="Home" className="shrink-0">
            <img
              src="/images/logoGold.PNG"
              alt=""
              className={cn(
                "h-30 w-30 rounded-full object-cover",
                !scrolled && "hidden",
              )}
            />
            <img
              src="/images/logoGold.PNG"
              alt=""
              className={cn(
                "h-30 w-30 rounded-full object-cover",
                scrolled && "hidden",
              )}
            />
          </NavLink>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative pb-1 tracking-wide transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 after:content-['']",
                    scrolled
                      ? isActive
                        ? "font-semibold bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent after:scale-x-100 after:bg-[#D4AF37]"
                        : "text-muted-foreground hover:text-[#D4AF37] after:scale-x-0 hover:after:scale-x-100"
                      : isActive
                        ? "font-semibold bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] after:scale-x-100 after:bg-[#D4AF37]"
                        : "text-white/65 hover:text-white after:scale-x-0 hover:after:scale-x-100",
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            type="button"
            className={cn("md:hidden text-white", scrolled && "text-white")}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="p-4 flex flex-col gap-4">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu
          </SheetDescription>
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-base font-medium transition-all duration-200",
                  isActive
                    ? "font-semibold bg-gradient-to-r from-[#F7E7A1] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent"
                    : "text-muted-foreground hover:text-[#D4AF37]",
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </SheetContent>
      </Sheet>
    </>
  );
}
