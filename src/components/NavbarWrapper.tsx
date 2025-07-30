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

import { useState } from "react";

export default function NavbarWrapper() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "O nas", link: "#about" },
    { name: "Produkty", link: "#products" },
    { name: "Realizacje", link: "#realizacje" },
    { name: "Kontakt", link: "#contact" },
  ];

  return (
    <Navbar>
      {/* Desktop navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="#contact">Kontakt</NavbarButton>
      </NavBody>

      {/* Mobile navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-600 text-xl font-bold"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 pt-4">
            <NavbarButton variant="primary" className="w-full">
              Kontakt
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
