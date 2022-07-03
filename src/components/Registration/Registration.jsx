import "./Registration.css";
import Input from "../../common/Input";
import Header from "../Header/Header";
import Button from "../../common/Button";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  function registerNewUser(event) {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value.trim(),
      email: event.target.email.value.trim(),
      password: event.target.password.value.trim(),
    }
    navigate("/login");
  }
  return (
    <div className="container">
      <form className="registration" onSubmit={registerNewUser}>
        <h2>Registration</h2>
        <Input required labelText="Name" name="name" placeholder="Enter name" />
        <Input required labelText="Email" name="email" placeholder="Enter email" type="email" />
        <Input required labelText="Password" name="password" placeholder="Enter password" type="password" />
        <Button type="submit" buttonText="Registration" />
        <p>
          If you have an account you can <Link className="registration-login" to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
