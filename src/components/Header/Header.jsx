import Button from "../../common/Button";
import Logo from "./components/Logo/Logo";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function isNotLoginOrRegisterPage() {
    return location.pathname !== "/login" && location.pathname !== "/registration";
  }
  function logout() {
    navigate("/login");
  }
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Logo />
          {isNotLoginOrRegisterPage() && (
            <div className="navbar-right">
              <p>Dave</p>
              <Button onClick={logout} size="btn-sm" buttonText="Logout" />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
