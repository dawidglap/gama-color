'use client';

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

export default function NavbarWrapper() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Link assoluti per funzionare da qualunque pagina
  const navItems = [
    { name: "Produkty",   link: "/produkty" },
    { name: "Realizacje", link: "/#realizacje" },
    { name: "Opinie",     link: "/#reviews" },
    { name: "O nas",      link: "/o-nas" },
     { name: "Jak mierzyć", link: "/jak-mierzyc" },
  ];

  return (
    <Navbar>
      {/* Desktop navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        {/* Desktop: pagina contatti */}
        <NavbarButton href="/kontakt">Kontakt</NavbarButton>
      </NavBody>

      {/* Mobile navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-600 text-xl font-bold"
              prefetch
            >
              {item.name}
            </Link>
          ))}

          <div className="flex w-full flex-col gap-4 pt-4">
            {/* Mobile: chiamata diretta */}
            <NavbarButton href="tel:+48598423534" className="w-full">
              Kontakt
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
