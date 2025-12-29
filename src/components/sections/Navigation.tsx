"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "OFFRES",
      href: "/offre",
      children: [
        {
          title: "Téléphonie",
          links: [
            { name: "Fixe VoiP - SIP", href: "/sip_voip" },
            { name: "Hébérgée", href: "/sip_hebergee" },
            { name: "Unifiée", href: "/sip_unifiee" },
          ],
        },
        {
          title: "Internet",
          links: [
            { name: "xDSL", href: "/net_xdsl" },
            { name: "Fibre", href: "/net_fibre" },
            { name: "VPN", href: "/net_vpn" },
          ],
        },
        {
          title: "Équipements",
          links: [
            { name: "PBX - Standard", href: "/equipement_pbx" },
            { name: "Santé", href: "/equipement_sante" },
            { name: "Centre d'appel", href: "/equipement_call" },
          ],
        },
        { title: "Sécurité", href: "/securite" },
        { title: "Mobile", href: "/mobile" },
      ],
    },
    {
      title: "Solutions",
      href: "/solutions",
      children: [
        { name: "Fibre", href: "/solution_fibre" },
        { name: "WiFi", href: "/solution_wifi" },
        { name: "Studio musical", href: "/solution_studio" },
        { name: "Supervision", href: "/solution_extranet" },
      ],
    },
    { title: "Audit", href: "/audit" },
    { title: "Relation Clients", href: "/relation_clients" },
    {
      title: "T-LINK",
      href: "#",
      children: [
        { name: "La société", href: "/societe" },
        { name: "Nos partenaires", href: "/partenaires" },
        { name: "Engagements et valeurs", href: "/engagements" },
      ],
    },
    { title: "Contactez-nous", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-[20px]"
      }`}
    >
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/tlink-network-operateur-1.png"
                alt="T-link Network Operateur"
                className="h-[38px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-[25px]">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="nav-link flex items-center h-full py-4 text-[12px] font-semibold uppercase tracking-[0.5px] text-[#333333] hover:text-[#0088cc] transition-colors duration-300"
                >
                  {item.title}
                  {item.children && <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform" />}
                </a>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full right-0 w-[220px] bg-white border-t-2 border-[#0088cc] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ul className="py-2">
                      {item.children.map((child: any) => (
                        <li key={child.title || child.name} className="relative group/sub">
                          {child.links ? (
                            <>
                              <div className="px-4 py-2 text-[11px] font-bold text-[#333] uppercase flex justify-between items-center cursor-default">
                                {child.title}
                                <ChevronDown className="w-3 h-3 -rotate-90" />
                              </div>
                              <div className="absolute left-[100%] top-0 w-[200px] bg-white border-l-2 border-[#0088cc] shadow-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                                {child.links.map((link: any) => (
                                  <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-4 py-2 text-[11px] text-[#777] hover:text-[#0088cc] hover:bg-gray-50 border-b border-gray-100 last:border-0"
                                  >
                                    {link.name}
                                  </a>
                                ))}
                              </div>
                            </>
                          ) : (
                            <a
                              href={child.href}
                              className="block px-4 py-2 text-[11px] text-[#777] hover:text-[#0088cc] hover:bg-gray-50 border-b border-gray-100 last:border-0"
                            >
                              {child.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            
            {/* Desktop Hamburger (Trigger Slide Menu) */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#444] hover:text-[#0088cc] ml-4"
            >
              <Menu size={24} />
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex items-center p-2 text-[#444]"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-[400px] max-w-[85%] bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-6 bg-[#333] text-white">
              <span className="font-bold text-lg uppercase tracking-wider">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#0088cc]">
                <X size={28} />
              </button>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.title} className="border-b border-gray-100">
                    <div className="flex items-center justify-between py-3">
                      <a
                        href={item.href}
                        className="text-[14px] font-semibold text-[#333] uppercase"
                        onClick={() => !item.children && setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                      {item.children && (
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                          className="p-1"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.title ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    
                    {item.children && activeDropdown === item.title && (
                      <ul className="pl-4 pb-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
                        {item.children.map((child: any) => (
                          <li key={child.title || child.name}>
                            {child.links ? (
                              <div className="space-y-1">
                                <span className="text-[12px] font-bold text-gray-400 uppercase block py-1">
                                  {child.title}
                                </span>
                                {child.links.map((link: any) => (
                                  <a
                                    key={link.name}
                                    href={link.href}
                                    className="block py-1 text-[13px] text-[#777] hover:text-[#0088cc]"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {link.name}
                                  </a>
                                ))}
                              </div>
                            ) : (
                              <a
                                href={child.href}
                                className="block py-1 text-[13px] text-[#777] hover:text-[#0088cc]"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Contact Info / Social (Optional consistent with high level design) */}
            <div className="p-6 mt-4 border-t border-gray-100 bg-gray-50">
              <div className="text-[12px] text-[#777] leading-relaxed">
                T-Link Network Opérateur<br />
                Une autre idée du telecom.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;