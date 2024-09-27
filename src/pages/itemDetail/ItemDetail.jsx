import "./ItemDetail.scss";
import { useItemById } from "../../hooks";
import ItemDetailContainer from "../../components/itemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router";

export default function ItemDetail() {
	const { id } = useParams();
	const { product } = useItemById(id);
	return <ItemDetailContainer item={product}></ItemDetailContainer>;
}
