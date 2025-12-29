import React from 'react';
import { Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsOverview = () => {
  return (
    <section className="py-24 bg-[#f1f5f9]/30 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration Column - Left on Desktop */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Soft background glow for the image */}
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
              
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/telecom-illustration-CwsPpRHn-2.png?width=800&quality=75&format=webp" 
                  alt="Solutions de télécommunications T-Link" 
                  className="w-full max-w-lg mx-auto animate-float relative z-10 drop-shadow-2xl"
                  width="800"
                  height="600"
                  loading="lazy"
                />
            </div>
          </div>

          {/* Text Content Column - Right on Desktop */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-[#2563eb] text-sm font-semibold mb-4 uppercase tracking-wider">
              <Server className="h-4 w-4" />
              Nos Solutions
            </div>
            
            <h2 className="text-[2.5rem] font-bold text-[#0f172a] mb-6 leading-[1.2] font-heading">
              Solutions de Télécommunications<span className="text-[#2563eb]"> Sur Mesure</span>
            </h2>
            
            <div className="space-y-6 max-w-xl">
              <p className="text-[#64748b] text-[1.125rem] leading-relaxed">
                T-linK accompagne tous les professionnels sur l'ensemble de leurs projets de télécommunications : téléphonie fixe et mobile, VoIP, Fibre optique, Firewall et Matériel Téléphonique.
              </p>
              
              <p className="text-[#64748b] text-[1.125rem] leading-relaxed mb-8">
                Vous disposez d'un guichet unique — T-linK prend absolument tout en charge, vous n'avez pas à vous soucier de la gestion de votre réseau.
              </p>
            </div>

            <div className="mt-10">
              <Link 
                to="/solutions" 
                className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-[12px] font-semibold hover:bg-[#2563eb]/90 transition-all shadow-[0_20px_25px_-5px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 group"
              >
                Voir nos solutions
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
