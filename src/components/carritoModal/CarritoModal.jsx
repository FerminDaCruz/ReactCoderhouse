import { CartContext } from "../../context/CartContext";
import "./CarritoModal.scss";
import { useContext, useState } from "react";
import { CreditCard } from "lucide-react";

export default function CarritoModal() {
	const [isOpen, setIsOpen] = useState(false);
	const { cartState } = useContext(CartContext);

	const total = cartState.reduce(
		(sum, item) => sum + item.quantityItem * item.price,
		0
	);

	return (
		<div className="carrito-container">
			<button className="carrito-button" onClick={() => setIsOpen(true)}>
				<CreditCard />
				Detalles de la compra
			</button>
			{isOpen && (
				<div className="modal-overlay" onClick={() => setIsOpen(false)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<h2 className="modal-title">Detalles de la compra</h2>
						<table className="carrito-table">
							<thead>
								<tr>
									<th>Producto</th>
									<th>Cantidad</th>
									<th>Precio</th>
								</tr>
							</thead>
							<tbody>
								{cartState.map((item) => (
									<tr key={item.id}>
										<td>{item.title}</td>
										<td>{item.quantityItem}</td>
										<td>${item.price.toFixed(2)}</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="carrito-total">
							<span>Total:</span>
							<span>${total.toFixed(2)}</span>
						</div>
						<button className="carrito-button" onClick={() => setIsOpen(false)}>
							Cerrar
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
