"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. LE HEADER PRINCIPAL (Reste dans le flux de la page, jamais en fixed) */}
      <header className="bg-black border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image src="/logo.png" alt="Logo" width={300} height={300} className="h-26 w-auto object-contain" unoptimized />
          <div className="flex items-center gap-4">
            <a href="tel:+33666672719" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm">Appeler</a>
            <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</button>
            <div className="hidden md:flex gap-8 text-white font-medium">
              <a href="#expertise" className="hover:text-blue-500">Expertise</a>
              <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
            </div>
          </div>
        </nav>
        <div className="bg-blue-600 text-white text-center py-2 text-xs font-bold uppercase tracking-widest border-t border-blue-700">
          Expertise spécialisée pour les métiers de couvreurs et dératiseurs
        </div>
      </header>

      {/* 2. LE HEADER RÉDUIT (Flottant, apparaît au scroll, sans perturber le layout) */}
      <div className={`fixed top-4 left-0 right-0 z-50 px-6 transition-all duration-500 transform flex justify-center ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="w-full max-w-2xl bg-black/80 backdrop-blur-md border border-gray-800 rounded-full shadow-2xl px-6 py-3 flex justify-between items-center">
          <span className="text-white font-bold text-sm">Contactez-nous gratuitement pour générer plus de clients</span>
          <a href="tel:+33666672719" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
            📞 <span className="hidden md:inline">Appeler maintenant</span>
          </a>
        </div>
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
    </>
  );
}