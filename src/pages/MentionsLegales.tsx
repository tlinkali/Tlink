import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-blue">
          <h1 className="text-4xl font-bold mb-8 text-[#003366]">Mentions Légales</h1>
          
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#003366]">1. Présentation du site</h2>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <p>
                <strong>Propriétaire :</strong> T-LINK NETWORK OPERATEUR<br />
                <strong>Siège social :</strong> 6 Bd des Monts d'Or, 69580 Sathonay-Camp<br />
                <strong>Téléphone :</strong> 04 26 78 75 35<br />
                <strong>Email :</strong> contact@t-link.fr<br />
                <strong>Responsable publication :</strong> T-LINK – contact@t-link.fr
              </p>
            </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#003366]">2. Hébergement</h2>
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.<br />
              <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#003366]">3. Propriété intellectuelle</h2>
            <p>
              T-LINK est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#003366]">4. Limitations de responsabilité</h2>
            <p>
              T-LINK ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
