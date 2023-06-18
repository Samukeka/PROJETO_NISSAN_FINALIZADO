import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <header>
      <h1>Nissan</h1>
      <div>
        <Link to="/" className="txt">Home</Link>
        <Link to="/sobre" className="txt">Sobre Nós</Link>
        <Link to="/login" className="txt">Login</Link>
        <Link to="/cadastro" className="txt">Cadastro</Link>
      </div>
    </header>
  );
}

export default Header;