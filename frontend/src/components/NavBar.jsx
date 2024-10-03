import { Link } from "react-router-dom";
import { token } from "../config/config";

const NavBar = () => {
  const accessToken = token.get();
  return (
    <>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        {accessToken &&
        <li>
          <Link to="cart">Cart</Link>
        </li>
        }
        <li>
          <Link to="contact-form">Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
