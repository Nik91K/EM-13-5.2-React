import { Link } from 'react-router'
import './style.css'

const Header = () => {

    return (
        <header>
            <nav className='header-links'>
                <li>
                    <Link to="/" className='header-link'>Main page</Link>
                </li>
                <li>
                    <Link to="/page-1" className='header-link'>First page</Link>
                </li>
                <li>
                    <Link to="/page-2" className='header-link'>Second page</Link>
                </li>
                <li>
                    <Link to="/page-3" className='header-link'>Third page</Link>
                </li>
            </nav>
        </header>
    )
}

export default Header
