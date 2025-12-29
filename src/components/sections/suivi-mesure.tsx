import React from 'react';

const SuiviMesure = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        {/* Section Header */}
        <h2 className="font-display text-[24px] font-bold text-[#4a4a4a] text-center uppercase tracking-[1px] mb-[20px]">
          UN SUIVI SUR MESURE
        </h2>

        {/* Thematic Image */}
        <div className="flex justify-center my-[40px]">
          <div className="relative w-full max-w-[800px] overflow-hidden">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-5-7.jpg"
              alt="Un suivi sur mesure - Professionnel devant un écran de contrôle"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Content Paragraph */}
        <div className="max-w-[800px] mx-auto">
          <p className="font-body text-[14px] font-normal leading-[1.8] text-[#999999] text-center">
            Vous êtes accompagné tout au long de la vie du contrat. 
            Nous serons présents, proactifs, et vous contacterons régulièrement pour faire le point sur vos besoins et votre organisation. 
            De cette façon, nous nous assurerons que le dispositif mis en place est toujours le plus efficient.
          </p>
        </div>

        {/* Subtle separator below the section */}
        <hr className="border-0 border-t border-[#eeeeee] mt-[40px]" />
      </div>
    </section>
  );
};

export default SuiviMesure;