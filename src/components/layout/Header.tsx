import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, Phone, Globe, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Offres",
      href: "/offres",
      submenu: [
        {
          title: "Téléphonie",
          icon: <Phone className="h-4 w-4" />,
          items: [
            { label: "Fixe VoIP / SIP", href: "/offres/telephonie/voip-sip" },
            { label: "Téléphonie hébergée", href: "/offres/telephonie/hebergee" },
            { label: "Téléphonie unifiée", href: "/offres/telephonie/unifiee" },
          ],
        },
        {
          title: "Internet",
          icon: <Globe className="h-4 w-4" />,
          items: [
            { label: "xDSL", href: "/offres/internet/xdsl" },
            { label: "Fibre", href: "/offres/internet/fibre" },
            { label: "VPN", href: "/offres/internet/vpn" },
          ],
        },
        {
          title: "Équipements",
          icon: <Laptop className="h-4 w-4" />,
          items: [
            { label: "PBX – Standard", href: "/offres/equipements/pbx-standard" },
            { label: "Centre d'appel", href: "/offres/equipements/centre-appel" },
            { label: "Santé", href: "/offres/equipements/sante" },
            { label: "Sécurité", href: "/offres/equipements/securite" },
          ],
        },
        { title: "Mobile", href: "/offres/mobile", icon: <Phone className="h-4 w-4" /> },
      ],
    },
    {
      title: "Solutions",
      href: "/solutions",
      submenu: [
        { label: "Fibre", href: "/solutions/fibre" },
        { label: "WiFi", href: "/solutions/wifi" },
        { label: "Studio musical", href: "/solutions/studio-musical" },
        { label: "Supervision", href: "/solutions/supervision" },
      ],
    },
      { title: "Audit", href: "/audit" },
      { title: "Relation Clients", href: "/relation-clients" },
      {
        title: "T-Link",
        href: "/t-link",
          submenu: [
            { label: "À propos", href: "/a-propos" },
            { label: "Nos partenaires", href: "/t-link/partenaires" },
            { label: "Engagements et valeurs", href: "/t-link/engagements" },
          ],
      },
    { title: "Formation", href: "/formation" },
    { title: "Support", href: "https://support.tlinkoperateur.com/support/" },
    { title: "Contactez-nous", href: "/contact?subject=Prise%20de%20contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center",
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border-b border-white/20" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <img
                src={isScrolled 
                  ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/tlink-network-operateur-1766144646278.png?width=200&height=50&resize=contain"
                  : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/logo-tlink-D5qTB_pD-1.png"
                }
                alt="T-Link Télécom"
                width={150}
                height={40}
                className={cn(
                  "h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-105",
                  !isScrolled && "brightness-0 invert"
                )}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <div key={idx} className="relative group h-20 flex items-center">
                  {link.submenu ? (
                    <>
                      <Link
                        to={link.href}
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 rounded-full font-medium text-[13px] xl:text-[14px] transition-all duration-300",
                          isScrolled ? "text-slate-700 hover:bg-slate-100 hover:text-[#2563EB]" : "text-white hover:bg-white/10"
                        )}
                      >
                        {link.title}
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>

                      <div className="absolute top-[100%] left-0 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 pt-2">
                        <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-4">
                          {link.submenu.map((sub, sIdx) => (
                            <div key={sIdx} className="relative group/sub">
                              {"items" in sub ? (
                                <>
                                  <div className="flex items-center justify-between px-4 py-3 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#2563EB] rounded-xl transition-all cursor-pointer">
                                    <span className="flex items-center gap-3">
                                      {sub.icon && <span className="text-slate-400 group-hover/sub:text-[#2563EB] transition-colors">{sub.icon}</span>}
                                      {sub.title}
                                    </span>
                                    <ChevronRight className="h-4 w-4 opacity-30 group-hover/sub:opacity-100 transition-opacity" />
                                  </div>
                                  <div className="absolute left-full top-0 w-[240px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible -translate-x-2 group-hover/sub:translate-x-0 transition-all duration-300 pl-2">
                                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-2">
                                      {sub.items.map((item, iIdx) => (
                                        <Link
                                          key={iIdx}
                                          to={item.href}
                                          className="block px-4 py-2.5 text-[14px] text-slate-600 hover:text-[#2563EB] hover:bg-slate-50 rounded-lg transition-colors"
                                        >
                                          {item.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  to={sub.href}
                                  className="flex items-center gap-3 px-4 py-3 text-[14px] text-slate-700 hover:bg-slate-50 hover:text-[#2563EB] rounded-xl transition-all"
                                >
                                  {sub.icon && <span className="text-slate-400 group-hover/sub:text-[#2563EB] transition-colors">{sub.icon}</span>}
                                  {sub.title || sub.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "px-4 py-2 rounded-full font-medium text-[13px] xl:text-[14px] transition-all duration-300",
                        isScrolled ? "text-slate-700 hover:bg-slate-100 hover:text-[#2563EB]" : "text-white hover:bg-white/10"
                      )}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2.5 rounded-2xl transition-all duration-200",
                  isScrolled 
                    ? "bg-slate-100 text-slate-900" 
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl z-40 overflow-hidden"
        >
          <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link, idx) => (
              <div key={idx} className="mb-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.href}
                    className="flex-1 py-3 text-slate-900 font-bold text-[16px] hover:text-[#2563EB] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                  {link.submenu && (
                    <button
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.title ? null : link.title)}
                      className="p-3 text-slate-400 hover:text-[#2563EB] transition-colors"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-300",
                          activeMobileSubmenu === link.title && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                
                {link.submenu && activeMobileSubmenu === link.title && (
                  <div className="bg-slate-50/80 rounded-2xl px-4 py-2 mt-2">
                    {link.submenu.map((sub, sIdx) => (
                      <div key={sIdx} className="py-2">
                        {"items" in sub ? (
                          <>
                            <div className="text-[14px] font-bold text-slate-800 mb-2 flex items-center gap-2">
                              {sub.icon && <span className="text-[#2563EB]">{sub.icon}</span>}
                              {sub.title}
                            </div>
                            <div className="pl-6 space-y-1">
                              {sub.items.map((item, iIdx) => (
                                <Link
                                  key={iIdx}
                                  to={item.href}
                                  className="block py-2 text-[14px] text-slate-500 hover:text-[#2563EB] transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={sub.href}
                            className="flex items-center gap-2 py-2 text-[14px] text-slate-700 font-semibold hover:text-[#2563EB] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.icon && <span className="text-[#2563EB]">{sub.icon}</span>}
                            {sub.title || sub.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
