import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useItems = (collectionName) => {
	const [productsData, setProductsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const itemsCollection = collection(db, collectionName);

		getDocs(itemsCollection)
			.then((snapshot) => {
				setProductsData(
					snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);
			})
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return { productsData, loading };
};
