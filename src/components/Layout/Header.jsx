import React from 'react';

import { Outlet } from 'react-router-dom';
// import Nav from './HeaderNav';
import HeaderNav from './HeaderNav';

const Header = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;