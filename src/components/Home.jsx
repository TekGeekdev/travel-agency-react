const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url('/assets/img/hero-img.webp')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center drop-shadow-lg">
            Explorez le monde avec nous
          </h1>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Bienvenue chez Voyage Cigale </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Partez à l’aventure, détendez-vous ou découvrez de nouvelles cultures. Nous avons le forfait parfait pour chaque type de voyageur.
        </p>
      </section>
    </div>
  );
};

export default Home;
