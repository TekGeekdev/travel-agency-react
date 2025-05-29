import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <ul className="flex gap-x-3">
            <li><Link to="/" className="text-white hover:underline">Accueil</Link></li>
            <li><Link to="/packages" className="text-white hover:underline">Forfaits</Link></li>
            <li><Link to="/about" className="text-white hover:underline">À propos de l’agence</Link></li>
        </ul>
    );

};

export default Nav;