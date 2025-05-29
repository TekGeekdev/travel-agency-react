import { Link } from 'react-router-dom'
import Nav from './Nav';

const Header = () => {
    return(
        <div className='flex justify-between items-center bg-teal-500 p-8'>
            <Link to="/" className='text-white	font-semibold text-lg'>Voyage Cigale</Link>
            <Nav/>
        </div>

    );

};
export default Header;