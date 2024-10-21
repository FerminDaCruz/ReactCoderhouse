import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useItemById = (id) => {
	const [product, setProduct] = useState({});

	useEffect(() => {
		const itemColecction = doc(db, "products", id);
		getDoc(itemColecction)
			.then((snapshot) => {
				setProduct({ id: snapshot.id, ...snapshot.data() });
			})
			.catch((error) => console.error(error));
	}, []);

	return { product };
};
