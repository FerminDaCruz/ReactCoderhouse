import SearchIcon from "../searchIcon/SearchIcon";
import "./Header.scss";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<Link to="/">
				<h1 className="header__title">
					Fermin<span>Store</span>
				</h1>
			</Link>

			<div className="header__navbar-container">
				<Link to="/home">
					<h3 className="navbar__link">Inicio</h3>
				</Link>
				<p>|</p>
				<Link to="/products">
					<h3 className="navbar__link">Productos</h3>
				</Link>
			</div>
			<div className="header__icon-container">
				<div className="header__icon ">
					<SearchIcon />
				</div>
				<div className="header__icon ">
					<ShoppingCart size={28} />
				</div>
			</div>
		</header>
	);
}
