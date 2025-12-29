import { useRef, useEffect, useState } from "react";
import billionaireCall from "@/assets/partners/billionaire-call.png";
import notairesFrance from "@/assets/partners/notaires-france.png";
import ordreAvocats from "@/assets/partners/ordre-avocats.png";
import isleAuxFleurs from "@/assets/partners/isle-aux-fleurs.png";
import mfr from "@/assets/partners/mfr.png";
import groupeEvidence from "@/assets/partners/groupe-evidence.png";
import renault from "@/assets/partners/renault.png";
import ramsaySante from "@/assets/partners/ramsay-sante.png";

const partners = [
  { name: "Billionaire Call", logo: billionaireCall },
  { name: "Notaires de France", logo: notairesFrance },
  { name: "Ordre des Avocats", logo: ordreAvocats },
  { name: "L'Isle aux Fleurs EHPAD", logo: isleAuxFleurs },
  { name: "MFR", logo: mfr },
  { name: "Groupe Evidence", logo: groupeEvidence },
  { name: "Renault", logo: renault },
  { name: "Ramsay Santé", logo: ramsaySante },
];

export const PartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 3; // We have 3 sets of logos

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += 0.5; // Speed of auto-scroll
        
        // Reset position for infinite loop
        if (scrollPositionRef.current >= scrollWidth) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Sync scroll position when user manually scrolls
  const handleScroll = () => {
    if (scrollRef.current && isPaused) {
      const scrollWidth = scrollRef.current.scrollWidth / 3;
      let currentScroll = scrollRef.current.scrollLeft;
      
      // Infinite loop: wrap around when reaching edges
      if (currentScroll >= scrollWidth * 2) {
        scrollRef.current.scrollLeft = currentScroll - scrollWidth;
        scrollPositionRef.current = scrollRef.current.scrollLeft;
      } else if (currentScroll <= 0) {
        scrollRef.current.scrollLeft = scrollWidth;
        scrollPositionRef.current = scrollRef.current.scrollLeft;
      } else {
        scrollPositionRef.current = currentScroll;
      }
    }
  };

  return (
    <section className="py-16 bg-surface-subtle overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
          Ils Nous Font Confiance
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-subtle to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-subtle to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track with manual scroll enabled */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onScroll={handleScroll}
        >
          {/* Three sets of logos for seamless infinite loop */}
          {[...Array(3)].map((_, setIndex) => (
            partners.map((partner, index) => (
                <div
                  key={`set-${setIndex}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-24 w-48"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain hover:scale-110 transition-transform duration-300"
                    draggable={false}
                    width="160"
                    height="64"
                    loading="lazy"
                  />
                </div>
            ))
          ))}
        </div>
      </div>
    </section>
  );
};
