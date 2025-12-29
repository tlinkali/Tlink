import React from 'react';

/**
 * ContactFormSection Component
 * 
 * A split-layout contact section with:
 * - Left side: Content about training projects, handicap support, and claims.
 * - Right side: A detailed contact form with a blue header.
 * Theme: Light (with dark slate background for the section).
 */
const ContactFormSection: React.FC = () => {
  return (
    <section className="bg-[#4a505e] py-[80px] text-white font-sans">
      <div className="container mx-auto max-w-[1170px] px-[15px]">
        <div className="flex flex-col lg:flex-row gap-[50px]">
          
          {/* Left Column: Information */}
          <div className="lg:w-1/2">
            <div className="mb-[60px]">
              <h2 className="text-[32px] font-bold uppercase text-white mb-[30px] leading-tight">
                Vous avez un projet de formation ?
              </h2>
              <p className="text-[16px] text-[#cccccc] mb-[30px] leading-[1.6]">
                Vous avez un projet de formation, réseau ou infrastructure ? Nous serons ravis de partager notre expertise pour vous conseiller.
                Nous accompagnons les personnes dans leur transition professionnelle, et avons hâte de vous rencontrer !
              </p>
              <p className="text-[16px] text-[#cccccc] mb-[40px] leading-[1.6]">
                Nous accompagnons les professionnels dans leur transformation digitale vers le passage au tout à l’IP, et avons hâte de vous rencontrer !
              </p>

              <h3 className="text-[22px] font-semibold text-white mb-[25px]">
                Comment nous contacter ?
              </h3>
              <ol className="list-decimal list-inside space-y-4 text-[14px] text-[#cccccc]">
                <li className="font-semibold">
                  <span className="font-normal ms-2">Vous remplissez le formulaire de contact sur votre droite pour nous transmettre vos coordonnées</span>
                </li>
                <li className="font-semibold">
                  <span className="font-normal ms-2">Un expert de votre secteur vous recontacte pour avoir une meilleure compréhension de votre projet.</span>
                </li>
                <li className="font-semibold">
                  <span className="font-normal ms-2">Vous déterminez ensemble les solutions les mieux adaptées à vos besoins de connectivité réseau.</span>
                </li>
              </ol>
            </div>

            <div className="mb-[60px]">
              <h3 className="text-[22px] font-semibold text-white mb-[20px]">
                Vous êtes en situation de handicap?
              </h3>
              <p className="text-[14px] text-[#cccccc] leading-[1.6]">
                Contactez nous et aguillez nous sur votre handicap, nos équipes mettrons en œuvre les moyens nécessaire pour répondre à tous vos besoins.
              </p>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold text-white mb-[20px]">
                Vous avez une réclamation?
              </h3>
              <p className="text-[14px] text-[#cccccc] leading-[1.6]">
                Remplissez le formulaire ci après, votre réclamation sera traitée sous 15 jours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#f7f7f7] rounded-[8px] overflow-hidden shadow-2xl">
              {/* Form Header */}
              <div className="bg-[#007abf] py-[25px] px-[30px]">
                <h3 className="text-[22px] font-bold text-white uppercase m-0">
                  Vos coordonnées
                </h3>
              </div>

              {/* Form Content */}
              <div className="p-[30px]">
                <form className="space-y-[20px]">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Nom et Prénom <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Entreprise ou personne * <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Role */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Fonction <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Sector */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Secteur d'activité <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Email <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Numéro de téléphone <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Objet <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Training Wanted */}
                  <div className="flex flex-col">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Formation souhaitée <span className="text-[#007abf]">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] h-[45px] px-[15px] outline-none focus:border-[#007abf] text-[#333333]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col pt-2">
                    <label className="text-[13px] font-bold text-[#333333] mb-2">
                      Message <span className="text-[#007abf]">*</span>
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full bg-white border border-[#e5e5e5] rounded-[4px] p-[15px] outline-none focus:border-[#007abf] text-[#333333] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      className="bg-[#007abf] text-white font-bold uppercase py-[12px] px-[35px] rounded-[4px] hover:bg-[#0867ad] transition-colors text-[14px] cursor-pointer"
                    >
                      VALIDER
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;