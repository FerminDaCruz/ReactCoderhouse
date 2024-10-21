import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState([]);

	const addItem = (product, quantityItem) => {
		const existingProduct = cartState.find((item) => item.id === product.id);

		if (existingProduct) {
			setCartState(
				cartState.map((item) =>
					item.id === product.id
						? { ...item, quantityItem: item.quantityItem + 1 }
						: item
				)
			);
		} else {
			setCartState([...cartState, { ...product, quantityItem: quantityItem }]);
		}
	};

	const removeItem = (product) => {
		const existingProduct = cartState.find((item) => item.id === product.id);

		if (existingProduct) {
			if (existingProduct.quantityItem === 1) {
				setCartState(cartState.filter((item) => item.id !== product.id));
			} else {
				setCartState(
					cartState.map((item) =>
						item.id === product.id
							? { ...item, quantityItem: item.quantityItem - 1 }
							: item
					)
				);
			}
		}
	};

	return (
		<CartContext.Provider
			value={{ cartState, setCartState, addItem, removeItem }}
		>
			{children}
		</CartContext.Provider>
	);
};
