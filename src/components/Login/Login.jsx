import './Login.css';
import Input from "../../common/Input";
import Button from "../../common/Button";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  function login(event) {
    event.preventDefault();
    navigate('/courses')
  }
  return (
    <form className="login container" onSubmit={login}>
    <h2>Login</h2>
    <Input required labelText="Email" name="email" placeholder="Enter email" type="email" />
    <Input required labelText="Password" name="password" placeholder="Enter password" type="password" />
    <Button type="submit" buttonText="Login" />
    <p>
      If you not have an account you can <Link className="registration-login" to="/registration">Registration</Link>
    </p>
  </form>
  )
}

export default Login