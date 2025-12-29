"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      name: "OFFRES",
      href: "/offre.php",
      children: [
        {
          name: "Téléphonie",
          href: "#",
          children: [
            { name: "Fixe VoiP - SIP", href: "/sip_voip.php" },
            { name: "Hébérgée", href: "/sip_hebergee.php" },
            { name: "Unifiée", href: "/sip_unifiee.php" },
          ],
        },
        {
          name: "Internet",
          href: "#",
          children: [
            { name: "xDSL", href: "/net_xdsl.php" },
            { name: "Fibre", href: "/net_fibre.php" },
            { name: "VPN", href: "/net_vpn.php" },
          ],
        },
        {
          name: "Équipements",
          href: "#",
          children: [
            { name: "PBX - Standard", href: "/equipement_pbx.php" },
            { name: "Santé", href: "/equipement_sante.php" },
            { name: "Centre d'appel", href: "/equipement_call.php" },
          ],
        },
        { name: "Sécurité", href: "/securite.php" },
        { name: "Mobile", href: "/mobile.php" },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions.php",
      children: [
        { name: "Fibre", href: "/solution_fibre.php" },
        { name: "WiFi", href: "/solution_wifi.php" },
        { name: "Studio musical", href: "/solution_studio.php" },
        { name: "Supervision", href: "/solution_extranet.php" },
      ],
    },
    { name: "Audit", href: "/audit.php" },
    { name: "RELATION CLIENTS", href: "/relation_clients.php" },
    {
      name: "T-LINK",
      href: "/javascript:;",
      children: [
        { name: "La société", href: "/societe.php" },
        { name: "Nos partenaires", href: "/partenaires.php" },
        { name: "Engagements et valeurs", href: "/engagements.php" },
      ],
    },
    { name: "Formation", href: "/formations.php" },
    { name: "SUPPORT", href: "https://support.tlinkoperateur.com/support/" },
    { name: "Contactez-nous", href: "/contact.php" },
  ];

  const logoSrc = isScrolled
    ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/tlink-network-operateur-2.png"
    : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/tlink-network-operateur-blanc-1.png";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/index.php" className="shrink-0">
            <img
              src={logoSrc}
              alt="T-link Network Operateur"
              width={135}
              height={38}
              className="object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navigation.map((item) => (
                <li key={item.name} className="relative group/main">
                  <a
                    href={item.href}
                    className={cn(
                      "nav-link block px-3 py-4 flex items-center gap-1",
                      isScrolled ? "text-[#4a4a4a]" : "text-white",
                      "hover:text-[#0088cc]"
                    )}
                  >
                    {item.name}
                    {item.children && <ChevronDown size={12} />}
                  </a>

                  {/* Level 1 Submenu */}
                  {item.children && (
                    <ul className="absolute top-[100%] left-0 min-w-[200px] bg-white shadow-xl opacity-0 invisible translate-y-2 group-hover/main:opacity-100 group-hover/main:visible group-hover/main:translate-y-0 transition-all duration-200 border-t-2 border-[#0088cc]">
                      {item.children.map((child) => (
                        <li key={child.name} className="relative group/sub">
                          <a
                            href={child.href}
                            className="block px-5 py-3 text-[13px] font-semibold text-[#4a4a4a] hover:bg-gray-50 hover:text-[#0088cc] flex justify-between items-center whitespace-nowrap"
                          >
                            {child.name}
                            {child.children && (
                              <ChevronDown size={12} className="-rotate-90" />
                            )}
                          </a>

                          {/* Level 2 Submenu (Flyout) */}
                          {child.children && (
                            <ul className="absolute top-0 left-full min-w-[200px] bg-white shadow-xl opacity-0 invisible translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 border-t-2 border-[#0088cc]">
                              {child.children.map((grandchild) => (
                                <li key={grandchild.name}>
                                  <a
                                    href={grandchild.href}
                                    className="block px-5 py-3 text-[13px] font-semibold text-[#4a4a4a] hover:bg-gray-50 hover:text-[#0088cc] whitespace-nowrap"
                                  >
                                    {grandchild.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-[#4a4a4a]" : "text-white"
            )}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <div
        className={cn(
          "fixed inset-0 z-[10000] lg:hidden transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-white overflow-y-auto">
          <div className="p-5 flex justify-between items-center border-b">
            <span className="font-display font-bold uppercase text-[15px]">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} className="text-[#4a4a4a]" />
            </button>
          </div>
          <nav className="py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-6 py-3 font-display font-semibold text-[14px] text-[#4a4a4a] hover:text-[#0088cc] uppercase border-b border-gray-50"
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.children && (
                  <div className="bg-gray-50 px-8 py-2">
                    {item.children.map((child) => (
                      <div key={child.name}>
                        <a
                          href={child.href}
                          className="block py-2 text-[13px] font-semibold text-[#4a4a4a] hover:text-[#0088cc]"
                        >
                          {child.name}
                        </a>
                        {child.children && (
                          <div className="pl-4 pb-2">
                            {child.children.map((grandchild) => (
                              <a
                                key={grandchild.name}
                                href={grandchild.href}
                                className="block py-1 text-[12px] text-[#888888] hover:text-[#0088cc]"
                              >
                                {grandchild.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

/**
 * Styling Notes based on Computed Styles & Design:
 * - Font: Montserrat (font-display) for nav links, Open Sans (font-body) for content.
 * - Nav Liks: 13px, font-weight 600, uppercase.
 * - Colors: Active/Hover #0088cc, Initial White, Sticky Grey #4a4a4a.
 * - Container: max-width 1170px.
 * - Transitions: 0.3s ease for background and colors.
 * - Shadow: Header gets light shadow on scroll.
 */