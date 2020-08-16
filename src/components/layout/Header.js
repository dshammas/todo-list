import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>DS BrainStorming</h1>
                <Link style={linkStyle} to="/">Home</Link> | {' '}
                <Link style={linkStyle} to="/about">About</Link>
            </header>
        </div>
    )
}


const headerStyle = {
    background: 'rgb(85, 78, 79)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }

export default Header;
