import Button from '../../common/Button';
import Logo from './components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate()
  function logout() {
    navigate('/login')
  }
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Logo />
          <div className="navbar-right">
            <p>Dave</p>
            <Button onClick={logout} size="btn-sm" buttonText="Logout" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
