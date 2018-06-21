import React from 'react';
import {Link} from 'redux-little-router';
import './Header.css';

export const Header = () => (
    <div className="header">
        <Link className="header-title" href="/">GitHub repository list</Link>
        <ul className="header-menu">
            <li className="header-menu-item"><Link href="/">Repositories</Link></li>
            <li className="header-menu-item"><Link href="/favourites">Favourites</Link></li>
        </ul>
    </div>
);
