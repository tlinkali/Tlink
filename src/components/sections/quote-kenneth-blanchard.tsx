import React from 'react';

const KennethBlanchardQuote = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px] border-b border-[#eeeeee]">
      <div className="container mx-auto px-[15px] flex flex-col items-center justify-center">
        {/* Quote Text */}
        <h2 
          className="quote-text text-[#008cb4] text-[22px] md:text-[28px] font-medium text-center italic leading-[1.4] max-w-[900px] mb-0 normal-case tracking-normal"
          style={{ 
            fontFamily: '"Montserrat", sans-serif',
            textTransform: 'none' // Override the global H2 uppercase rule for this specific element as per screenshot
          }}
        >
          &quot; Aucun d’entre nous n’est aussi intelligent que l’ensemble d’entre nous. &quot;
        </h2>
        
        {/* Author Text */}
        <div 
          className="quote-author text-[#666666] text-[12px] font-semibold text-center mt-[20px]"
          style={{ 
            fontFamily: '"Montserrat", sans-serif',
            letterSpacing: '0.05em'
          }}
        >
          Kenneth Blanchard
        </div>
      </div>
    </section>
  );
};

export default KennethBlanchardQuote;