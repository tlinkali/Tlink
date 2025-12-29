import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const location = useLocation();
  const [lastPath, setLastPath] = useState(location.pathname);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Initial Load
    if (document.readyState === 'complete') {
      const timeout = setTimeout(handleLoad, 500);
      return () => clearTimeout(timeout);
    } else {
      window.addEventListener('load', handleLoad);
      const timeout = setTimeout(handleLoad, 2000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

    // Handle route changes
    useEffect(() => {
      if (location.pathname !== lastPath) {
        setLastPath(location.pathname);
        setShouldRender(true);
        setLoading(true);

        const handlePageReady = () => {
          setLoading(false);
        };

        window.addEventListener('page-ready', handlePageReady);

        // Fallback safety timeout
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);

        return () => {
          window.removeEventListener('page-ready', handlePageReady);
          clearTimeout(timer);
        };
      }
    }, [location.pathname, lastPath]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F172A] transition-opacity duration-400 ease-in-out",
        !loading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/logo-tlink-D5qTB_pD-1.png"
              alt="T-Link Logo"
              className="h-16 w-auto brightness-0 invert animate-pulse"
              width="200"
              height="64"
            />
          <div className="absolute -inset-4 border-2 border-[#2DD4BF]/20 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute -inset-4 border-t-2 border-[#2DD4BF] rounded-full animate-[spin_1.5s_linear_infinite]" />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#2DD4BF] to-[#2563EB] animate-[loading_2s_ease-in-out_infinite]" />
          </div>
          <p className="text-white/40 text-[12px] font-medium tracking-[0.2em] uppercase mt-4">
            Chargement de votre espace
          </p>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
