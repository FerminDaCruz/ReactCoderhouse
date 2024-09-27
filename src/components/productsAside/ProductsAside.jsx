import { Link } from "react-router-dom";
import "./ProductsAside.scss";
import { Droplet, Sparkles, Armchair, Candy, Box } from "lucide-react";

export default function ProductsAside() {
	return (
		<div className="aside-container">
			<h3 className="aside__title">Categorias</h3>
			<div className="aside__navbar">
				<Link to="/products">
					<Box />
					<p className="aside__link">Todos</p>
				</Link>
				<Link to="/categories/beauty">
					<Sparkles />
					<p className="aside__link">Beauty</p>
				</Link>
				<Link to="/categories/fragrances">
					<Droplet />
					<p className="aside__link">Fragrances</p>
				</Link>
				<Link to="/categories/furniture">
					<Armchair />
					<p className="aside__link">Furniture</p>
				</Link>
				<Link to="/categories/groceries">
					<Candy />
					<p className="aside__link">Groceries</p>
				</Link>
			</div>
		</div>
	);
}
