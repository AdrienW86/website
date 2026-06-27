import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Logo centré en grand */}
        <div className="mb-12">
          <Image 
            src="/logo.png" 
            alt="Logo Codev" 
            width={300} 
            height={300} 
            className="h-40 w-auto opacity-90 hover:opacity-100 transition-opacity" 
            unoptimized
          />
        </div>

        {/* Navigation stylisée */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="#expertise" className="text-gray-400 hover:text-white transition uppercase tracking-widest text-sm">Expertise</a>
          <a href="#portfolio" className="text-gray-400 hover:text-white transition uppercase tracking-widest text-sm">Portfolio</a>
          <a href="https://code-v.fr" className="text-gray-400 hover:text-white transition uppercase tracking-widest text-sm">Agence</a>
          <a href="tel:+33600000000" className="text-blue-500 hover:text-blue-400 font-bold uppercase tracking-widest text-sm">Appeler maintenant</a>
        </nav>

        {/* Ligne de séparation fine */}
        <div className="w-full h-px bg-gray-800 mb-8"></div>

        {/* Mentions légales et copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-600 text-xs uppercase tracking-tight">
          <p>© {new Date().getFullYear()} Codev. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-gray-400 transition">Mentions légales</a>
            <a href="/confidentialite" className="hover:text-gray-400 transition">Confidentialité</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}