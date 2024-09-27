import { useParams } from "react-router-dom";
import ProductsAside from "../../components/productsAside/ProductsAside";
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import { useItems } from "../../hooks";

export default function Products() {
	const { productsData, loading } = useItems();
	const { categoryName } = useParams();
	const filteredProducts = productsData.filter(
		(p) => p.category === categoryName
	);

	return loading ? (
		<div>cargando productos...</div>
	) : (
		<div className="products-container">
			<ProductsAside />
			<ItemListContainer products={filteredProducts} />
		</div>
	);
}
