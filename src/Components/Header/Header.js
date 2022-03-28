import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from '../Customlink/Customlink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing website</h1>
            <nav>
                <Customlink to='/'>Home</Customlink>
                <Customlink to='/about'>About</Customlink>
                <Customlink to='/friends'>Friends</Customlink>
            </nav>
        </div>
    );
};

export default Header;