import React from 'react';

const FacturationPersonnalisee = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="container px-[15px] mx-auto max-w-[1170px]">
        {/* Title Section */}
        <div className="mb-[20px]">
          <h2 className="font-display text-[24px] font-[700] text-[#4a4a4a] text-center uppercase tracking-[1px] leading-[1.2]">
            LA FACTURATION PERSONNALISÉE
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex justify-center my-[40px]">
          <div className="relative w-full max-w-[800px]">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-7-9.jpg"
              alt="Professionnels examinant des documents de facturation personnalisée"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="max-w-[800px] mx-auto">
          <p className="font-display text-[14px] font-[400] text-[#999999] text-center leading-[1.8]">
            Avant même la mise en facturation du contrat, nous définissons ensemble le meilleur fonctionnement répondant à vos besoins analytiques, et validons ensemble la forme des factures à venir pour répondre au mieux à votre organisation et à vos contraintes. 
            <br />
            Nous pouvons, par exemple, produire des factures détaillées et ventilées par entités si votre comptabilité le nécessite. 
            <br />
            Plus de surprise ni de temps perdu à gérer des problématiques administratives !
          </p>
        </div>

        {/* Horizontal Divider */}
        <div className="mt-[40px]">
          <hr className="border-0 border-t border-[#eeeeee]" />
        </div>
      </div>
    </section>
  );
};

export default FacturationPersonnalisee;