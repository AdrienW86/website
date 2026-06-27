"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On déclenche le changement après 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 ease-in-out">
      {/* Container avec transition de hauteur et opacité */}
      <div className={`transition-all duration-300 ease-in-out ${isScrolled ? 'py-2' : 'py-0'}`}>
        
        {!isScrolled ? (
          // Header complet
          <div className="bg-black border-b border-gray-800">
            <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={300} height={300} className="h-26 w-auto object-contain" unoptimized />
              </div>
              <div className="flex items-center gap-4">
                <a href="tel:+33666672719" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm">Appeler</a>
                <button className="md:hidden p-2 text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</button>
                <div className="hidden md:flex items-center gap-8 text-white font-medium">
                  <a href="#expertise" className="hover:text-blue-500">Expertise</a>
                  <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
                </div>
              </div>
            </nav>
            <div className="bg-blue-600 text-white text-center py-2 text-xs font-bold uppercase tracking-widest border-t border-blue-700">
              Expertise spécialisée pour les métiers de couvreurs et dératiseurs
            </div>
          </div>
        ) : (
          // Header réduit au scroll
          <div className="bg-black/90 backdrop-blur-md border border-gray-800 rounded-full mx-6 shadow-xl flex justify-between items-center px-6 py-3 transition-all duration-300">
            <span className="text-white font-bold text-sm">Codev Website</span>
            <a href="tel:+33666672719" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
              📞 <span className="hidden md:inline">Appeler maintenant</span>
            </a>
          </div>
        )}
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-8 bg-black border-b border-gray-800">
          <div className="flex flex-col gap-6 pt-4">
            <a href="#expertise" className="text-white text-xl" onClick={() => setIsOpen(false)}>Expertise</a>
            <a href="#portfolio" className="text-white text-xl" onClick={() => setIsOpen(false)}>Portfolio</a>
          </div>
        </div>
      )}
    </header>
  );
}