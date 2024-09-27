import "./ItemListContainer.scss";
import { Link } from "react-router-dom";

export default function ItemListContainer({ products }) {
	return (
		<div className="item-list-products-container">
			{products.map((item) => (
				<div key={item.id} className="product-card">
					<Link to={`/item/${item.id}`}>
						<img src={item.thumbnail} className="product-image" />
					</Link>

					<div className="product-card-info">
						<Link to={`/item/${item.id}`}>
							<h3 className="product-title">{item.title}</h3>
							<p className="product-details">{item.description}</p>
							<p className="product-price">
								<span>${item.price}</span>
							</p>
						</Link>

						<button className="add-to-cart-button">Agregar al carrito</button>
						<Link to={`/item/${item.id}`}>
							<button className="buy-button">Comprar</button>
						</Link>
						<p className="product-rating">⭐ {item.rating}</p>
					</div>
				</div>
			))}
		</div>
	);
}
