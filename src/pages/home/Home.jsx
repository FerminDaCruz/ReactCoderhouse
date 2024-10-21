import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import { useItems } from "../../hooks";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
	const { productsData } = useItems("products");
	return (
		<div className="home-container">
			<section className="hero-section">
				<h1 className="hero-section__hero">
					Bienvenido a nuestra tienda en línea
				</h1>
				<p className="hero-section__text">
					Descubre nuestros productos de alta calidad y ofertas exclusivas
				</p>

				<button className="hero-section__button">
					<Link to="/products">Ver productos</Link>
				</button>
			</section>
			<section className="featured-products-section">
				<h2 className="featured-products-section__title">
					Productos Destacados
				</h2>
				<div className="featured-products-section__products">
					<ItemListContainer products={productsData} itemsToShow={5} />
				</div>
			</section>
			<section className="popular-categories-section">
				<h2 className="popular-categories-section__title">
					Categorías Populares
				</h2>
				<div className="popular-categories-section__categories-container">
					<Link to="/categories/furniture">
						<div className="popular-categories-section__category">
							Furniture
						</div>
					</Link>
					<Link to="/categories/beauty">
						<div className="popular-categories-section__category">Beauty</div>
					</Link>
					<Link to="/categories/groceries">
						<div className="popular-categories-section__category">
							Groceries
						</div>
					</Link>
				</div>
			</section>
		</div>
	);
}
