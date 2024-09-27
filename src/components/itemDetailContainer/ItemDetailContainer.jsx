import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./ItemDetailContainer.scss";
import { Star, ShoppingCart, CreditCard } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

export default function ItemDetailContainer({ item }) {
	const [activeTab, setActiveTab] = useState("description");

	const handleTabContent = () => {};

	const [cantidad, setCantidad] = useState(1);

	// Función para aumentar el contador
	const aumentarContador = () => {
		if (cantidad < item.stock) {
			setCantidad(cantidad + 1);
		} else if (cantidad === item.stock) {
			toast.error("No hay más stock disponible", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: "colored",
			});
		}
	};

	// Función para descontar el contador
	const descontarContador = () => {
		if (cantidad > 1) {
			setCantidad(cantidad - 1);
		}
	};

	return (
		<div className="item-detail">
			{/* ToastContainer para mostrar los mensajes de Toastify */}
			<ToastContainer />

			<div className="item-detail__content">
				<img
					src={item.thumbnail}
					alt="item-image"
					className="item-detail__image"
				/>
				<div className="item-detail__info">
					<div className="item-detail__rating">
						<Star />
						<p className="item-detail__rating-number">{item.rating}</p>
					</div>

					<h3 className="item-detail__title">{item.title}</h3>
					<p className="item-detail__price">${item.price}</p>
					<div className="item-detail__quantity">
						<p className="item-detail__quantity-text">Quantity</p>
						<div className="item-detail__quantity-buttons">
							<button
								className="item-detail__quantity-button"
								onClick={descontarContador}
							>
								-
							</button>
							<p className="item-detail__quantity-counter">{cantidad}</p>
							<button
								className="item-detail__quantity-button"
								onClick={aumentarContador}
							>
								+
							</button>
						</div>
					</div>
					<div className="item-detail__buttons">
						<button className="item-detail__add-to-cart-button">
							<ShoppingCart />
							Agregar al carrito
						</button>
						<button className="item-detail__buy-button">
							<CreditCard />
							Comprar
						</button>
					</div>
				</div>
			</div>
			<div className="item-detail__product-tabs">
				<div className="item-detail__tab-buttons">
					<button
						className="item-detail__tab-button"
						onClick={() => setActiveTab("description")}
					>
						description
					</button>
					<button
						className="item-detail__tab-button"
						onClick={() => setActiveTab("reviews")}
					>
						reviews
					</button>
				</div>
				<div className="item-detail__tab-content">
					{activeTab === "description" && (
						<div className="item-detail__tab-content-description">
							<p>{item.description}</p>
						</div>
					)}
					{activeTab === "reviews" && (
						<div className="item-detail__tab-content-reviews">
							<ul>
								{item.reviews.map((review, index) => (
									<li className="item-detail__tab-content-review" key={index}>
										<p className="item-detail__tab-content-reviewer-name">
											<strong>{review.reviewerName}</strong> ({review.date})
										</p>
										<p className="item-detail__tab-content-review-rating">
											Calificación: {review.rating}
										</p>
										<p className="item-detail__tab-content-review-comment">
											Comentario: {review.comment}
										</p>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
