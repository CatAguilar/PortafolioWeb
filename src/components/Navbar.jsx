import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/ArquiProyectos">Arquitectura</Link></li>
        <li><Link to="/FrontProyectos">Front-End</Link></li>
      </ul>
    </nav>
  );
}
