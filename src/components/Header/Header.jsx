import React from 'react'
import Button from '../../common/Button';
import Logo from './components/Logo'
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
      <nav className="navbar">
        <Logo className="navbar-logo"/>
      <div className="navbar-right">
      <p>Dave</p> 
      <Button size="btn-sm" text="Logout"/>
      </div>
      </nav>
      </div>
    </header>
  )
}

export default Header