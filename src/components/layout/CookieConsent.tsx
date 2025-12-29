import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-slate-200 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold text-slate-900 mb-1">Gestion des cookies</h3>
          <p className="text-sm text-slate-600">
            Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez choisir d'accepter tous les cookies ou uniquement les cookies essentiels.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <Button
            variant="outline"
            onClick={handleAcceptEssential}
            className="text-sm"
          >
            Essentiels uniquement
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-[#003366] hover:bg-[#002244] text-white text-sm"
          >
            Tout accepter
          </Button>
        </div>
      </div>
    </div>
  );
}
