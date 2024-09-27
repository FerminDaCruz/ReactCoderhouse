import { Search, X } from "lucide-react";
import { useState } from "react";
import "./SearchIcon.scss";

export default function SearchIcon() {
	const [isSearching, setIsSearching] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const manejarBuscador = () => {
		setIsSearching(true);
	};

	const handleClose = () => {
		setIsSearching(false);
		setSearchTerm("");
	};

	return (
		<div>
			{isSearching ? (
				<div className="input-search-container">
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Buscar producto..."
						className="input-search"
					/>
					<X size={28} onClick={handleClose} />
				</div>
			) : (
				<Search size={28} onClick={manejarBuscador} />
			)}
		</div>
	);
}
