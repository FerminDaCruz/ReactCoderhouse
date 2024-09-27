import { useEffect, useState } from "react";
import { getProductById } from "../services/products.service";

export const useItemById = (id) => {
	const [product, setProduct] = useState({});

	useEffect(() => {
		getProductById(id)
			.then((res) => setProduct(res.data))
			.catch((error) => console.log(error));
	}, []);

	return { product };
};
