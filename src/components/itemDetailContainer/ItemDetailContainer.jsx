import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./ItemDetailContainer.scss";
import { Star, ShoppingCart, CreditCard } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import StarRating from "../starRating/StarRating";
import { CartContext } from "../../context/CartContext";
import CarritoModal from "../carritoModal/CarritoModal";

export default function ItemDetailContainer({ item }) {
	const { cartState, addItem, removeItem } = useContext(CartContext);

	const [activeTab, setActiveTab] = useState("description");

	const [quantity, setQuantity] = useState(0);

	// Función para aumentar el contador
	const handleAddItem = () => {
		if (quantity < item.stock) {
			const newQuantity = quantity + 1;
			setQuantity(newQuantity);
			addItem(item, newQuantity);
		} else if (quantity === item.stock) {
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
	const handleRemoveItem = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
			removeItem(item);
		}
	};

	return (
		<div className="item-detail">
			{console.log(cartState)}
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
						<StarRating rating={item.rating} />
					</div>

					<h3 className="item-detail__title">{item.title}</h3>
					<p className="item-detail__price">${item.price}</p>
					<div className="item-detail__quantity">
						<p className="item-detail__quantity-text">Cantidad</p>
						<div className="item-detail__quantity-buttons">
							<button
								className="item-detail__quantity-button"
								onClick={handleRemoveItem}
							>
								-
							</button>
							<p className="item-detail__quantity-counter">{quantity}</p>
							<button
								className="item-detail__quantity-button"
								onClick={handleAddItem}
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
						<CarritoModal />
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
