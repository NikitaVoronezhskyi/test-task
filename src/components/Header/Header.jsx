import Button from '../../common/Button';
import Logo from './components/Logo/Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Logo />
          <div className="navbar-right">
            <p>Dave</p>
            <Button size="btn-sm" buttonText="Logout" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
