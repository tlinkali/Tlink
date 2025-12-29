import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomizableOffers = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-[2.5rem] font-bold font-heading text-[#0F172A] mb-6 leading-[1.2] tracking-tight">
            Des Offres Personnalisables et
            <span className="text-[#2563EB]"> Sur Mesure</span>
          </h2>
          
          {/* Subtitle / Description */}
          <p className="text-[1.125rem] leading-[1.6] text-[#64748B] font-sans mx-auto mb-8">
            T-linK propose à travers son catalogue un ensemble d'offres assemblables entre elles, 
            conçues avec et pour nos clients. Elles répondent aux exigences de qualité de service 
            et de robustesse requises par votre activité.
          </p>
          
          {/* Gradient Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#2DD4BF] mx-auto rounded-full"></div>
          
          {/* Call to Action Button */}
          <div className="mt-8">
            <Link 
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2563EB]/90 transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 group" 
              to="/offres"
            >
              Voir nos offres
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizableOffers;