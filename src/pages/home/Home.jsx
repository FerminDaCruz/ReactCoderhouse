import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import { useItems } from "../../hooks";

export default function Home() {
	const { productsData, loading } = useItems();
	return loading ? (
		<div>cargando productos...</div>
	) : (
		<ItemListContainer products={productsData} />
	);
}
