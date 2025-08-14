import './style.css'

const Header = () => {

    return (
        <header>
            <nav>
                <li>
                    <a href="/" className='header-link'>Main page</a>
                </li>
                <li>
                    <a href="/page-1" className='header-link'>First page</a>
                </li>
                <li>
                    <a href="/page-2" className='header-link'>Second page</a>
                </li>
                <li>
                    <a href="/page-3" className='header-link'>Third page</a>
                </li>
            </nav>
        </header>
    )
}

export default Header
