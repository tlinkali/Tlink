import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, AlertCircle } from 'lucide-react';

export const QualiopiSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-flex items-center space-x-2 text-blue-600 mb-6 bg-blue-50 px-4 py-2 rounded-full">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-xs">Certification d'État</span>
        </div>
        
        <h2 className="text-2xl font-black text-slate-900 mb-12 uppercase tracking-tight">
          ACTION DE FORMATION CERTIFIÉE
        </h2>
        
        <div className="flex justify-center mb-12">
          <a 
            href="/certificat-qualiopi.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-4 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors" />
            <img 
              alt="certificat qualiopi" 
              src="https://tlinkoperateur.com/images/qualiopi.png" 
              className="h-40 w-auto object-contain relative transition-transform duration-500 group-hover:scale-110"
            />
          </a>
        </div>
      
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            T-LINK NETWORK OPERATEUR est un établissement de formation agréé sous le numéro <span className="font-bold text-slate-900">84692118369</span> RCS LYON <br className="hidden md:block" />
            Siret 85152424900014 code NAF 4652Z
          </p>
          <p className="font-black text-xs uppercase tracking-[0.2em] text-slate-400">
            © 2019-2025 T-LINK FORMATION • WWW.TLINKOPERATEUR.COM
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12">
          <Link 
            to="/politique-confidentialite" 
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-black uppercase tracking-wider">CERTIFICAT-ATTESTATION</span>
          </Link>
          <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <Link 
              to="/contact?subject=reclamation%20a%20propos%20de%20la%20certification" 
              className="flex items-center space-x-2 text-slate-500 hover:text-slate-800 transition-colors group"
            >
              <AlertCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-black uppercase tracking-wider">RECLAMATION</span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default QualiopiSection;
