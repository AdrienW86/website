import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
         N'achetez pas un produit, générez des <span className="text-blue-600">clients</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Expertise en gestion d'entreprise et génération de nouveaux clients. 
          Nous définissons des solutions qui génèrent des devis, pas juste des visites.
        </p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">
          Demander mon audit gratuit
        </a>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Réalisations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Toiture Marseille", sector: "Couverture", desc: "Augmentation des appels entrants de 40%." },
            { title: "ProHygiène 3D", sector: "Dératisation", desc: "Site optimisé pour les urgences locales." }
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
              <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">{item.sector}</span>
              <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Discutons de votre projet</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Votre nom" className="w-full p-4 rounded bg-gray-800 border border-gray-700" />
            <input type="email" placeholder="Votre email" className="w-full p-4 rounded bg-gray-800 border border-gray-700" />
            <textarea placeholder="Parlez-moi de votre besoin" className="w-full p-4 rounded bg-gray-800 border border-gray-700 h-32"></textarea>
            <button type="submit" className="w-full bg-blue-600 py-4 rounded font-bold hover:bg-blue-500">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}