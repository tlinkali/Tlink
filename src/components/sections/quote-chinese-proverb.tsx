import React from 'react';

/**
 * ProverbQuote component clones the central quote section featuring 
 * a blue Chinese proverb on a clean white background.
 */
const ProverbQuote: React.FC = () => {
  return (
    <section 
      className="bg-white py-[60px] md:py-[80px] border-t border-[#eeeeee]"
      aria-label="Citation - Proverbe chinois"
    >
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Quote Text */}
          <h2 
            className="quote-text text-[#008cb4] text-[22px] md:text-[24px] font-medium italic leading-[1.4] mb-4 max-w-[900px] normal-case tracking-normal"
            style={{ 
              fontFamily: '"Montserrat", sans-serif',
              textTransform: 'none' /* Overriding global H2 uppercase from globals.css if applied */
            }}
          >
            &quot; Quand souffle le vent du changement, certains construisent des murs, d’autres des moulins &quot;
          </h2>
          
          {/* Quote Author */}
          <h6 
            className="quote-author text-[#666666] text-[12px] font-semibold tracking-normal mt-2"
            style={{ 
              fontFamily: '"Montserrat", sans-serif',
              textTransform: 'none'
            }}
          >
            Proverbe chinois.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default ProverbQuote;