import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Company Information & Contact */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
              <div className="flex items-center">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/logo-tlink-D5qTB_pD-1.png?width=200&quality=80&format=webp"
                  alt="T-Link Network Operateur"
                  className="h-12 w-auto"
                  width="200"
                  height="48"
                  loading="lazy"
                />
              </div>
            
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-sm">
              Opérateur télécom B2B spécialisé dans les solutions de communication d'entreprise. VoIP, Fibre, Cloud et Communication Unifiée.
            </p>

            <div className="space-y-4">
              <a 
                href="tel:0426787535" 
                className="flex items-center gap-4 group transition-colors hover:text-[#2dd4bf]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/30 transition-all">
                  <Phone className="w-4 h-4 text-[#94a3b8] group-hover:text-[#2563eb]" />
                </div>
                <span className="text-sm font-medium">04 26 78 75 35</span>
              </a>

              <a 
                href="mailto:contact@t-link.fr" 
                className="flex items-center gap-4 group transition-colors hover:text-[#2dd4bf]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/30 transition-all">
                  <Mail className="w-4 h-4 text-[#94a3b8] group-hover:text-[#2563eb]" />
                </div>
                <span className="text-sm font-medium">contact@t-link.fr</span>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#94a3b8]" />
                </div>
                <span className="text-sm font-medium leading-relaxed pt-2">
                  6 Bd des Monts d'Or, 69580 Sathonay-Camp
                </span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-8">Offres</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Téléphonie', href: '/offres/telephonie' },
                  { label: 'Internet', href: '/offres/internet' },
                  { label: 'Équipements', href: '/offres/equipements' },
                  { label: 'Mobile', href: '/offres/mobile' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-[#94a3b8] text-sm hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-8">Solutions</h3>
            <ul className="space-y-4">
              {['Fibre', 'WiFi', 'Studio musical', 'Supervision'].map((item) => (
                <li key={item}>
                  <Link to={`/solutions/${item.toLowerCase().replace(' ', '-')}`} className="text-[#94a3b8] text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-8">T-Link</h3>
                <ul className="space-y-4">
                    {[
                      { label: 'À propos', href: '/a-propos' },
                      { label: 'Nos partenaires', href: '/t-link/partenaires' },
                      { label: 'Engagements', href: '/t-link/engagements' }
                    ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-[#94a3b8] text-sm hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>


          {/* Opening Hours */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-8">Horaires</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#94a3b8] text-sm">Lun - Ven : 09:00 - 18:30</p>
                <p className="text-[#94a3b8] text-sm mt-1">Sam - Dim : Fermé</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#64748b] text-xs text-center md:text-left">
            © {currentYear} T-LINK NETWORK OPERATEUR. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-8">
            <Link to="/mentions-legales" className="text-[#64748b] text-xs hover:text-white transition-colors">
              Mentions légales
            </Link>
              <Link to="/politique-confidentialite" className="text-[#64748b] text-xs hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
