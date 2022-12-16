import React from 'react';

const Navbar = () => {
    
    function getNavigationHeight() {
        document.getElementById("nav-bar").clientHeight;
    }

    function handleMenuClick() {
        document.documentElement.style.setProperty('--scroll-padding', getNavigationHeight() - 1 + "px");
    }

    return (
        <nav id="nav-bar">
            <ul>
                <li><a onClick={handleMenuClick} className='nav-link' href="#hakkimizda">Hakkimizda</a></li>
                <li><a onClick={handleMenuClick} className='nav-link' href="#galeri">Galeri</a></li>
                <li><a onClick={handleMenuClick} className='nav-link' href="#iletisim">Iletisim</a></li>
            </ul>
        </nav>
    )
}

export default Navbar