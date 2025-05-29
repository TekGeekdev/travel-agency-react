import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white px-8 py-12 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-semibold mb-2">Agence de voyage</h3>
          <p className="text-sm">
            Explorez le monde avec nos forfaits uniques. Séjours, aventures, et découvertes vous attendent.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Infolettre</h3>
          <p className="text-sm mb-2">Recevez nos offres spéciales par courriel.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Votre courriel"
              className="p-2 rounded text-gray-900 w-full sm:w-auto flex-grow"
            />
            <button className="bg-white text-teal-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
              S’abonner
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Suivez-nous</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook">
              <Facebook className="hover:text-gray-300 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="hover:text-gray-300 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="hover:text-gray-300 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-white mt-12 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Agence de voyage — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;