"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Play } from "lucide-react";

interface SlideData {
  url: string;
  alt: string;
}

const slides: SlideData[] = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766483360541.png?width=1200&quality=80&format=webp",
      alt: "Formation Technicien Installation Telecom Slide 1",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766483417624.png?width=1200&quality=80&format=webp",
      alt: "Formation Technicien Installation Telecom Slide 2",
    },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              } transition-transform duration-[10000ms]`}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "low"}
              />
            </div>
        ))}
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/85 to-[#2563EB]/40 z-[1]" />
      
      {/* Radial Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2563EB]/20 via-transparent to-transparent z-[1]" />

      {/* Bottom Gradient Transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-[2]" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 lg:pt-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-in fade-in duration-700">
            <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
            <span className="text-white/90 text-[14px] font-semibold tracking-wide">Investissez dans votre avenir</span>
          </div>
          
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-heading font-extrabold text-white mb-6 leading-[1.1] tracking-tight animate-in slide-in-from-bottom-8 duration-700 uppercase">
            FORMATIONS <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#2563EB]">
              PROFESSIONNELLES
            </span>
          </h1>
          
            <p className="text-[1.125rem] lg:text-[1.25rem] text-white/70 mb-10 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-10 duration-700">
              Développez vos compétences avec T-LINK. Nos formations spécialisées vous préparent aux métiers de demain dans les télécoms et les réseaux.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-1"></div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative h-12 w-1 flex items-center`}
            aria-label={`Aller à la slide ${index + 1}`}
          >
            <div className={`h-full w-full transition-all duration-500 ${
              index === currentSlide ? "bg-blue-500 w-1.5" : "bg-white/30 group-hover:bg-white/50"
            }`} />
            {index === currentSlide && (
              <span className="absolute right-4 text-white text-xs font-bold tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </span>
            )}
          </button>
        ))}
      </div>

      </section>
    );
  };

export default HeroSlider;
