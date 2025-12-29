import React from 'react';

const EspaceClient = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container overflow-hidden">
        {/* Section Header */}
        <div className="mb-[30px]">
          <h2 className="text-[24px] font-bold text-[#4a4a4a] text-center tracking-[1px] leading-[1.2] uppercase font-display">
            UN ESPACE DÉDIÉ AU CLIENT
          </h2>
        </div>

        {/* Section Image */}
        <div className="relative w-full max-w-[800px] mx-auto mb-[40px]">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-tlinkoperateur-com/assets/images/rc-6-8.jpg"
            alt="Person using laptop showing T-Link portal indicators"
            className="w-full h-auto block rounded-2xl grayscale-0"
          />
        </div>

        {/* Section Description */}
        <div className="max-w-[800px] mx-auto px-[15px]">
          <p className="text-[14px] font-normal leading-[1.8] text-[#999999] text-center mb-[20px] font-body">
            Votre confiance n’a pas de prix, et c’est en toute transparence que nous vous donnons accès, via un espace client sécurisé, à l’ensemble de nos indicateurs de performances. Vous avez le même niveau d’information que nos propres collaborateurs, et pouvez donc juger de notre efficacité. Vous êtes également libres de nous évaluer à n'importe quel moment, en déposant un avis, un commentaire en ligne. Votre niveau de satisfaction ressenti global sera visible par tous les collaborateurs, sans modération.
          </p>
          <p className="text-[14px] font-normal leading-[1.8] text-[#999999] text-center font-body">
            Votre interface de gestion applicative vous aide à piloter vos flux pour que vos outils de communication deviennent un facteur de productivité.
          </p>
        </div>

        {/* Thinner separator for visual rhythm consistent with reference */}
        <div className="max-w-[1170px] mx-auto">
          <hr className="mt-[80px] border-0 border-t border-[#eeeeee]" />
        </div>
      </div>
    </section>
  );
};

export default EspaceClient;
