import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[60px] pb-[40px] border-t border-[#e5e5e5]">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <Image 
                src="https://www.t-link.fr/hubfs/Logos/tlink-network-operateur.png" 
                alt="T-link Network Operateur" 
                width={135} 
                height={38}
                className="h-auto"
              />
            </div>
            <p className="text-[14px] leading-[1.6] text-[#777777] mb-4 max-w-full mx-0 text-left md:text-left">
              T-Link Network est un opérateur et intégrateur de solutions télécoms innovantes pour les entreprises.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[16px] font-bold uppercase tracking-[1px] text-[#444444] mb-6 text-left w-full">
              Nos Offres
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/sip_voip.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  Téléphonie Fixe
                </a>
              </li>
              <li>
                <a href="/net_fibre.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  Internet Fibre
                </a>
              </li>
              <li>
                <a href="/mobile.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  Offres Mobile
                </a>
              </li>
              <li>
                <a href="/securite.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  Sécurité Réseau
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[16px] font-bold uppercase tracking-[1px] text-[#444444] mb-6 text-left w-full">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/solution_wifi.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  WiFi Professionnel
                </a>
              </li>
              <li>
                <a href="/audit.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  Audit & Conseil
                </a>
              </li>
              <li>
                <a href="/partenaires.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  Nos Partenaires
                </a>
              </li>
              <li>
                <a href="/engagements.php" className="text-[13px] font-semibold text-[#777777] hover:text-[#0088cc] transition-colors duration-300 uppercase">
                  Engagements
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[16px] font-bold uppercase tracking-[1px] text-[#444444] mb-6 text-left w-full">
              Contact
            </h4>
            <p className="text-[14px] leading-[1.6] text-[#777777] mb-4 max-w-full mx-0 text-left">
              Besoin d&apos;un expert ? <br />
              Nous sommes à votre écoute pour tous vos projets.
            </p>
            <a 
              href="/contact.php" 
              className="mt-2 inline-block px-6 py-2 border-2 border-[#0088cc] text-[#0088cc] font-bold text-[12px] uppercase tracking-[1px] hover:bg-[#0088cc] hover:text-white transition-all duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#f0f0f0] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <div className="text-[12px] text-[#aaaaaa] font-medium tracking-[0.5px]">
            &copy; {new Date().getFullYear()} T-LINK NETWORK OPÉRATEUR. TOUS DROITS RÉSERVÉS.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[11px] font-bold text-[#aaaaaa] hover:text-[#0088cc] uppercase transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-[11px] font-bold text-[#aaaaaa] hover:text-[#0088cc] uppercase transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-[11px] font-bold text-[#aaaaaa] hover:text-[#0088cc] uppercase transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;