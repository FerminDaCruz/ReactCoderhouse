import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import ProductsAside from "../../components/productsAside/ProductsAside";
import { useItems } from "../../hooks";
import "./Products.scss";

export default function Products() {
	const { productsData, loading } = useItems();
	return loading ? (
		<div>cargando productos...</div>
	) : (
		<div className="products-container">
			<ProductsAside />
			<ItemListContainer products={productsData} />
		</div>
	);
}
