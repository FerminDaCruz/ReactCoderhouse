import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";
import NotFound from "./pages/notFound/NotFound";
import ItemDetail from "./pages/itemDetail/ItemDetail";

export default function App() {
	return (
		<Router>
			<Header />

			<Routes>
				<Route path="/" element={<Products />} />

				<Route path="/home" element={<Home />} />

				<Route path="/products" element={<Products />} />

				{/* <Route path="/cart" element={<Cart />} /> */}

				<Route path="/categories/:categoryName" element={<Categories />} />

				<Route path="/item/:id" element={<ItemDetail />} />

				{/* <Route path="/images/:itemId" element={<Images />} /> */}

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
