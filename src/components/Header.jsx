import Nav from './Nav';

const Header = () => {
    return(
        <div className='flex justify-between items-center bg-teal-500 p-8'>
            <span className='text-white	font-semibold text-lg'>Agence de voyage</span>
            <Nav/>
        </div>

    );

};
export default Header;