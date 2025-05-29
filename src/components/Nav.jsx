import { Link } from 'react-router-dom'
const Nav = () => {
    return(
        <ul className="flex gap-x-3">
            <li><a href="" className="text-white">Acceuil</a></li>
            <li><a href="" className="text-white">Forfaits</a></li>
            <li><Link to="/packages" className="text-white">À propos de l’agence</Link></li>
        </ul>
    );

};

export default Nav;