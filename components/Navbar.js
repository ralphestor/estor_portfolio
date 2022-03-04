import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className='myLogoCont'>
                <h1 className="myLogo">[RE]</h1>
            </div>
            <ul className='navLinks'>
                <li className='navLink'>
                <Link href='/about' passHref>
                    <a className='navLink-child'>
                    About
                    </a>
                </Link>
                </li>
                <li className='navLink'>
                <Link href='/projects' passHref>
                    <a className='navLink-child'>
                    Projects
                    </a>
                </Link>
                </li>
                <li className='navLink'>
                <Link href='/connect' passHref>
                    <a className='navLink-child'>
                    Connect
                    </a>
                </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;